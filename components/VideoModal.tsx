import { useEffect, useRef } from "react";
import { IconX, IconArrowUpRight } from "@tabler/icons-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
  link: string;
}

const VideoModal = ({ isOpen, onClose, videoSrc, title, link }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 bg-[#18181b] rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#27272a] ">
          <div className="flex items-center gap-2"> 
          <h3 
          onClick={() => window.open(link, "_blank")}
          className="text-lg font-semibold text-white hover:text-gray-300  cursor-pointer ">{title}</h3>
          
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#27272a] text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <IconX size={20} />
          </button>
      
        </div>

        {/* Video */}
        <div className="relative w-full aspect-video bg-black">
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
            src={videoSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

