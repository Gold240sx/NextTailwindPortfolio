import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            x: -200,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: [0.1,0.2,0.4,0.8,0.3,1,0],
            scale: [1,2,2,3,1],
        }}
        transition={{
            duration: 2.5,
        }}
        className='relative flex justify-center items-center'
    >
        <div className='absolute border border-pink-800 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-red-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        <div className='absolute border border-orange-500 rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        <div className='absolute border border-orange-200 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className='absolute border border-purple-800 rounded-full h-[800px] w-[800px] mt-52 animate-ping'/>
    </motion.div>
  )
}
