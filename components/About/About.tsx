"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="max-w-[1200px] mx-auto my-0">
        <div className="px-5 py-[200px] flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0 w-full sm:w-[300px] aspect-square border"></div>
          <div>
            <p className="text-2xl leading-10">
              Hello there 👋🏻! I'm Francesco and I'm a Jr. Full Stack Web
              Developer.
            </p>
            <p className="text-2xl leading-10">
              On this website you can find a complete overview of my programming
              skills and a selection of projects that I made.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
