
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
    title: "Chamaac",
    description: "Developing a comprehensive UI library featuring 10+ reusable components, designed for scalability, accessibility, and modern aesthetics.",
    imageSrc: "/images/chamaac.png",
    videoSrc: "/videos/ytnotes.mp4",
    liveUrl: "https://www.chamaac.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Sidekick",
    description:
      "A sleek, visually stunning landing page template optimized for side projects, featuring a modular design and easy customization.",
    videoSrc: "/videos/SideKick.mp4",
    imageSrc: "/images/side.png",
    liveUrl: "https://sidekick.amarn.me",
    githubUrl: "https://github.com/amarnath666/Side-Project-Template",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "YT Notes",
    description: "An intelligent AI-powered agent that generates concise, accurate summaries of YouTube videos in seconds, streamlining content consumption.",
    videoSrc: "/videos/YTNotes.mp4",
    imageSrc: "/images/yt.png",
    liveUrl: "https://www.ytnotes.online",
    githubUrl: "https://github.com/amarnath666/YTNotes",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Razorpay", "Tailwind CSS"],
  },
  {
    title: "Sketch Sync",
    description: "A unified workspace combining a powerful rich text editor with an infinite canvas for sketching and ideation.",
    videoSrc: "/videos/SketchSync.mp4",
    imageSrc: "/images/sketch.png",
    liveUrl: "https://sketchsync-canvas.vercel.app",
    githubUrl: "https://github.com/amarnath666/SketchSync",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Convex"],
  },
];

const Projects = () => {


  return (
    <ViewArea showBorderTop={false}>
      <div >

        <BlurFadeText
          delay={0.1}
          className="text-black dark:text-white md:text-[24px] text-[20px] font-medium leading-none flex  tracking-normal md:pb-6 pb-4"
          text="Some of the projects I've built recently"
        />

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
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
