import React, { useState } from "react";
import pranab from "../../../public/portfoliopic.png";
import { BsSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import tweeterlight from "../../assets/twitter-light.jpg";
import linkedinlight from "../../assets/linkedin-light.jpg";
import githublight from "../../assets/github-light.png";
import hackerlight from "../../assets/hackerranklight.png";
import hackerdark from "../../assets/hackerrank dark.png";
import tweeterdark from "../../assets/twitter-dark.png";
import linkedindark from "../../assets/linkedin-dark.png";
import githubdark from "../../assets/github-dark.jpg";
import CV from "../../assets/Pranab-bhowmik-resume.pdf";
import ProjectSeo from "../../components/Seo/ProjectSeo";
const Hero = ({ mode, handelmode }) => {
  // Make sure it's 'handleMode' here as well
  return (
    <>
      <ProjectSeo />
      <section
        id="hero"
        className={`min-h-screen w-full flex flex-col lg:flex-row scroll-smooth justify-center items-center lg:items-start ${
          mode === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {/* Profile Image and Sun Icon */}
        <div className="relative md:mt-20 mt-6 lg:order-2 lg:mr-10 lg:flex lg:justify-end ">
          <img
            src={pranab}
            alt="Pranab Bhowmik || Full-Stack Developer"
            className="w-64 sm:w-96 rounded-full object-cover border-1 border-white"
          />
          {/* Dark/Light Mode Toggle */}
          <div className="cursor-pointer" onClick={handelmode}>
            {mode === "light" ? (
              <BsFillMoonStarsFill className="absolute top-0 right-0 w-8 h-8" />
            ) : (
              <BsSunFill className="absolute top-0 right-0 w-8 h-8" />
            )}
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center lg:text-left m-5 md:mt-48 lg:ml-10">
          <h1 className="text-4xl font-bold font-rubik leading-tight">
            Pranab <br /> Bhowmik
          </h1>
          <h2 className="text-xl font-robotoMono">Full-Stack Developer</h2>

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-start items-center gap-5 mt-4">
            <a
              href="https://www.hackerrank.com/profile/cse_tukai"
              target="_blank"
            >
              <img
                src={mode === "light" ? hackerlight : hackerdark}
                alt="Pranab Bhowmik || Full-Stack Developer"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>
            <a href="https://x.com/home" target="_blank">
              <img
                src={mode === "light" ? tweeterlight : tweeterdark}
                alt="Pranab Bhowmik || Full-Stack Developer"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pranab-bhowmik-58812a231/"
              target="_blank"
            >
              <img
                src={mode === "light" ? linkedinlight : linkedindark}
                alt="Pranab Bhowmik || Full-Stack Developer"
                className="w-8 h-8 md:w-9 md:h-9"
              />
            </a>
            <a href="https://github.com/pranabbhowmik" target="_blank">
              <img
                src={mode === "light" ? githublight : githubdark}
                alt="Pranab Bhowmik || Full-Stack Developer"
                className="w-7 h-7 md:w-8 md:h-8 rounded-md"
              />
            </a>
          </div>

          {/* Description */}
          <p className="text-center lg:text-left font-serif mt-5 w-64 lg:w-auto">
            An explorer and a passionate{" "}
            <b className="font-robotoMono">Full-Stack Developer</b> who loves
            JavaScript, <br />
            crafting innovative solutions and embracing new challenges.
          </p>

          {/* Resume Button */}
          <a href={CV} download>
            <button
              className={` ${
                mode === "light"
                  ? " bg-blue-600 text-white"
                  : " bg-white text-black"
              } font-rubik px-6 py-2 mt-6 rounded-full shadow-md `}
            >
              Resume
            </button>
          </a>
        </div>
        <br></br>
        <br></br>
      </section>
    </>
  );
};

export default Hero;
