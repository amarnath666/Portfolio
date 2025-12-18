import React from "react";
import ViewArea from "./ui/view-area";
import GalleryCard from "./ui/gallery-card";
import { galleryData } from "./data";
import Link from "next/link";

const GalleryComponent = () => {
    return (
        <ViewArea showBorderTop={false}>
            <div>
                <h2 className="text-black dark:text-white md:text-[22px] text-[20px] font-medium leading-none flex tracking-normal md:pb-6 pb-4">
                    Gallery
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {galleryData.filter(item => item.isHomePage).map((item, idx) => (
                        <GalleryCard key={idx} {...item} />
                    ))}
                </div>

                <div className="flex justify-center pt-8">
                    <Link
                        href="/gallery"
                        className="border border-dashed border-neutral-400 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md text-black dark:text-white px-5 py-2.5 hover:bg-neutral-300 dark:hover:bg-neutral-900 transition-colors leading-none text-[16px] cursor-pointer tracking-normal ">
                        View More
                    </Link>
                </div>
            </div>
        </ViewArea>
    );
};

export default GalleryComponent;