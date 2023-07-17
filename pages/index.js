import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Adrian</title>
        <meta name="description" content="I'm a math and CS student in Granada." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    </div>
  )
}
