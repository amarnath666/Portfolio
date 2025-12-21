"use client";

import { motion } from "motion/react";
import ViewArea from "./ui/view-area";

const Footer = () => {
    return (
        <ViewArea showBorderTop={false} className="!px-0 !py-2 sm:!py-4">
            <footer className="w-full flex justify-center items-center bg-[#ffffff] dark:bg-[#000000] overflow-hidden transition-colors duration-300" >
                <div className="relative inline-block select-none isolate ">
                    {/* Main Text */}
                    {/* <h1
                        className="relative z-10 text-[#D3D3D3] dark:text-[#C0C0C0] font-chillax font-semibold text-[55px] sm:text-[95px] md:text-[120px] leading-none tracking-wide transition-colors duration-300 "
                        style={{
                            textShadow: "var(--footer-shadow, .03em .03em 0 #e5e5e5)"
                        }}
                    >
                        Amarnath
                        <style jsx>{`
                        :global(.dark) h1 {
                             --footer-shadow: .03em .03em 0 #1a1a1a;
                        }
                        
                      
                        h1 {
                            --footer-shadow: .03em .03em 0 #C0C0C0;
                        }
                    `}</style>
                    </h1> */}

                    {/* Animated Shadow/Pattern */}
                    <motion.span
                        className="text-[58px] sm:text-[95px] md:text-[124px]  font-bold leading-none tracking-wide text-transparent uppercase"
                        style={{
                            backgroundImage:
                                "linear-gradient(45deg, transparent 45%, var(--stripe-color, #a3a3a3) 45%, var(--stripe-color, #a3a3a3) 55%, transparent 0)",
                            backgroundSize: ".05em .05em",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                        animate={{
                            backgroundPosition: ["0% 0%", "100% -100%"],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        aria-hidden="true"
                    >
                        Amarnath
                        <style jsx>{`
                        :global(.dark) .absolute {
                            --stripe-color: #525252;
                        }
                        .absolute {
                            --stripe-color: #a3a3a3;
                        }
                    `}</style>
                    </motion.span>
                </div>
            </footer >
        </ViewArea >
    );
};

export default Footer;
