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
        className="flex flex-col border dark:border-neutral-800 border-neutral-200 rounded-md  cursor-pointer relative  transition-all duration-300"
      >
        {/* Image with Play Button */}
        <div className="w-full relative overflow-hidden rounded-t-sm group  aspect-video ">
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
        <div className="flex flex-col  px-4 py-4 md:py-4">
          <h3 className="text-lg font-medium text-white transition-colors duration-300 leading-none">
            {title}
          </h3>

          <p className="text-text-secondary text-sm/5 tracking-wide max-w-[512px] pt-2 pb-4">
            {description}
          </p>

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

      </div>

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
