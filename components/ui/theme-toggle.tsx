"use client"

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { IconBrightnessUp, IconMoon } from "@tabler/icons-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";
import { useTheme } from "next-themes";
import useSound from "use-sound";

interface ThemeToggleProps {
    onMouseEnter?: () => void;
}

const ThemeToggle = ({ onMouseEnter }: ThemeToggleProps) => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [play] = useSound("/sounds/theme.wav");

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    onMouseEnter={onMouseEnter}
                    className=" rounded-md p-2 flex items-center justify-center cursor-pointer transition-colors"
                    onClick={() => {
                        setTheme(resolvedTheme === "dark" ? "light" : "dark");
                        play();
                    }}
                    aria-label="Toggle theme"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {mounted && (resolvedTheme === "dark" ?
                            <motion.div
                                key="dark"
                                initial={{ rotate: -90, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                exit={{ rotate: 90, scale: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <IconMoon size={16} className="text-neutral-400 dark:text-text-secondary" />
                            </motion.div>
                            :
                            <motion.div
                                key="light"
                                initial={{ rotate: -90, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                exit={{ rotate: 90, scale: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <IconBrightnessUp size={16} className="text-neutral-400 dark:text-text-secondary" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={5}>
                Toggle Mode
            </TooltipContent>
        </Tooltip>
    );
};

export default ThemeToggle;
