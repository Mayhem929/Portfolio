import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Adrian&apos;s Website</title>
        <meta name="description" content="I'm a math and CS student in Granada." />
        <link rel="icon" href="/anchor.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    </div>
  )
}
