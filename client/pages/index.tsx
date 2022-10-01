import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About/About'
import Header1 from '../components/Header/Header1'
import Header2 from '../components/Header/Header2'
import Hero from '../components/Hero/Hero1'
import Hero2 from '../components/Hero/Hero2'
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
      {/* <Header1 /> */}
      {/* Hero */}
      <Hero2 />
      {/* <section id='hero' className='snap-center'>
        <Hero />
      </section> */}
      {/* Skills */}
      <Skills/>
      {/* Projects */}
      {/* Experience */}
      {/* About */}
      <section>
        <About />
      </section>
      {/* Contact Me */}
    </div>
  )
}

export default Home
