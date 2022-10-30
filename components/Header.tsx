import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import macIcon from '../Assets/Icons/mac.png'

import Image from 'next/image';
import homePic from '../Assets/Images/header.png'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 z-20 flex items-start items-center justify-between p-5 mx-auto max-w-7xl xl:'>
      <motion.div 
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center' 
      >
           {/* left grouping */}
           {/* <macIcon style={{width: "40px", height: "40px"}} /> */}
           <Image 
            src={homePic}
            alt="Home Link" 
            width={225}
            blurDataURL="data:..."
            placeholder="blur"
          />

      </motion.div>

        <motion.div
          initial={{
            x: 200,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.5,
          }}
          className=""
        >
          {/* Right Grouping */}
          SignIn
        </motion.div>
    </header>
  )
}