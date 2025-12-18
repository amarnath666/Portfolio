"use client"

import { GalleryCardProps } from "@/app/lib/types";
// import { useState } from "react";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
;
import { LayoutGroup, } from "motion/react";
import Image from "next/image";
// import VideoModal from "./VideoModal";


const GalleryCard = ({
    title,
    videoSrc,
    liveUrl,

}: GalleryCardProps) => {

    return (
        <div className="flex flex-col">
            <div
                onClick={() => window.open(liveUrl, "_blank")}
                className="w-full relative overflow-hidden  group  aspect-video rounded-md  border dark:border-neutral-800 border-neutral-200 cursor-pointer">
                <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                />
            </div>

            {/* <div className="flex flex-col pt-4">
                <h3 className="text-lg font-medium text-white transition-colors duration-300 leading-none">
                    {title}
                </h3>

            </div> */}

        </div>
    );
};

export default GalleryCard;
