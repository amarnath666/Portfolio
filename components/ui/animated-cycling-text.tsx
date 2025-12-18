"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AnimatedCyclingTextProps {
    texts: string[];
    interval?: number;
    className?: string;
}

const AnimatedCyclingText = ({
    texts,
    interval = 3000,
    className = "text-text-secondary text-sm md:text-base font-medium leading-none flex tracking-wide"
}: AnimatedCyclingTextProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, interval);
        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <div className="flex items-center justify-start">
            <AnimatePresence mode="popLayout">
                <motion.p
                    layout
                    key={currentIndex}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                staggerChildren: 0.03,
                            }
                        },
                        exit: {
                            opacity: 0,
                            x: -10,
                            filter: "blur(30px)",
                            transition: { duration: 0.3 }
                        }
                    }}
                    className={className}
                >
                    {texts[currentIndex].split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, x: 10, filter: "blur(30px)" },
                                visible: { opacity: 1, x: 0, filter: "blur(0px)" }
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.p>
            </AnimatePresence>
        </div>
    );
};

export default AnimatedCyclingText;
