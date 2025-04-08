import React from "react";
import { motion } from "framer-motion";

const Education = ({ mode }) => {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id="education"
      className={`flex flex-col gap-8 items-center md:justify-evenly min-h-lvh md:px-8 scroll-smooth md:-mt-20 -mt-10 ${
        mode === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // 👈 animate only once
      transition={{ duration: 0.8 }}
      variants={variants}
    >
      <h1 className="text-5xl font-rubik mb-8 mt-16 sm:mt-1 lg:-mt-32 text-center h-full">
        Education
      </h1>

      <ol className="relative border-l border-gray-600 dark:border-gray-400 max-w-xl md:-mt-40 mx-5">
        <motion.li
          className="mb-10 ml-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={variants}
        >
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-100"></div>
          <time className="mb-1 text-sm font-robotoMono leading-none">
            Bengal Institute of Technology and Management 2021 - 2025
          </time>
          <h3 className="text-lg font-semibold">Btech in CSE</h3>
          <p className="mb-4 text-base font-normal">
            During my college years, I developed strong technical skills, built
            lifelong friendships, and countless learning opportunities that
            shaped my future path.
          </p>
        </motion.li>

        <motion.li
          className="mb-10 ml-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={variants}
        >
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-100"></div>
          <time className="mb-1 text-sm font-robotoMono leading-none">
            Simulia C.K Vidyapith (H.S) 2013 - 2021
          </time>
          <p className="text-base font-normal">
            During my school days, I loved playing cricket with friends, while
            singing was a cherished hobby. Both activities helped me relax and
            stay focused, creating many memorable moments.
          </p>
        </motion.li>
      </ol>
    </motion.section>
  );
};

export default Education;
