"use client"

import { ProjectCardProps } from "@/app/lib/types";
// import { useState } from "react";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import StackItem from "./StactItem";
import { LayoutGroup, } from "motion/react";
import Image from "next/image";
// import VideoModal from "./VideoModal";
import SocialLink from "./social-link";

const ProjectCard = ({
  title,
  description,
  githubUrl,
  imageSrc,
  liveUrl,
  technologies,
}: ProjectCardProps) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handlePlayClick = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setIsModalOpen(true);
  // };

  return (
    <>
      <div
        onClick={() => window.open(liveUrl, "_blank")}
        className="grid grid-cols-1 md:grid-cols-2 border dark:border-neutral-800 border-neutral-200 rounded-md relative overflow-hidden transition-all duration-300 cursor-pointer"
      >
        {/* Image  */}
        <div className="w-full relative overflow-hidden group aspect-video">
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            fill
            className="object-cover transition-all duration-500 "
          />

          {/* Play Button Overlay */}
          {/* <div
            className="absolute inset-0 flex items-center justify-center  transition-all duration-300 cursor-pointer opacity-0 "
          >
            <div className=" rounded-full  flex items-center justify-center transition-all duration-300 ">
              <Image
                src="/images/play.png"
                alt="Play Button"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div> */}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between px-4 py-5 md:p-6">
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-black dark:text-white transition-colors duration-300 leading-none">
              {title}
            </h3>

            <p className="text-text-secondary text-sm/5 tracking-wide max-w-[512px] pt-3 pb-6">
              {description.includes("2,000+ people every month") ? (
                <>
                  {description.split("2,000+ people every month")[0]}
                  <span className="text-white">2,000+ people every month</span>
                  {description.split("2,000+ people every month")[1]}
                </>
              ) : description}
            </p>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex -space-x-2  transition-all duration-300 flex-wrap">
              <LayoutGroup>
                {technologies.map((tech) => (
                  <div key={tech} className="hover:z-20 relative">
                    <StackItem technology={tech} />
                  </div>
                ))}
              </LayoutGroup>


            </div>
            <div className="flex gap-2 " onClick={(e) => e.stopPropagation()}>
              <SocialLink
                href={liveUrl}
                icon={<IconLink size={28} />}
                label="View Website"
                newTab
              />
              {githubUrl && (
                <SocialLink
                  href={githubUrl}
                  icon={<IconBrandGithub size={28} />}
                  label="View GitHub"
                  newTab
                />
              )}
            </div>
          </div>


        </div>

      </div >

      {/* Video Modal */}
      {/* <AnimatePresence>
        {isModalOpen && (
          <VideoModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            videoSrc={videoSrc}
            title={title}
            link={liveUrl}
            imageSrc={imageSrc}
          />
        )}
      </AnimatePresence> */}
    </>
  );
};

export default ProjectCard;
