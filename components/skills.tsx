"use client";

import { motion } from "framer-motion";

import { SKILLS_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define animation variants for the fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Stagger the delay for each skill item
    },
  }),
};

const Skills = () => {
  // Use the custom hook to determine when this section is in view
  const { ref } = useSectionInView("Skills");

  let globalIndex = 0;

  return (
    <section
      ref={ref}
      id="skills"
      className="max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      {SKILLS_DATA.map((group) => (
        <div key={group.category} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 capitalize text-gray-700 dark:text-white/80">
            {group.category}
          </h3>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-4">
            {group.skills.map((skill) => {
              const idx = globalIndex++;
              return (
                <motion.li
                  key={`skill-${idx}`}
                  className="bg-white borderBlack max-sm:text-sm rounded-md md:rounded-xl px-3.5 py-1.5 md:px-5 md:py-3 dark:bg-white/10 dark:text-white/80"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={idx}
                >
                  {skill}
                </motion.li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;

