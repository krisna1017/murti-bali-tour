import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const ROOTS = ['public', 'src/assets']
const MAX_WIDTH = 1920
const JPEG_QUALITY = 70
const WEBP_QUALITY = 68
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp'])

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (EXT.has(path.extname(entry.name).toLowerCase())) out.push(full)
  }
}

const files = []
for (const r of ROOTS) {
  if (fs.existsSync(r)) walk(r, files)
}

let totalBefore = 0
let totalAfter = 0
let processed = 0

for (const file of files) {
  const before = fs.statSync(file).size
  try {
    const img = sharp(file)
    const meta = await img.metadata()
    const ext = path.extname(file).toLowerCase()

    let pipeline = img
    const w = meta.width || 0
    if (w > MAX_WIDTH) pipeline = pipeline.resize(MAX_WIDTH)

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: WEBP_QUALITY })
    } else if (ext === '.png') {
      pipeline = pipeline.png({ compressionLevel: 9, palette: true })
    }

    await pipeline.toFile(file + '.tmp')
    fs.copyFileSync(file + '.tmp', file)
    fs.unlinkSync(file + '.tmp')

    const after = fs.statSync(file).size
    totalBefore += before
    totalAfter += after
    processed++
    const pct = before > 0 ? Math.round((1 - after / before) * 100) : 0
    if (pct > 0) console.log(`${path.relative('.', file)}  ${(before/1024).toFixed(0)}KB -> ${(after/1024).toFixed(0)}KB (-${pct}%)`)
  } catch (e) {
    console.error('FAILED', file, e.message)
  }
}

console.log(`\nDone: ${processed} files`)
console.log(`Total ${(totalBefore/1024/1024).toFixed(1)}MB -> ${(totalAfter/1024/1024).toFixed(1)}MB`)
