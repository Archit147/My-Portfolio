const config = {
  title: "Archit Vashisth | Student & Aspiring Entrepreneur",
  description: {
    long: "Explore the portfolio of Archit, a student building the skills to become an entrepreneur — combining hands-on web development with interactive experiences, 3D animations, and self-driven projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Archit, a student skilling up to become an entrepreneur through hands-on web and product projects.",
  },
  keywords: [
    "Archit",
    "Archit Vashisth",
    "portfolio",
    "student",
    "aspiring entrepreneur",
    "entrepreneurship",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Archit Vashisth",
  email: "hello@architvashisth.dev",
  site: "https://architvashisth.dev",

  // for github stars button
  githubUsername: "archit-vashisth",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/architvashisth/",
    instagram: "https://www.instagram.com/archit.vashisth_/",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/Archit147",
  },
};
export { config };
