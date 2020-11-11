import Image from 'next/image'
import styled from 'styled-components'

const files = {
  hatena: {
    filename: 'hatena.svg',
    url: 'https://fumihumi.hatenablog.com/',
  },
  twitter: {
    filename: 'twitter.png',
    url: 'https://twitter.com/_fumihumi'
  },
  github: {
    filename: 'github.svg',
    url: 'https://github.com/fumihumi'
  },
  scrapbox: {
    filename: 'scrapbox.svg',
    url: 'https://scrapbox.io/fumihumi/'
  }
} as const

type SocialType = keyof typeof files
type Props = { type: SocialType }
const ImageSize = 45

const SocialLink: React.FC<Props> = ({ type }) => {
  const { filename, url } = files[type]

  return (

    <Link href={url} target="_blank">
      <Image
        src={`/socials/${filename}`}
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


