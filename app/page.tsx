import Head from 'next/head'
import Hero from './components/Hero'
import About from './components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crystam-num official website</title>
        <meta property="og:title" content="Crystal-num official website" key="title" />
      </Head>
      <Hero />
      <About />
      
    </div>
  )
}
