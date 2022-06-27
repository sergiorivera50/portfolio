import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'
import api from '../services/project'

export async function getServerSideProps() {
  const { data } = await api.getFeaturedProjects(4)
  const { projects } = data

  return {
    props: { featuredProjects: projects }
  }
}

export default function Home({ featuredProjects }) {
  return (
    <div>
      <Head>
        <title>Sergio Rivera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Projects projects={ featuredProjects } />
    </div>
  )
}
