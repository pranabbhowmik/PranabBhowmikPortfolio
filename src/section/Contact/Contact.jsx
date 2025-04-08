// ✅ Updated Contact.jsx
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectSeo from "../../components/Seo/ProjectSeo";

const Contact = ({ mode }) => {
  const form = useRef();
  const sectionRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ibub44c", "template_glq6jph", form.current, {
        publicKey: "ObnkQm06WHHN-hv5B",
      })
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error("FAILED...", error.text);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      <ProjectSeo />
      <section
        ref={sectionRef}
        id="contact"
        className={`flex flex-col items-center text-center p-8 min-h-screen -mt-16 transition-all duration-1000 ${
          hasAnimated
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-20"
        } ${mode === "light" ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <h1 className="text-5xl font-rubik mb-8">Contact</h1>

        <form
          className="flex flex-col gap-8 w-full max-w-sm sm:max-w-lg lg:max-w-2xl"
          onSubmit={sendEmail}
          ref={form}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            required
            className={`w-full p-4 rounded-xl border font-robotoMono ${
              mode === "light"
                ? "border-gray-400 bg-gray-100 text-black"
                : "border-gray-600 bg-gray-800 text-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={`w-full p-4 rounded-xl border font-robotoMono ${
              mode === "light"
                ? "border-gray-400 bg-gray-100 text-black"
                : "border-gray-600 bg-gray-800 text-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className={`w-full p-4 rounded-xl h-64 border resize-none font-robotoMono ${
              mode === "light"
                ? "border-gray-400 bg-gray-100 text-black"
                : "border-gray-600 bg-gray-800 text-white"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <button
            type="submit"
            className={`px-9 py-3 rounded-xl ${
              mode === "light"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            } font-semibold shadow-md transition-transform transform hover:scale-105 active:translate-y-1 mx-auto`}
          >
            Submit
          </button>
        </form>

        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
