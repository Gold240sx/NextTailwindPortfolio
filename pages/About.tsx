import { motion } from "framer-motion";
import React from "react";

export default function About() {
    return (
			<div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center justify-evenly md:text-left max-w-7xl">
				<h3 className="relative top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
					About
				</h3>
				<motion.img
					initial={{
						x: -200,
						opacity: 0,
					}}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.2 }}
					src="https://i.ibb.co/C979rFf/AboutMe.jpg"
					//prevent animation from repeating
					viewport={{ once: true }}
					alt="About"
					className="flex-shrink-0 object-cover w-1/2 h-auto mt-6 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
				/>

				<div className="w-screen dark:text-white">
					<h4 className="flex w-[70%] mx-auto mb-2 text-4xl font-semibold text-left">
						A little about me...
					</h4>
					<p className="flex w-[70%] mx-auto text-left">
						Thanks for checking out my portfolio! <br></br>I am a former arts
						and design student in Frisco, TX. I began my web developement journey in November
						of 2020. My first formal web Developement Job began in 2022.<br></br>
                        I'm a proud doggy dad of my corgi. In my freetime, I enjoy making things, cars, music, mountain biking and Jiu Jitsu. 
                        I enjoy religious studies, and am currently learning Hebrew.
					</p>
				</div>
			</div>
		);
}