"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const workData = [
    {
      company: "Fortaxe Global",
      description:
        "Designed and developed custom Shopify themes for enterprise clients with optimized checkout flows.",
      imageSrc: "/images/fortaxe-global.png",
      liveUrl: "https://www.fortaxe.com",
      role: "Full Stack Developer",
      timeLine: "September 2024 - Present",
    },
    {
      company: "Rentkar",
      description:
        "Designed and developed custom Shopify themes for enterprise clients with optimized checkout flows.",
      imageSrc: "/images/rentkar.jpeg",
      liveUrl: "https://rentkar.app",
      role: "Full Stack Developer Intern",
      timeLine: "July 2024 - August 2024",
    },
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="pt-6">
      <hr className="w-full h-px bg-gray-700 border-none" />
      <p className="text-gray-500 text-base pt-2 pb-4">
        Cool Places I Worked At
      </p>

      {workData.map((work, idx) => (
        <div key={idx} className="flex flex-col gap-2 relative mb-6">
          {/* Timeline */}
          <p className="absolute right-0 top-0 text-gray-400 text-sm font-medium">
            {work.timeLine}
          </p>

          {/* Logo + Content */}
          <div className="flex flex-row gap-4 pr-20">
            {/* Logo */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(work.liveUrl, "_blank");
              }}
              onMouseEnter={(e) => e.stopPropagation()}
              className="cursor-pointer"
            >
              <img
                src={work.imageSrc}
                alt={work.company}
                className="w-[40px] h-[40px] rounded-full object-cover flex-shrink-0"
              />
            </div>

            {/* Content area */}
            <div
              className="flex-1 group cursor-pointer"
              onClick={() => handleToggle(idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-2">
                <p className="text-base text-white font-medium">
                  {work.company}
                </p>

                {/* Chevron appears only on hover */}
                {hoveredIndex === idx && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 transition-transform duration-300 text-gray-400",
                      expandedIndex === idx ? "rotate-90" : "rotate-0"
                    )}
                  />
                )}
              </div>
              <p className="text-gray-400 text-sm">{work.role}</p>
            </div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: expandedIndex === idx ? 1 : 0,
              height: expandedIndex === idx ? "auto" : 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="overflow-hidden text-gray-400 text-sm pl-[52px] pr-4"
          >
            {work.description}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Work;
