"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ViewArea from "./ui/view-area";
import BlurFade from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";

interface Position {
  role: string;
  shortRole?: string;
  timeLine: string;
  description: string;
}

interface WorkExperience {
  company: string;
  imageSrc: string;
  liveUrl: string;
  timeLine?: string;
  location: string;
  technologies: string[];
  positions: Position[];

}
const workData: WorkExperience[] = [
  {
    company: "Fortaxe Global",
    imageSrc: "/images/fortaxe-global.png",
    liveUrl: "https://www.fortaxe.com",
    location: "India, Remote",
    technologies: [
      "TypeScript",
      "Next.js",
      "React Native",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "MongoDB",
      "AWS",
      "Docker",
      "CI/CD",
      "RabbitMQ",


    ],
    positions: [
      {
        role: "Senior Full Stack Developer",
        timeLine: "Feb 2025 – Now",
        description: `
Delivered 10+ end-to-end projects, owning the complete lifecycle from system architecture to production deployment.
Built a modular React component system that improved code reusability and reduced development cycles by 20%.
Developed cross-platform mobile applications using React Native, delivering native-like experiences on iOS and Android.
Boosted application performance by implementing Redis caching strategies and optimizing database indexing.
`,


      },
      {
        role: "Full Stack Developer",
        timeLine: "Sep 2024 – Jan 2025",
        description: `
Executed pixel-perfect Figma-to-Code conversions, ensuring 100% design fidelity and responsive behavior.
Implemented robust full-stack features, ensuring seamless integration between frontend interfaces and backend services.
`,


      },
    ],
  },
  {
    company: "Rentkar",
    imageSrc: "/images/rentkar.jpeg",
    liveUrl: "https://rentkar.app",
    timeLine: "Jul 2024 – Aug 2024",
    location: "Mumbai, India, On-Site",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    positions: [
      {
        role: "Full Stack Developer Intern",
        shortRole: "Full Stack Intern",
        timeLine: "Jul 2024 – Aug 2024",
        description: `
Integrated dynamic features and resolved performance bottlenecks, enhancing the user experience and reducing load times by 25%.
Developed and integrated backend APIs to fetch and display dynamic data, ensuring seamless frontend-backend communication.
`,


      },
    ],
  },
];

const Work = () => {
  const [expandedPositions, setExpandedPositions] = useState<Record<string, boolean>>({
    "Rentkar-0": false,
  });

  const toggleExpand = (id: string) => {
    setExpandedPositions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ViewArea showBorderTop={false} showBottomDots={false}>
      <div>

        <BlurFadeText
          delay={0.1}
          className="dark:text-white text-black text-[20px] md:text-[24px] font-medium leading-[1.2] flex  tracking-normal pb-6"
          text="Cool places I've worked at"
        />

        {/* Work Experience */}
        <div className="flex flex-col gap-8">
          {workData.map((work, idx) => (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <div className="flex flex-col relative">
                {/* Logo + Content */}
                <div className="flex md:flex-row flex-col items-start gap-4 ">
                  {/* Logo */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(work.liveUrl, "_blank");
                    }}
                    className="cursor-pointer"
                  >
                    <Image
                      src={work.imageSrc}
                      alt={work.company}
                      width={40}
                      height={40}
                      className="rounded-full object-cover flex-shrink-0"
                    />
                  </div>

                  {/* Company Info */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-row items-start justify-between ">
                      <h4 className="text-base  dark:text-white text-black font-medium leading-none pb-2 tracking-wide ">
                        {work.company}
                      </h4>
                      <p className="text-sm  text-text-secondary leading-none tracking-wide">
                        {work.location}
                      </p>
                    </div>
                    {work.positions.map((position, posIdx) => {
                      const id = `${work.company}-${posIdx}`;
                      const isRentkar = work.company.toLowerCase() === "rentkar";
                      const isExpanded = expandedPositions[id] !== false;

                      return (
                        <div
                          key={posIdx}
                          className={cn(
                            "flex flex-col w-full",
                            posIdx !== work.positions.length - 1 && "pb-6"

                          )}
                        >

                          <div className="flex flex-row items-center justify-between w-full  gap-4">

                            <h4 className="text-sm text-black dark:text-white leading-none tracking-wide flex items-center gap-2">
                              {position.shortRole ? (
                                <>
                                  <span className="md:hidden">{position.shortRole}</span>
                                  <span className="hidden md:inline">{position.role}</span>
                                </>
                              ) : (
                                position.role
                              )}
                              {isRentkar && (
                                <motion.button

                                  onClick={() => toggleExpand(id)}
                                  className="p-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-400 dark:text-neutral-600 hover:text-black dark:hover:text-white"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <motion.path
                                      initial={false}
                                      animate={{ d: isExpanded ? "M7 20L12 15L17 20" : "M7 15L12 20L17 15" }}
                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                    <motion.path
                                      initial={false}
                                      animate={{ d: isExpanded ? "M7 4L12 9L17 4" : "M7 9L12 4L17 9" }}
                                      transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                  </svg>
                                </motion.button>
                              )}
                            </h4>



                            <h4 className="text-sm text-text-secondary leading-none tracking-wide">
                              {position.timeLine}
                            </h4>


                          </div>

                          {isRentkar ? (
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2, ease: "easeInOut" }}
                                  className="overflow-hidden"
                                >
                                  <ul className="list-disc pl-4 space-y-2 marker:text-neutral-400 dark:marker:text-neutral-700 mt-4">
                                    {position.description.trim().split('\n').filter(line => line.trim()).map((line, i) => (
                                      <li key={i} className="text-text-secondary text-sm/5 tracking-wide max-w-[512px]">
                                        {line.trim()}
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          ) : (
                            <ul className="list-disc pl-4 space-y-2 marker:text-neutral-400 dark:marker:text-neutral-700 mt-4">
                              {position.description.trim().split('\n').filter(line => line.trim()).map((line, i) => (
                                <li key={i} className="text-text-secondary text-sm/5 tracking-wide max-w-[512px]">
                                  {line.trim()}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>



                {/* Tech Stack */}
                {work.company.toLowerCase() === "rentkar" ? (
                  <AnimatePresence initial={false}>
                    {expandedPositions[`${work.company}-0`] !== false && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 mt-4 md:pl-[56px] ">
                          {work.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="border border-dashed border-neutral-400 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md text-black dark:text-white py-1 px-2  transition-colors text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-4 md:pl-[56px] ">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-dashed border-neutral-400 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md text-black dark:text-white py-1 px-2  transition-colors text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </ViewArea>
  );
};

export default Work;
