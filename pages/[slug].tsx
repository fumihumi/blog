import fs from 'fs'
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";
import { Layout, CodeBlock } from '../components'
import styled from 'styled-components';
import 'github-markdown-css/github-markdown.css'

type Props = {
  content: string;
  data: {
    title: string;
    description: string;
    slug: string;
    date: string;
  }
};

// TODO:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Blog: NextPage<Props> = ({ content, data: { title, description, slug, date } }) => {
  return (
    <Layout title={title} description={description} slug={slug}>
      <Main className="markdown-body">
        <ReactMarkdown
          source={content}
          renderers={{ code: CodeBlock }}
          allowDangerousHtml
        />
      </Main>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const content = (await import(`../content/${slug}.md`)).default
  const data = matter(content)

  return {
    props: {
      content: data.content,
      data: data.data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8')
  const paths = files.filter(filename => filename.endsWith(".md")).map(filename => `/${filename.replace(".md", "")}`)

  return { paths, fallback: false }
}


const Main = styled.main`
  padding: 2rem;

  h1:before { content: "# " }
  h2:before { content: "## " }
  h3:before { content: "### " }
  h4:before { content: "#### " }
  h5:before { content: "##### " }
  h6:before { content: "###### " }
  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }) => theme.colors.primary};

    &::before { font-size: .8em; }
  }
`
