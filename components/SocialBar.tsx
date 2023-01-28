import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function SocialBar({}: Props) {
	return (
		<header className="fixed bottom-0 z-20 flex items-center justify-between p-1 mx-auto ml-4 max-w-7xl">
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
				className="flex flex-col items-center mb-4"
			>
				{" "}
				{/* above bg-orange-500 rounded-full */}
				{/* social icons */}
				<SocialIcon
					url="https://github.com/gold240sx"
					fgColor="#CFCFCF"
					className="dark:opacity-50"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://stackoverflow.com/users/16441693/michael-martell"
					fgColor="transparent"
					bgColor="#CFCFCF"
					className="dark:opacity-50"
					style={{
						height: "26px",
						width: "26px",
						marginBlock: "0.5rem 0.4rem",
					}}
				/>
				<SocialIcon
					url="https://michael-martell.com"
					fgColor="#CFCFCF"
					bgColor="transparent"
					className="dark:opacity-50"
				/>
				<SocialIcon
					url="mailto:240designworks@gmail.com"
					className="mb-1 -mt-2 cursor-pointer dark:opacity-50"
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
