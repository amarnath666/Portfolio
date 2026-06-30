
"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import ViewArea from "./ui/view-area";
import BlurFade from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  videoSrc: string;
  liveUrl: string;
  githubUrl?: string;
  technologies: string[];
}

const projectData: Project[] = [
  {
    title: "Chamaac UI",
    description: "A growing collection of reusable, accessible, and beautifully animated UI components used by 2,000+ people every month to create polished interfaces faster.",
    imageSrc: "/images/chamaac.png",
    videoSrc: "/videos/ytnotes.mp4",
    liveUrl: "https://www.chamaac.com",
    githubUrl: "https://github.com/amarnathdhumal/chamaacui",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const Projects = () => {

  return (
    <ViewArea showBorderTop={false}>
      <div >

        <BlurFadeText
          delay={0.1}
          className="text-black dark:text-white md:text-[24px] text-[20px] font-medium  flex  tracking-normal md:pb-6 pb-4 leading-[1.2]"
          text="What I’m Building"
        />

        <div className="grid grid-cols-1 gap-4">
          {projectData.map((project, idx) => (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <ProjectCard {...project} />
            </BlurFade>
          ))}
        </div>
      </div>
    </ViewArea>
  );
};

export default Projects;
