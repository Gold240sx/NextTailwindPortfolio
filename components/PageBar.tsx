import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function PageBar() {

    return (
			<header className="absolute z-20 flex items-center justify-between p-1 mx-auto mt-20 ml-4 opacity-50 right-4 max-w-7xl hover:opacity-100 text-slate-300 my-auto; h-[80%]">
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
						className="text-5xl text-gray-200 uppercase hover:text-6xl hover:text-gray-400 hover:mr-2"
						href="#"
					>
						ABOUT
					</a>
					<a
						className="text-5xl text-gray-200 uppercase hover:text-6xl hover:opacity-100 hover:mr-2 hover:text-gray-400"
						href="#"
					>
						SKILLS
					</a>
					<a
						className="text-5xl text-gray-200 uppercase hover:text-6xl hover:opacity-100 hover:mr-2 hover:text-gray-400"
						href="#"
					>
						TIMELINE
					</a>
					<a
						className="text-5xl text-gray-200 uppercase hover:text-6xl hover:opacity-100 hover:mr-2 hover:text-gray-400"
						href="#"
					>
						EDUCATION
					</a>
					<a
						className="text-5xl text-gray-200 uppercase hover:text-6xl hover:opacity-100 hover:mr-2 hover:text-gray-400"
						href="#"
					>
						EXPERIENCE
					</a>
					<a
						className="text-5xl text-gray-200 uppercase hover:text-6xl hover:opacity-100 hover:mr-2 hover:text-gray-400"
						href="#"
					>
						PROJECTS
					</a>
					<a
						className="text-5xl text-gray-200 uppercase hover:text-6xl hover:opacity-100 hover:mr-2 hover:text-gray-400"
						href="#"
					>
						CONTACT
					</a>
					<a
						className="text-5xl text-gray-200 uppercase hover:text-6xl hover:opacity-100 hover:mr-2 hover:text-gray-400"
						href="#"
					>
						Blog
					</a>
					<a
						className="text-5xl text-gray-200 uppercase hover:text-6xl hover:opacity-100 hover:mr-2 hover:text-gray-400"
						href="#"
					>
						ART
					</a>
				</motion.div>
			</header>
		);
}
