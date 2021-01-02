import Image from 'next/image'
import styled from 'styled-components'
import { staticPath } from '../lib'

const files = {
  hatena: {
    filename: staticPath.socials.hatena_svg,
    url: 'https://fumihumi.hatenablog.com/',
    service: 'hatenablog'
  },
  twitter: {
    filename: staticPath.socials.twitter_png,
    url: 'https://twitter.com/_fumihumi',
    service: 'Twitter'
  },
  github: {
    filename: staticPath.socials.github_svg,
    url: 'https://github.com/fumihumi',
    service: 'GitHub'
  },
  scrapbox: {
    filename: staticPath.socials.scrapbox_svg,
    url: 'https://scrapbox.io/fumihumi/',
    service: 'Scrapbox'
  }
} as const

type SocialType = keyof typeof files
type Props = { type: SocialType }
const ImageSize = 45

const SocialLink: React.FC<Props> = ({ type }) => {
  const { filename, url, service } = files[type]

  return (

    <Link href={url} target="_blank">
      <Image
        src={filename}
        alt={`fumihumi's social link for ${service}`}
        width={ImageSize}
        height={ImageSize}
        className={type}
      />
    </Link >
  )
}

const Link = styled.a`
  .hatena { background: white; }
`

export { SocialLink }


