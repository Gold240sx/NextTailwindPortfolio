import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'

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
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <h1>
            <span className='text-gray-400 text-2xl'>{text}</span>
            <Cursor cursorColor='green' cursorStyle='|' />
        </h1>
    </div>
  )
}