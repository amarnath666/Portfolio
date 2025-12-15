"use client"

import ViewArea from "./view-area"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { IconBrightnessUp, IconMoon } from "@tabler/icons-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";
import { useTheme } from "next-themes";

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
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black pt-[10px]">
            <ViewArea className="px-4 py-2 md:py-2">
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
                                className="relative px-2 py-1 text-base text-black dark:text-white tracking-normal transition-colors"
                                onMouseEnter={() => setHovered(item.name)}

                            >
                                {hovered === item.name && (
                                    <motion.span
                                        layoutId="nav-item-hover"
                                        className="absolute inset-0 dark:bg-neutral-800 bg-neutral-100 rounded-md -z-10"
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
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    className="hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md w-8 h-8 flex items-center justify-center cursor-pointer transition-colors"
                                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                                    <AnimatePresence mode="wait" initial={false}>
                                        {mounted && (resolvedTheme === "dark" ?
                                            <motion.div
                                                key="dark"
                                                initial={{ rotate: -90, scale: 0 }}
                                                animate={{ rotate: 0, scale: 1 }}
                                                exit={{ rotate: 90, scale: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <IconMoon size={16} className="text-black dark:text-white" />
                                            </motion.div>
                                            :
                                            <motion.div
                                                key="light"
                                                initial={{ rotate: -90, scale: 0 }}
                                                animate={{ rotate: 0, scale: 1 }}
                                                exit={{ rotate: 90, scale: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <IconBrightnessUp size={16} className="text-black dark:text-white" />
                                            </motion.div>)}
                                    </AnimatePresence>
                                </button>
                            </TooltipTrigger >
                            <TooltipContent side="bottom" sideOffset={5}>
                                Toggle Mode
                            </TooltipContent>
                        </Tooltip >
                    </div >
                </div >
            </ViewArea >
        </div >
    )
}

export default Header