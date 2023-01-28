import { motion } from "framer-motion";
import React from "react";

export default function Timeline() {
	return (
		<div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center justify-evenly md:text-left max-w-7xl">
			<h2 className="relative top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h2>
			<div id="tech-stack-container">
				<h3>My Tech Stack</h3>
				<div id="tech-icon-row">
					<ul className="flex flex-row list">
						<li>Javascript</li>
						<li>Typescript</li>
						<li>React</li>
						<li>Vanilla</li>
						<li>Next.JS</li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>

			<div id="Technologies">
				<h3>Technologies I use and enjoy</h3>
				<div id="tech-icon-row">
					<ul className="flex flex-row list">
						<li>Javascript</li>
						<li>Typescript</li>
						<li>React</li>
						<li>Vanilla</li>
						<li>Next.JS</li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>

			<div id="Technologies">
				<h3>Technologies I've Studied</h3>
				<div id="tech-icon-row">
					<ul className="flex flex-row list">
						<li>Javascript</li>
						<li>Typescript</li>
						<li>React</li>
						<li>Vanilla</li>
						<li>Next.JS</li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>

			<div id="general-skills">
				<h3>General</h3>
				<div id="tech-icon-row">
					<ol className="flex flex-row list">
						<li>Javascript</li>
						<li>Typescript</li>
						<li>React</li>
						<li>Vanilla</li>
						<li>Next.JS</li>
						<li></li>
						<li></li>
					</ol>
				</div>
			</div>
		</div>
	);
}
