import { motion } from "framer-motion";
import React from "react";
import AboutMeImage from "../Assets/Images/header.png"

export default function About() {
    // const AboutMeImage = withOptimizedImages({
    //         src: "../Assets/Images/AboutMe",
    // });
    return (
        <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.img
                initial={{
                    y: -200,
                }}
                whileInView={{ x: 0 }}
                src={AboutMeImage}
                alt="About"
                className="w-1/2 h-1/2"
            />
        </div>
    );
}