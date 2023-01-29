import { motion } from "framer-motion";
import React from "react";

export default function Timeline() {
	return (
		<div className="relative flex flex-col items-center px-10 mx-auto text-center h-fit justify-evenly md:text-left max-w-7xl">
			<h3 className="relative top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Timeline
			</h3>
			<div id="lineup-container" className="">
				<h2 className="mt-20">Lineup</h2>
				<p>
					Follow the timetable and stage to ensure you don't miss your favorite
					artist
				</p>
				<div
					id="rounded-lg min-h-[250px] lineup-wrapper"
					className="relative px-2 py-4 mt-5 bg-zinc-800 text-zinc-200"
				>
					<div
						id="blue-timeline"
						className="absolute z-10 top-0 left-1/2 w-4 ml-[-8px] h-full rounded-full bg-gradient-to-bottom from-sky-900 via-cyan-900 to-teal-900"
					></div>

					<div id="placement-indicator-wrapper" className="sticky top-1/2">
						<div id="placement-indicator" className="relative w-4 h-4">
							{/* <!-- animate-ping below comes out of the box in tailwind, so no need to set up a custom animation--> */}
							<div
								id="pulse-effect"
								className="absolute w-4 h-4 bg-pink-500 rounded-full opacity-75 animate-ping"
							></div>
							<div
								id="pin"
								className="relative w-4 h-4 rounded-full bg-rose-500"
							></div>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-8">
						{/* <!-- Day 1 --> */}
						<div id="lineup-col-content" className="">
							<h4 className="p-2 my-4 rounded-lg bg-zinc-900">1st of July</h4>
						</div>
						<div id="empty-right-1"></div>

						<div className="text-right">
							<div className="font-bold">Blink 182</div>
							<div className="text-zinc-400">6PM - Sage Stage</div>
						</div>
						<div id="empty-right-2"></div>

						<div id="empty-left-1"></div>
						<div className="">
							<div className="font-bold">Death Cab For Cutie</div>
							<div className="text-zinc-400">3PM - Teal Stage</div>
						</div>

						{/* <!-- Day 2 --> */}
						<div id="lineup-col-content" className="">
							<h4 className="p-2 my-4 rounded-lg bg-zinc-900">1st of July</h4>
						</div>
						<div id="empty-right-1"></div>

						<div className="text-right">
							<div className="font-bold">Blink 182</div>
							<div className="text-zinc-400">6PM - Sage Stage</div>
						</div>
						<div id="empty-right-2"></div>

						<div id="empty-left-1"></div>
						<div className="">
							<div className="font-bold">Death Cab For Cutie</div>
							<div className="text-zinc-400">3PM - Teal Stage</div>
						</div>

						<div className="text-right">
							<div className="font-bold">Blink 182</div>
							<div className="text-zinc-400">6PM - Sage Stage</div>
						</div>
						<div id="empty-right-2"></div>

						<div id="empty-left-1"></div>
						<div className="">
							<div className="font-bold">Death Cab For Cutie</div>
							<div className="text-zinc-400">3PM - Teal Stage</div>
						</div>

						<div className="text-right">
							<div className="font-bold">Blink 182</div>
							<div className="text-zinc-400">6PM - Sage Stage</div>
						</div>
						<div id="empty-right-2"></div>

						<div id="empty-left-1"></div>
						<div className="">
							<div className="font-bold">Death Cab For Cutie</div>
							<div className="text-zinc-400">3PM - Teal Stage</div>
						</div>

						<div className="text-right">
							<div className="font-bold">Blink 182</div>
							<div className="text-zinc-400">6PM - Sage Stage</div>
						</div>
						<div id="empty-right-2"></div>

						<div id="empty-left-1"></div>
						<div className="">
							<div className="font-bold">Death Cab For Cutie</div>
							<div className="text-zinc-400">3PM - Teal Stage</div>
						</div>

						<div className="text-right">
							<div className="font-bold">Blink 182</div>
							<div className="text-zinc-400">6PM - Sage Stage</div>
						</div>
						<div id="empty-right-2"></div>

						<div id="empty-left-1"></div>
						<div className="">
							<div className="font-bold">Death Cab For Cutie</div>
							<div className="text-zinc-400">3PM - Teal Stage</div>
						</div>

						<div className="text-right">
							<div className="font-bold">Blink 182</div>
							<div className="text-zinc-400">6PM - Sage Stage</div>
						</div>
						<div id="empty-right-2"></div>

						<div id="empty-left-1"></div>
						<div className="">
							<div className="font-bold">Death Cab For Cutie</div>
							<div className="text-zinc-400">3PM - Teal Stage</div>
						</div>
						<div className="text-right">
							<div className="font-bold">Blink 182</div>
							<div className="text-zinc-400">6PM - Sage Stage</div>
						</div>
						<div id="empty-right-2"></div>

						<div id="empty-left-1"></div>
						<div className="">
							<div className="font-bold">Death Cab For Cutie</div>
							<div className="text-zinc-400">3PM - Teal Stage</div>
						</div>

						<div className="text-right">
							<div className="font-bold">Blink 182</div>
							<div className="text-zinc-400">6PM - Sage Stage</div>
						</div>
						<div id="empty-right-2"></div>

						<div id="empty-left-1"></div>
						<div className="">
							<div className="font-bold">Death Cab For Cutie</div>
							<div className="text-zinc-400">3PM - Teal Stage</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
