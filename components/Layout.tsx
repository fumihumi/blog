import Head from 'next/head'
import styled from 'styled-components'
import { SideBar } from '../components'
import { device } from '../lib'
import { useRouter } from 'next/router'

const SITE_TITLE = "fumihumi's blog"

type Props = {
  title: string,
  description: string
}

export const Layout: React.FC<Props> = ({ title, description, children }) => {
  console.log(`
    Thank you for coming to 'fumihumi.me'
    こんなところをついつい覗いちゃうアナタへ。
    バグ報告はコチラへ: https://github.com/fumihumi/blog/issues/new お願いします！
  `)

  const router = useRouter();

  return (
    <>
      <MetaHeader
        title={router.pathname === '/' ? title : `${title} | ${SITE_TITLE}`}
        description={description}
      />
      <Wrapper>
        <SideBar />
        <Parent>
          {children}
          {
            // <footer>&copy; {SITE_TITLE}</footer>
          }
        </Parent>

      </Wrapper>
    </>
  )
}


const MetaHeader: React.FC<Props> = ({ title, description }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="Description" content={description}></meta>
    <title>{title}</title>
  </Head>
)

const Wrapper = styled.div`
  display: --webkit-flex;
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
    width: 100vw;
  }

  @media ${device.tablet} {
    flex-direction: row;
    width: 80vw;
  }
`

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
