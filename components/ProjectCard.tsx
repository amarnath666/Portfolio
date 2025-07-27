import { ProjectCardProps } from "@/app/lib/types";
import { useState } from "react";
import Button from "./button";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import StackItem from "./StactItem";
import { LayoutGroup } from "motion/react";

const ProjectCard = ({
  title,
  description,
  videoSrc,
  liveUrl,
  technologies,
}: ProjectCardProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div
      onClick={() => window.open(liveUrl, "_blank")}
      className="flex bg-[#18181b] border border-[#27272a] rounded-lg shadow-lg p-2 cursor-pointer relative 
    transform transition-all duration-300 ease-out
   hover:shadow hover:shadow-black/10
    hover:border-[#3f3f46] hover:bg-[#1a1a1d]
    group"
    >
      {/* Left: Video */}
      <div className="w-1/2 relative overflow-hidden rounded-lg">
        <video
          autoPlay
          muted
          loop
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          className={`w-full   transition-all duration-500 ease-out
        group-hover:scale-105 
        ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
          src={videoSrc}
        />

        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
            <div className="w-full h-full bg-gray-300 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
            </div>
          </div>
        )}
      </div>

      {/* Right: Content */}
      <div className="w-1/2 flex flex-col justify-center px-4 relative">
        <h3
          className="text-lg font-semibold text-white transition-colors duration-300
     transform"
        >
          {title}
        </h3>

        <p
          className="text-gray-500 text-sm leading-relaxed py-1 transition-all duration-300
      group-hover:text-gray-400 transform"
        >
          {description}
        </p>

        <div className="flex pt-1 pb-4 -space-x-2 transition-all duration-300">
          <LayoutGroup>
            {technologies.map((tech) => (
              <div key={tech} className="hover:z-20 relative">
                <StackItem technology={tech} />
              </div>
            ))}
          </LayoutGroup>
        </div>

        <div
          className="flex gap-4 pt-2 transition-transform duration-300
      transform"
        >
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
  );
};

export default ProjectCard;
