/* eslint-disable */
export const pagesPath = {
  _slug: (slug: string | number) => ({
    $url: (url?: { hash?: string }) => ({ pathname: '/[slug]' as const, query: { slug }, hash: url?.hash })
  }),
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  medias: {
    mirroring_android_device: {
      $01_gif: '/medias/mirroring-android-device/01.gif'
    }
  },
  socials: {
    github_svg: '/socials/github.svg',
    hatena_svg: '/socials/hatena.svg',
    scrapbox_svg: '/socials/scrapbox.svg',
    twitter_png: '/socials/twitter.png'
  }
} as const

export type StaticPath = typeof staticPath
