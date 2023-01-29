import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import heroImage from "../Assets/Images/Hero Image.png";
import heroRing from "../Assets/Images/Hero Ring.png";

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"I'm a solution-first, front-end web developer",
			"committed to building dynamic and engaging web applications",
			"to support small businesses in competing growing and thriveing",
			"to automate processes and improve efficiency",
			"and to make our life on the the internet just a bit more fun!",
		],
		delaySpeed: 2000,
		loop: true,
		deleteSpeed: 50,
	});

	return (
		<div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
			<BackgroundCircles />
			<Image
            src={heroRing}
            alt='hero-image'
            width={550}
            className='z-0 flex justify-center align-middle -mt-[1.8rem] ml-[19px] absolute'
            style={{marginTop: "-1.8rem !important"}}
             />
			<Image
				src={heroImage}
				alt="hero-image"
				width={500}
				style={{ marginLeft: "42px" }}
			/>

			<h1>
				<span className="text-2xl text-gray-400">{text}</span>
				<Cursor cursorColor="orange" cursorStyle="|" />
			</h1>
		</div>
	);
}
