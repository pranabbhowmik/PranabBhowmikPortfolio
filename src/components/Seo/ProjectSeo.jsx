import React from "react";
import { Helmet } from "react-helmet-async";

function ProjectSeo() {
  return (
    <>
      <Helmet>
        <title>Pranab Bhowmik | Full-Stack Developer | MERN Stack</title>
        <meta
          name="description"
          content="Explore Pranab Bhowmik's portfolio showcasing expertise in full-stack development with React, Node.js, and Tailwind CSS. Innovative web applications built using the MERN stack."
        />
        <meta
          name="keywords"
          content="Pranab Bhowmik, full-stack developer, MERN, React, Node.js, web developer, Tailwind CSS, portfolio"
        />
        <meta name="author" content="Pranab Bhowmik" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Pranab Bhowmik | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Check out Pranab Bhowmik's projects built with React, Node.js, and the MERN stack."
        />
        <meta
          property="og:image"
          content="https://pranabbhowmik.netlify.app/portfoliopic.png"
        />
        <meta property="og:url" content="https://pranabbhowmik.netlify.app/" />
        <link rel="canonical" href="https://pranabbhowmik.netlify.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pranab Bhowmik",
            jobTitle: "Full-Stack Developer",
            url: "https://pranabbhowmik.netlify.app",
            image: "https://pranabbhowmik.netlify.app/portfoliopic.png",
            description:
              "MERN stack developer building fast, scalable web apps with React, Node.js, MongoDB, and Express.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Tamluk",
              addressLocality: "Purbamedinipur",
              addressRegion: "West Bengal",
              postalCode: "721549",
              addressCountry: "IN",
            },
            sameAs: [
              "https://github.com/pranabbhowmik",
              "https://www.linkedin.com/in/pranabbhowmik",
              "https://www.youtube.com/@npm_init",
            ],
          })}
        </script>
      </Helmet>
    </>
  );
}

export default ProjectSeo;
