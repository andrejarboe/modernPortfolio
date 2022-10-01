import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About/About'
import Footer from '../components/Footer'
import Header1 from '../components/Header/Header1'
import Header2 from '../components/Header/Header2'
import Hero from '../components/Hero/Hero1'
import Hero2 from '../components/Hero/Hero2'
import Projects from '../components/Projects'
import Projects2 from '../components/Projects2'
import Projects3 from '../components/Projects3'
import Skills from '../components/Skills/Skills'

const Home: NextPage = () => {
  return (
    <div
    // className='text-secondary h-screen snap-y snap-mandatory overflow-scroll z-0'
    >
      <Head>
        <title>Andre's Portfolio | Home</title>
      </Head>
      <Header2 />
      <Hero2 />
      {/* <Skills /> */}
      <Projects2 />
      <Footer />
      {/* <Projects3 /> */}
      {/* <Header1 /> */}
      {/* Hero */}
      {/* <section id='hero' className='snap-center'>
        <Hero />
      </section> */}
      {/* Skills */}
      {/* Projects */}
      {/* <section>
        <Projects />
      </section> */}
      {/* Experience */}
      {/* About */}
      {/* <section>
        <About />
      </section> */}
      {/* Contact Me */}
    </div>
  )
}

export default Home
