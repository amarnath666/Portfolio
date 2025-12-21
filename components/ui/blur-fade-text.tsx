"use client";

import { cn } from "@/lib/utils";
import { motion, Variants, useInView } from "motion/react";
import { useMemo, useRef } from "react";

interface BlurFadeTextProps {
    text: string;
    className?: string;
    variant?: {
        hidden: { y: number };
        visible: { y: number };
    };
    duration?: number;
    characterDelay?: number;
    delay?: number;
    yOffset?: number;
    animateByCharacter?: boolean;
}

export default function BlurFadeText({
    text,
    className,
    variant,
    duration = 0.8,
    characterDelay = 0.03,
    delay = 0,
    yOffset = 8,
    animateByCharacter = false,
}: BlurFadeTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
    };
    const combinedVariants = variant || defaultVariants;
    const characters = useMemo(() => Array.from(text), [text]);

    if (animateByCharacter) {
        return (
            <div ref={ref} className={cn("flex flex-wrap", className)}>
                {characters.map((char, i) => (
                    <motion.span
                        key={i}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        // exit="hidden"
                        variants={combinedVariants}
                        transition={{
                            delay: delay + i * characterDelay,
                            duration,
                            ease: "easeOut",
                        }}
                        className="inline-block"
                        style={{ width: char === " " ? "0.2em" : "auto" }}
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        );
    }

    return (
        <div ref={ref} className={cn("flex", className)}>
            <motion.span
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                // exit="hidden"
                variants={combinedVariants}
                transition={{
                    delay,
                    duration,
                    ease: "easeOut",
                }}
                className="inline-block"
            >
                {text}
            </motion.span>
        </div>
    );
}
