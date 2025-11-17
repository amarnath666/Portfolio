import { ProjectCardProps } from "@/app/lib/types";
import { useState } from "react";
import Button from "./button";
import { IconBrandGithub, IconWorld, IconPlayerPlay } from "@tabler/icons-react";
import StackItem from "./StactItem";
import { LayoutGroup } from "motion/react";
import Image from "next/image";
import VideoModal from "./VideoModal";

const ProjectCard = ({
  title,
  description,
  videoSrc,
  imageSrc,
  liveUrl,
  technologies,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        onClick={() => window.open(liveUrl, "_blank")}
        className="flex flex-col sm:flex-row bg-[#18181b] border border-[#27272a] rounded-lg shadow-lg px-4 py-2 sm:p-2 cursor-pointer relative 
        transform transition-all duration-300 ease-out
        hover:shadow hover:shadow-black/10
        hover:border-[#3f3f46] hover:bg-[#1a1a1d]
        group"
      >
        {/* Left: Image with Play Button */}
        <div className="w-full sm:w-1/2 relative overflow-hidden rounded-lg aspect-video sm:aspect-auto sm:h-full">
          <Image
            src={imageSrc}
            alt={`${title} preview`}
            fill
            className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          {/* Play Button Overlay */}
          <div
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 cursor-pointer opacity-0 group-hover:opacity-100"
          >
            <div className="bg-white/90 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
              <IconPlayerPlay size={24} className="text-black ml-1" fill="black" />
            </div>
          </div>
        </div>

      {/* Right: Content */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center  sm:px-4 relative pt-4 sm:pt-0">
        <h3 className="text-lg font-semibold text-white transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed py-1 transition-all duration-300 group-hover:text-gray-300">
          {description}
        </p>

        <div className="flex pt-1 pb-4 -space-x-2 transition-all duration-300 flex-wrap">
          <LayoutGroup>
            {technologies.map((tech) => (
              <div key={tech} className="hover:z-20 relative">
                <StackItem technology={tech} />
              </div>
            ))}
          </LayoutGroup>
        </div>

        <div className="flex gap-4 pt-2">
          <Button
            icon={<IconWorld size={18} />}
            name="Live URL"
            onClick={(e) => {
              e?.stopPropagation();
              window.open(liveUrl, "_blank");
            }}
          />
          <Button
            icon={<IconBrandGithub size={18} />}
            name="GitHub"
            onClick={(e) => {
              e?.stopPropagation();
              window.open("https://github.com/amarnath666", "_blank");
            }}
          />
        </div>
      </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
        title={title}
        link={liveUrl}
      />
    </>
  );
};

export default ProjectCard;
