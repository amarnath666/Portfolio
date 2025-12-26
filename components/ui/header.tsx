"use client"

import ViewArea from "./view-area"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import { useRouter } from "next/navigation";

interface NavItem {
    name: string;
    href: string;
    className?: string;
}

const navItems: NavItem[] = [
    {
        name: "Projects",
        href: "/#projects",
    },
    { name: "Components", href: "/components", className: "hidden md:flex" },

    { name: "Contact", href: "/#contact" },
];

const Header = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const router = useRouter();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black pt-[10px]">
            <ViewArea className="px-4 py-2 md:py-2">
                <div className="flex flex-row items-center justify-between">
                    <div onClick={() => router.push("/")} className="cursor-pointer">

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
                        className="flex flex-row gap-2 md:gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative flex items-center px-2 py-1 text-sm md:text-base text-black dark:text-white tracking-normal transition-colors ${item.className || ""}`}
                                onMouseEnter={() => setHovered(item.name)}

                            >
                                {hovered === item.name && (
                                    <motion.span
                                        layoutId="nav-item-hover"
                                        className="absolute inset-0 dark:bg-neutral-800 bg-neutral-200 rounded-md -z-10"
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

                        {/* <SocialLink
                            href="https://github.com/amarnath666/Portfolio"
                            icon={<IconMoon size={28} className="text-black dark:text-white" />}
                            label="Star on GitHub"
                            newTab
                        /> */}

                        <ThemeToggle onMouseEnter={() => setHovered(null)} />
                    </div >
                </div >
            </ViewArea >
        </div >
    )
}

export default Header