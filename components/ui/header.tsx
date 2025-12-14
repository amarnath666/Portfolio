"use client"

import ViewArea from "./view-area"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react";
import { useState } from "react";

interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]



const Header = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm pt-[10px]">
            <ViewArea className="px-4 py-2">
                <div className="flex flex-row items-center justify-between">
                    <div>

                        <Image
                            src="/images/profile.jpg"
                            alt="profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                            priority
                        />
                    </div>
                    <div
                        onMouseLeave={() => setHovered(null)}
                        className="flex flex-row gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-2 py-1 text-base text-white tracking-normal transition-colors"
                                onMouseEnter={() => setHovered(item.name)}

                            >
                                {hovered === item.name && (
                                    <motion.span
                                        layoutId="nav-item-hover"
                                        className="absolute inset-0 bg-neutral-800 rounded-md -z-10"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 25,
                                        }}
                                    />
                                )}
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </ViewArea >
        </div >
    )
}

export default Header