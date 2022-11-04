import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function SocialBar({}: Props) {
	return (
		<header className="fixed bottom-0 z-20 flex items-center justify-between p-1 mx-auto max-w-7xl ">
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
				className="flex flex-col items-center"
			>
				{/* social icons */}
				<SocialIcon
					url="https://github.com/gold240sx"
					fgColor="#CFCFCF"
					className="hover: fill-gray-900"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://stackoverflow.com/users/16441693/michael-martell"
					fgColor="transparent"
					bgColor="#CFCFCF"
					style={{ height: "26px", width: "26px" }}
				/>
				<SocialIcon
					url="https://michael-martell.com"
					fgColor="#CFCFCF"
					bgColor="transparent"
					className="hover:text-gray-900 !important"
				/>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="#CFCFCF"
					bgColor="transparent"
				/>
				<p className="hidden text-gray-400 uppercase hover:block text sm">
					GET IN TOUCH!
				</p>
			</motion.div>
		</header>
	);
}
