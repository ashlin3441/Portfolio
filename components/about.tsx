// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-36"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-7">
        Enthusiastic and driven software engineer with a passion for using technology to solve complex problems and build impactful solutions. With an academic background in Physics and a Master of Computer Applications (MCA), I bring strong analytical thinking, problem-solving skills, and a continuous learning mindset. I have experience in developing modern web applications and enjoy working across both frontend and backend development.


      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p className="mb-5">
        Currently, I am working as a Software Engineer at Cyncly. I’m always eager to expand my knowledge in emerging technologies, especially Machine Learning, Artificial Intelligence, Sound Engineering, and Light Designing. Outside of work, I enjoy gaming, movies, music, and exploring new ideas.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
