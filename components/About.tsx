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
                        opacity: 0
					}}
					whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
					src="https://i.ibb.co/C979rFf/AboutMe.jpg"
                    //prevent animation from repeating
                    viewport={{once: true}}
					alt="About"
					className="flex-shrink-0 object-cover w-1/2 h-auto my-auto -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
				/>

                <div>
                    <h4 className="text-4xl font-semibold">A little about me...</h4>
                    <p></p>
                </div>
			</div>
		);
}