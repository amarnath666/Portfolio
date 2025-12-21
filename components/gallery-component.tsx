"use client";

import React from "react";
import ViewArea from "./ui/view-area";
import GalleryCard from "./ui/gallery-card";
import { ActionButton } from "./ui/action-button";
import { galleryData } from "./data";
import Link from "next/link";
import BlurFade from "@/components/ui/blur-fade";
import BlurFadeText from "@/components/ui/blur-fade-text";

const GalleryComponent = () => {
    return (
        <ViewArea showBorderTop={false}>
            <div>
                <BlurFadeText
                    delay={0.1}
                    className="text-black dark:text-white md:text-[24px] text-[20px] font-medium leading-[1.2] flex tracking-normal md:pb-6 pb-4"
                    text="Cool components I've crafted"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    {galleryData.filter(item => item.isHomePage).map((item, idx) => (
                        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
                            <GalleryCard {...item} />
                        </BlurFade>
                    ))}
                </div>

                <div className="flex justify-center pt-8">
                    <BlurFade delay={0.4} inView>
                        <ActionButton asChild>
                            <Link href="/gallery">
                                View More
                            </Link>
                        </ActionButton>
                    </BlurFade>
                </div>
            </div>
        </ViewArea>
    );
};

export default GalleryComponent;