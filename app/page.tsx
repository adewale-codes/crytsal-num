import Head from 'next/head'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import HelpContact from './components/HelpContact'
import Gear from './components/Gear'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crystam-num official website</title>
        <meta property="og:title" content="Crystal-num official website" key="title" />
      </Head>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <HelpContact />
      <Gear />
      <Testimonials />
      {/* <Footer /> */}
      
    </div>
  )
}
