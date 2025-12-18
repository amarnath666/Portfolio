"use client"

import { GalleryCardProps } from "@/app/lib/types";
import { useState } from "react";

const GalleryCard = ({
    title,
    videoSrc,
    liveUrl,

}: GalleryCardProps) => {
    const [isLoading, setIsLoading] = useState(true);

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
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoadedData={() => setIsLoading(false)}
                />
            </div>

        </div>
    );
};

export default GalleryCard;
