import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Andre's Portfolio | Home</title>
      </Head>
      <Header />
      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>
      {/* Skills */}
      {/* Projects */}
      {/* Experience */}
      {/* About */}
      {/* Contact Me */}
    </div>
  )
}

export default Home
