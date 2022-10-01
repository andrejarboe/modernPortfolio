import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='text-secondary h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Andre's Portfolio | Home</title>
      </Head>
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* Skills */}
      {/* Projects */}
      {/* Experience */}
      {/* About */}
      <section>
        
      </section>
      {/* Contact Me */}
    </div>
  )
}

export default Home
