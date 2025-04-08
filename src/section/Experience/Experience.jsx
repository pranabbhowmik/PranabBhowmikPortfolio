import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Timeline = ({ data, mode }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={`w-full font-sans md:px-10 ${
        mode === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-5xl font-rubik mb-8 mt-16 sm:mt-1 text-center">
          Experience & Education
        </h1>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:pt-20 md:gap-10"
          >
            <div className="flex flex-col z-40 md:sticky top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 relative left-3 w-10 rounded-full flex items-center justify-center">
                {item.icon === "work" ? (
                  <Briefcase className="text-purple-500 h-6 w-6" />
                ) : (
                  <GraduationCap className="text-blue-500 h-6 w-6" />
                )}
              </div>
              <h3 className="text-xl md:text-3xl font-bold pl-12 md:pl-20 pt-4">
                {item.title}
              </h3>
              <p
                className={`text-sm md:text-base pl-12 md:pl-20 ${
                  mode === "light" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                {item.subtitle} | {item.period}
              </p>
            </div>

            <div className="relative pl-8 md:pl-4 w-full">
              <p
                className={`p-5 sm:p-10 text-xs md:text-sm font-normal ${
                  mode === "light" ? "text-gray-800" : "text-white"
                }`}
              >
                {item.content}
              </p>
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const TimelineDemo = ({ mode }) => {
  const data = [
    {
      title: "MERN Stack Developer",
      subtitle: "Valourithm Technologies",
      period: "Mar 2025 – Present",
      icon: "work",
      content:
        "Developed and maintained scalable web applications using React.js, Next.js, and Tailwind CSS, ensuring responsive and optimized UI/UX. Implemented server-side rendering (SSR) and SEO optimization in Next.js to enhance website performance and discoverability.",
    },
    {
      title: "React Developer",
      subtitle: "KalpYaan",
      period: "Jan 2025 – Mar 2025",
      icon: "work",
      content:
        "Engineered web applications with React.js, Tailwind CSS, and Redux, improving performance efficiency by 15%. Collaborated with cross-functional teams, reducing feature deployment cycles by 10%.",
    },
    {
      title: "B.Tech in Computer Science",
      subtitle: "Bengal Institute of Technology and Management",
      period: "2021 – 2025",
      icon: "education",
      content:
        "During my college years, I developed strong technical skills, built lifelong friendships, and seized countless learning opportunities that shaped my future path.",
    },
    {
      title: "Higher Secondary Education",
      subtitle: "Simulia C.K Vidyapith",
      period: "2013 – 2021",
      icon: "education",
      content:
        "During my school days, I loved playing cricket with friends, while singing was a cherished hobby. Both activities helped me relax and stay focused, creating many memorable moments.",
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} mode={mode} />
    </div>
  );
};

export default TimelineDemo;
