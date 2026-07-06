import { useHead } from '@vueuse/head'

export function useSeo({
  title,
  description,
  image,
  url
}) {
  useHead({
    title,

    meta: [
      {
        name: 'description',
        content: description
      },

      {
        property: 'og:title',
        content: title
      },

      {
        property: 'og:description',
        content: description
      },

      {
        property: 'og:image',
        content: image
      }
    ],

    link: [
      {
        rel: 'canonical',
        href: url
      }
    ]
  })
}