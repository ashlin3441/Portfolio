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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-7">
      Enthusiastic and driven <b>Master of Computer Applications (MCA)</b> student 
      with a passion for leveraging technology to solve complex problems.
      Coming from a diverse academic background ,having completed my ug
      degree in <b>Physics</b>, which has provided me with a strong analytical 
      foundation and a deep appreciation for problem solving.Strong foundation
      in both traditional <b>Machine Learning</b> algorithms and modern <b>Deep learning</b> 
      architectures,with proven ability to deliver AI-powered solutions that 
      solve complex problems. Technical proficiency in <b className="font-bold">Python</b>,
      and familiarity in <b>C, Java, JavaScript</b>, 
      with experience in <b>web technologies & databases</b>.
      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p className="mb-5">
        <i className="italic">When I'm not coding</i>, I enjoy playing video
        games, watching movies, and enjoy music. I also enjoy{" "}
        <b className="font-medium">learning new things</b>. I am currently
        learning about <b className="font-medium">Machine Learning & Artificial Intelligence </b>.
        I'm also learning Sound Engineering and Light designing.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
