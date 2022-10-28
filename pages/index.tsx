import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Michael&apos;s Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

      <h1 className="text-red-500">Let&apos;s build an AWESOME portfolio!</h1>
    </div>
  )
}

export default Home;