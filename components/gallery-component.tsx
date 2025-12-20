import React from "react";
import ViewArea from "./ui/view-area";
import GalleryCard from "./ui/gallery-card";
import { ActionButton } from "./ui/action-button";
import { galleryData } from "./data";
import Link from "next/link";

const GalleryComponent = () => {
    return (
        <ViewArea showBorderTop={false}>
            <div>
                <h2 className="text-black dark:text-white md:text-[24px] text-[20px] font-medium leading-none flex tracking-normal md:pb-6 pb-4">
                    Cool components I&apos;ve crafted
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    {galleryData.filter(item => item.isHomePage).map((item, idx) => (
                        <GalleryCard key={idx} {...item} />
                    ))}
                </div>

                <div className="flex justify-center pt-8">
                    <ActionButton asChild>
                        <Link href="/gallery">
                            View More
                        </Link>
                    </ActionButton>
                </div>
            </div>
        </ViewArea>
    );
};

export default GalleryComponent;