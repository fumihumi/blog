import Image from 'next/image'
import styled from 'styled-components'

const files = {
  hatena: {
    filename: 'hatena.svg',
    url: 'https://fumihumi.hatenablog.com/',
    service: 'hatenablog'
  },
  twitter: {
    filename: 'twitter.png',
    url: 'https://twitter.com/_fumihumi',
    service: 'Twitter'
  },
  github: {
    filename: 'github.svg',
    url: 'https://github.com/fumihumi',
    service: 'GitHub'
  },
  scrapbox: {
    filename: 'scrapbox.svg',
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
        src={`/socials/${filename}`}
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


