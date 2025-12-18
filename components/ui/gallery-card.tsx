"use client"

import { GalleryCardProps } from "@/app/lib/types";
import { useState, useRef, useEffect } from "react";

const GalleryCard = ({
    title,
    videoSrc,
    liveUrl,

}: GalleryCardProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoLoad = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        if (videoRef.current && videoRef.current.readyState >= 3) {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="flex flex-col">
            <div
                onClick={() => window.open(liveUrl, "_blank")}
                className="w-full relative overflow-hidden group aspect-video rounded-md border dark:border-neutral-800 border-neutral-200 cursor-pointer"
            >
                {isLoading && (
                    <div className="absolute inset-0 z-10 animate-pulse bg-neutral-200 dark:bg-neutral-800" />
                )}

                <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoadedData={handleVideoLoad}
                    onCanPlay={handleVideoLoad}
                />
            </div>

        </div>
    );
};

export default GalleryCard;
