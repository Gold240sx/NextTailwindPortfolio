import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SocialBar from '../components/SocialBar'
import styles from '../styles/Home.module.css'
import { useStateContext } from '../context/ContextProvider';

//  app min-height: 248px.
const Home: NextPage = () => {
  const { currentMode }:any = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='z-0 h-screen overflow-scroll snap-y snap-mandatory dark:bg-main-dark-bg bg-slate-50'>
        <Head>
          <title>Michael&apos;s Portfolio</title>
        </Head>

        {/* Header, Social Bar, Nav */}
        <Header />
        <SocialBar />

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
    </div>
  )
}

export default Home;