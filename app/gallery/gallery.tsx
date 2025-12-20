import React from "react";
import ViewArea from "@/components/ui/view-area";
import GalleryCard from "@/components/ui/gallery-card";
import { galleryData } from "@/components/data";
import AnimatedCyclingText from "@/components/ui/animated-cycling-text";

const descriptions = [
    "Micro-interactions that Delight",
    "Interfaces that Feel Alive",
    "Polished to Pixel-Perfection",
];

const Gallery = () => {
    return (
        <ViewArea showBorderTop={false}>
            <div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[24px] md:text-[36px] font-outfit text-foreground tracking-normal font-medium leading-none">
                        Cool components I&apos;ve crafted
                    </h1>

                    <AnimatedCyclingText texts={descriptions} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  pt-6">
                    {galleryData.map((item, idx) => (
                        <GalleryCard key={idx} {...item} />
                    ))}
                </div>
            </div>
        </ViewArea>
    );
};

export default Gallery;