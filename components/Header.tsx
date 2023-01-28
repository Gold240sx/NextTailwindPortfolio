import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import macIcon from "../Assets/Icons/mac.png";
import "../styles/Header.module.css";

import Image from "next/image";
import homePic from "../Assets/Images/header.png";
import homePicDark from "../Assets/Images/headerDark.png";
import { useStateContext } from "../context/ContextProvider";

type Props = {};

export default function Header({}: Props) {
	const { setMode, currentMode, textColor }: any = useStateContext();

	return (
		<header className="sticky top-0 z-20 flex items-center justify-between p-5 mx-auto h-fit max-w-7xl xl:">
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
				className="flex flex-row items-center "
			>
				{/* left grouping */}
				{/* <macIcon style={{width: "40px", height: "40px"}} /> */}
				<Image
					src={homePic}
					alt="Home Link"
					width={225}
					blurDataURL="data:..."
					placeholder="blur"
					className="flex mr-4 select-none dark:hidden"
				/>
				<Image
					src={homePicDark}
					alt="Home Link"
					width={225}
					blurDataURL="data:..."
					placeholder="blur"
					className="hidden mr-4 select-none dark:flex"
				/>
				<div className="z-10 inline-flex h-full mode-picker">
					<input
						type="radio"
						id="light"
						name="theme"
						value="Light"
						className="hidden cursor-pointer"
						onChange={setMode}
						checked={currentMode === "Light"}
					/>
					<label
						htmlFor="light"
						className={`cursor-pointer text-md ${
							currentMode === "Light" ? "hidden" : ""
						} h-full`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-8 h-full -mt-4 mode-picker opacity-40"
							fill="none"
							viewBox="0 0 24 24"
							stroke={textColor}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
					</label>
					<div className="h-full">
						<input
							type="radio"
							id="dark"
							name="theme"
							value="Dark"
							className="hidden cursor-pointer"
							onChange={setMode}
							checked={currentMode === "Dark"}
						/>
						<label
							htmlFor="dark"
							className={`cursor-pointer text-md ${
								currentMode === "Dark" ? "hidden" : ""
							}`}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-8 h-full -mt-4 opacity-40 mode-picker"
								fill="none"
								viewBox="0 0 24 24"
								stroke={textColor}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								/>
							</svg>
						</label>
					</div>
				</div>
			</motion.div>

            SEARCHBAR
			<motion.div
				initial={{
					x: 200,
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
				className="dark:text-white"
			>
				{/* Right Grouping */}
				<button className="px-4 py-1 rounded-full mt-[-90px] dark:text-slate-800 dark:bg-slate-600 bg-slate-300 text-slate-100 select-none dark:hover:bg-slate-700 hover:bg-slate-200">
					SignIn
				</button>
			</motion.div>
		</header>
	);
}
