import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image';
import heroImage from '../Assets/Images/Hero Image.png'
import heroRing from '../Assets/Images/Hero Ring.png'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Competed in the Juggling World championships",
            "Loves Cars, Design, and Art",
            "Automation, App Creation",
            "Small Business, growth bring More Vacations"
        ],
        delaySpeed: 2000,
    })


  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center'>
        <BackgroundCircles />
        {/* <Image
            src={heroRing}
            alt='hero-image'
            width={550}
            style={{ marginLeft:'15px'}}
        /> */}
        <Image
            src={heroImage}
            alt='hero-image'
            width={500}
            style={{ marginLeft:'42px'}}
        />

        <h1>
            <span className='text-2xl text-gray-400'>{text}</span>
            <Cursor cursorColor='lime' cursorStyle='|' />
        </h1>
    </div>
  )
}