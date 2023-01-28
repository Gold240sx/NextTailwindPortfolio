import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "./About";
import SocialBar from "../components/SocialBar";
import PageBar from "../components/PageBar";
import styles from "../styles/Home.module.css";
import { useStateContext } from "../context/ContextProvider";
import Timeline from "./Timeline";
import Skills from "./Skills"

//  app min-height: 248px.
const Home: NextPage = () => {
	const { currentMode }: any = useStateContext();

	return (
		<div className={currentMode === "Dark" ? "dark" : ""}>
			<div className="relative z-0 h-screen overflow-scroll snap-mandatory snap-y dark:bg-main-dark-bg bg-slate-50">
				<Head>
					<title>Michael&apos;s Portfolio</title>
				</Head>

				{/* Header, Social Bar, Nav */}
				<Header />
				<SocialBar />
				<PageBar />

				{/* Hero */}
				<section id="hero" className="snap-center">
					<Hero />
				</section>
				{/* About */}
				<section id="About" className="snap-center">
					<About />
				</section>
				{/* Timeline */}
				<section id="Timeline" className="snap-center">
					<Timeline />
				</section>
				{/* Skills */}
				<section id="Skills" className="snap-center">
					<Skills />
				</section>
				{/* Projects */}

				{/* Experience */}

				{/* Skills */}

				{/* Contact Me */}

				<h1 className="text-red-500">Let&apos;s build an AWESOME portfolio!</h1>
			</div>
		</div>
	);
};

export default Home;
