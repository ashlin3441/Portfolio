// Import necessary dependencies and components.
"use client"; // This comment indicates that this code should run on the client side in Next.js.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

// Define the Intro component.
const Intro = () => {
  // Use the 'useSectionInView' hook to track section visibility.
  const { ref } = useSectionInView("Home", 0.5);
  // Use the 'useActiveSectionContext' to manage active sections and clicks.
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[75rem] w-full sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-12">
        {/* Left side: Profile image with fading edges */}
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, black 50%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, black 50%, transparent 100%)",
            }}
          >
            <Image
              src="/profile.png"
              alt={`${OWNER_NAME.split(" ")[0]} portrait`}
              width={420}
              height={420}
              quality={95}
              priority={true}
              className="h-64 w-64 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem] object-cover"
            />
          </motion.div>
        </div>

        {/* Right side: Text only */}
        <div className="flex-1 text-center sm:text-left flex items-center justify-center">
          <motion.h1
            className="mb-0 mt-24 px-4 sm:px-0 text-xl font-medium !leading-[1.6] sm:text-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <b className="font-bold">Hi, I&apos;m {OWNER_NAME.split(" ")[0]},</b>{" "}
            a <b className="font-bold">Full-Stack Developer</b> passionate about building{" "}
            <b className="font-bold">modern, scalable, and user-friendly web applications.
            </b> I  enjoy working across both frontend and backend development{" "}
            <b className="font-bold">to create seamless digital experiences.</b>
          </motion.h1>
        </div>
      </div>

      {/* Buttons below, centered */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center mt-6"
      >
        <div className="flex gap-2 flex-col sm:flex-row text-lg font-medium">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95 transition"
            onClick={() => {
              // Set the active section and the time of the last click.
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me
            <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition" />
          </Link>

          <Link
            href={EXTRA_LINKS.resume}
            target="_blank"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition borderBlack dark:bg-white/10"
          >
            My Resume
            <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
          </Link>
        </div>
        <div className="flex gap-2 text-lg font-medium">
          <Link
            href={EXTRA_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </Link>

          <Link
            href={EXTRA_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
