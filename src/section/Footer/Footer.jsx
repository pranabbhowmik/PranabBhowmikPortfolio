import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ProjectSeo from "../../components/Seo/ProjectSeo";

const Footer = ({ mode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");

    // Create an IntersectionObserver to detect when the footer enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the footer is in view
      }
    );

    // Start observing the footer element
    observer.observe(footer);

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <ProjectSeo />
      <footer
        id="footer"
        className={`flex flex-col items-center sm:mt-0 justify-center py-6 ${
          mode === "light" ? "bg-gray-100 text-black" : "bg-black text-white"
        } transition-transform duration-700 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* Contact Information Section */}
        <div className="w-full max-w-6xl flex flex-col gap-8 px-4 sm:px-8 md:flex-row md:justify-around py-4">
          {/* Find Us */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl sm:text-3xl" />
            <div>
              <h3 className="font-semibold font-robotoMono text-lg sm:text-xl">
                Location
              </h3>
              <p className="text-base sm:text-lg">Tamluk, West Bengal, India</p>
            </div>
          </div>

          {/* Mail Us */}
          <div className="flex items-center gap-4">
            <a href="mailto:bhowmikpranab37@gmail.com">
              <FaEnvelope className="text-blue-500 text-2xl sm:text-3xl" />
            </a>
            <div>
              <h3 className="font-semibold font-robotoMono text-lg sm:text-xl">
                Mail Id
              </h3>
              <a
                href="mailto:bhowmikpranab37@gmail.com"
                className="text-base sm:text-lg"
              >
                bhowmikpranab37@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Navigation Links */}
        <div
          className={`w-full max-w-6xl flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-4 ${
            mode === "light" ? "text-gray-700" : "text-gray-400"
          }`}
        >
          <p className="text-center text-sm">
            No &copy; Copyright issues Feel free to copy!{" "}
            <span className="text-blue-500">Pranab Bhowmik</span>
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="https://www.linkedin.com/in/pranab-bhowmik-58812a231/"
              className="hover:text-blue-500 transition"
            >
              Social
            </a>
            <a
              href="https://github.com/pranabbhowmik"
              className="hover:text-blue-500 transition"
            >
              Source Code
            </a>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
