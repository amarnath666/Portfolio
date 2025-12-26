"use client";

import React from "react";
import ViewArea from "@/components/ui/view-area";
import GalleryCard from "@/components/ui/gallery-card";
import { galleryData } from "@/components/data";
import AnimatedCyclingText from "@/components/ui/animated-cycling-text";
import BlurFade from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";

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
                    <BlurFadeText
                        delay={0.1}
                        className="text-[24px] md:text-[36px] font-outfit text-foreground tracking-normal font-medium leading-[1.2]"
                        text="Cool components I've crafted"
                    />

                    <BlurFade delay={0.3} inView>
                        <AnimatedCyclingText texts={descriptions} />
                    </BlurFade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  pt-6">
                    {galleryData.map((item, idx) => (
                        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                            <GalleryCard {...item} />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </ViewArea>
    );
};

export default Gallery;