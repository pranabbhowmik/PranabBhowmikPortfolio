// components/seo/EducationSeo.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

function EducationSeo() {
  return (
    <Helmet>
      <title>Education | Pranab Bhowmik | MERN Stack Developer</title>
      <meta
        name="description"
        content="Explore Pranab Bhowmik's academic background in Computer Science and journey in becoming a full-stack MERN developer. Check out educational milestones and technical skills."
      />
      <meta
        name="keywords"
        content="Pranab Bhowmik education, computer science degree, MERN stack developer, full-stack developer, portfolio"
      />
      <meta name="author" content="Pranab Bhowmik" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        property="og:title"
        content="Education | Pranab Bhowmik | Full-Stack Developer"
      />
      <meta
        property="og:description"
        content="Learn more about Pranab Bhowmik's academic journey in Computer Science Engineering and how it shaped his path in full-stack web development."
      />
      <meta
        property="og:image"
        content="https://pranabbhowmik.netlify.app/portfoliopic.png"
      />
      <meta
        property="og:url"
        content="https://pranabbhowmik.netlify.app/education"
      />
      <link
        rel="canonical"
        href="https://pranabbhowmik.netlify.app/education"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pranab Bhowmik",
          jobTitle: "Full-Stack Developer",
          url: "https://pranabbhowmik.netlify.app",
          image: "https://pranabbhowmik.netlify.app/portfoliopic.png",
          description:
            "Computer Science Engineering graduate and MERN stack developer with a passion for building real-world web applications.",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Your College Name Here",
            sameAs: "https://college-website.example.com",
          },
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
  );
}

export default EducationSeo;
