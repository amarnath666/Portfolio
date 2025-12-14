"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ViewArea from "./ui/view-area";

interface Position {
  role: string;
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

const Work = () => {
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
          timeLine: "Feb 2025 – Present",
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
          timeLine: "Jul 2024 – Aug 2024",
          description: `
Integrated dynamic features and resolved performance bottlenecks, enhancing the user experience and reducing load times by 25%.
Developed and integrated backend APIs to fetch and display dynamic data, ensuring seamless frontend-backend communication.
`,


        },
      ],
    },
  ];



  return (
    <ViewArea showBorderTop={false} showBottomDots={false}>
      <div className="" >

        <p className="text-white text-xl font-medium leading-none flex  tracking-wide pb-6">
          Experience
        </p>

        {/* Work Experience */}
        {workData.map((work, idx) => (
          <div key={idx} className="flex flex-col relative mb-6">
            {/* Logo + Content */}
            <div className="flex flex-row items-start gap-4 ">
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
              <div className="flex-1">
                <div className="flex flex-row items-start justify-between ">
                  <h4 className="text-base text-white font-medium leading-none pb-2 tracking-wide ">
                    {work.company}
                  </h4>
                  <p className="text-sm text-text-secondary leading-none tracking-wide">
                    {work.location}
                  </p>
                </div>
                {work.positions.map((position, posIdx) => (
                  <div
                    key={posIdx}
                    className={cn(
                      "flex flex-col w-full",
                      posIdx !== work.positions.length - 1 &&
                      " pb-6"
                    )}
                  >

                    <div className="flex flex-row items-center justify-between w-full mb-4 gap-4">

                      <h4 className="text-sm text-white leading-none tracking-wide">{position.role}</h4>



                      <h4 className="text-sm text-text-secondary leading-none tracking-wide">
                        {position.timeLine}
                      </h4>


                    </div>

                    <ul className="list-disc pl-4 space-y-2">
                      {position.description.trim().split('\n').filter(line => line.trim()).map((line, i) => (
                        <li key={i} className="text-text-secondary text-sm/5 tracking-wide max-w-[512px]">
                          {line.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Role Descriptions */}
            <div className="text-gray-400 text-sm pl-[52px] pr-4">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4 ">
                {work.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-dashed border-neutral-700 bg-neutral-800 rounded-md text-text-secondary px-2 py-1  text-sm leading-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ViewArea>
  );
};

export default Work;

