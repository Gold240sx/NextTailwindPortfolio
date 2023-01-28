import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function PageBar() {

    return (
			<header className="absolute z-20 flex items-center justify-between p-1 mx-auto mt-20 ml-4 right-4 max-w-7xl">
				<motion.div
					initial={{
						x: -200,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className="z-10 flex flex-col text-right"
				>
					<a
						className="text-2xl text-gray-400 uppercase hover:text-4xl"
						href="#"
					>
						ABOUT
					</a>
					<a
						className="text-2xl text-gray-400 uppercase hover:text-4xl"
						href="#"
					>
						PROJECTS
					</a>
					<a
						className="text-2xl text-gray-400 uppercase hover:text-4xl"
						href="#"
					>
						EXPERIENCE
					</a>
					<a
						className="text-2xl text-gray-400 uppercase hover:text-4xl"
						href="#"
					>
						SKILLS
					</a>
					<a
						className="text-2xl text-gray-400 uppercase hover:text-4xl"
						href="#"
					>
						EDUCATION
					</a>
					<a
						className="text-2xl text-gray-400 uppercase hover:text-4xl"
						href="#"
					>
						TIMELINE
					</a>
					<a className="text-2xl text-gray-400 uppercase hover:text-4xl" href="#">
						CONTACT
					</a>
				</motion.div>
			</header>
		);
}
