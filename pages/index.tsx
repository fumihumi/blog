import { GetStaticProps } from 'next'
import matter from "gray-matter"
import styled from 'styled-components'
import { BlogList, Layout } from '../components'

type Props = { data: string[]; title: string; description: string }

const MyApp: React.FC<Props> = ({ data, title, description }) => {
  const blogs = data.map(blog => matter(blog)).map(item => item.data)

  return (
    <Layout title={title} description={description}>
      <Main>
        {
          blogs.map((blog, i) => (
            <BlogList
              key={i}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              slug={blog.slug}
            />
          ))
        }
      </Main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const siteData = await import("../config.json")
  const fs = await import("fs")

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8")
  // TODO: 非公開の記事とかできるようにいい感じにする
  const blogs = files.filter(fn => fn !== 'markdown-sample.md' && fn.endsWith(".md"))
  const data = blogs.map(blog => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, { encoding: "utf-8" })

    return rawContent
  })


  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description
    }
  }
}

export default MyApp

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 3rem;
  width: 80%;
`
