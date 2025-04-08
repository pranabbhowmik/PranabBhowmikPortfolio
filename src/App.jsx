import "./App.css";
import React, { useState } from "react";
import Hero from "./section/Hero/Hero";
import Project from "./section/Projects/Project";
import Contact from "./section/Contact/Contact";
import Footer from "./section/Footer/Footer";
import Skill from "./section/Skills/Skill";

import TimelineDemo from "./section/Experience/Experience";
// import Experience from "./section/Experience/Experie

const App = () => {
  // Move the mode state and handelmode function to the parent component
  const [mode, setMode] = useState("dark");

  const handelmode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={
        mode === "light" ? "bg-white text-black" : "bg-black text-white"
      }
    >
      {/* Pass mode and handleMode as props to both Hero and Project */}
      <Hero mode={mode} handelmode={handelmode} />
      <Project mode={mode} />
      <Skill mode={mode} />
      <TimelineDemo mode={mode} />

      <Contact mode={mode} />
      <Footer mode={mode} />
    </div>
  );
};
export default App;
