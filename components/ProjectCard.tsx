import { ProjectCardProps } from "@/app/lib/types";
import { useState } from "react";
import Button from "./button";
import { IconBrandGithub,IconWorld  } from "@tabler/icons-react";

const ProjectCard = ({
  title,
  description,
  videoSrc,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div 
    onClick={() => window.open(liveUrl, "_blank")}
    className="bg-[#18181b] border border-[#27272a] hover:border-gray-500 rounded-lg shadow-lg p-3 cursor-pointer ">
      <video
        autoPlay
        muted
        loop
        onLoadedData={handleVideoLoad}
        onCanPlay={handleVideoLoad}
        className={`w-full h-[180px]   transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={videoSrc}
      />

      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="text-gray-500 text-base py-2">{description}</p>
      <div className="flex gap-4 pt-2">
        <Button 
          icon={<IconWorld size={18} />}
          name="Live URL"
          onClick={() => window.open(liveUrl, "_blank")}
        />
        <Button 
          icon={<IconBrandGithub size={18} />}
          name="GitHub"
          onClick={(e) => {
             e.stopPropagation(); 
            window.open("https://github.com/amarnath666", "_blank")}}
        />

      </div>
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          <div className="w-full h-full bg-gray-300 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
