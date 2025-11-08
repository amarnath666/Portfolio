"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "YT Notes",
      description: "AI agent that summarizes any youtube video in seconds.",
      videoSrc: "/videos/YTNotes.mp4",
      imageSrc: "/images/ytnotes.png",
      liveUrl: "https://www.ytnotes.online",
      githubUrl: "https://github.com/amarnath666/youtube_ai_agent",
      technologies: ["Next.js", "TypeScript", "LangChain", "MongoDB", "Razorpay", "Tailwind CSS"],
    },
    {
      title: "Sidekick",
      description:
        "A clean landing page template that you can use for your side projects.",
      videoSrc: "/videos/SideKick.mp4",
      imageSrc: "/images/sidekick.png",
      liveUrl: "https://sidekick.amarn.me",
      githubUrl: "https://github.com/amarnath666/Side-Project-Template",
      technologies: ["Next.js", "TypeScript",  "Tailwind CSS"],
    },
    {
      title: "Sketch Sync",
      description:
        " Powerful rich text editor for structured note-taking, paired with a dynamic canvas to sketch ideas and bring concepts to life.",
      videoSrc: "/videos/SketchSync.mp4",
      imageSrc: "/images/sketchsync.png",
      liveUrl: "https://sketchsync-canvas.vercel.app",
      githubUrl: "https://github.com/amarnath666/SketchSync",
      technologies: ["Next.js", "TypeScript",  "Tailwind CSS", "Convex"],
    },
  ];

  return (
    <div >
       <hr className="w-full h-px bg-[#27272a] border-none " />
      <p className="text-gray-500 text-base pt-2 pb-4">Projects</p>

      <div className="grid grid-cols-1  gap-6">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
