"use client";

import ViewArea from "@/components/ui/view-area";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { IconBrandLinkedin, IconBrandX, IconBrandGithub, IconPhone, IconMail } from "@tabler/icons-react";

import SocialLink from "./social-link";

const roles = ["Design Engineer", "Full Stack Developer", "App Developer"]

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ViewArea showBorderTop={false} showTopDots={false} showBottomDots={false}>
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row  items-center w-full">

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                <p className="text-[24px] md:text-[36px] font-outfit   text-foreground tracking-normal font-medium  leading-none ">
                  Amarnath Dhumal
                </p>
              </div>


            </div>

            <div className="flex items-center justify-center ">
              <AnimatePresence mode="popLayout">
                <motion.p
                  layout
                  key={currentRoleIndex}
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
                  className="text-text-secondary text-sm md:text-base font-medium leading-none flex  tracking-wide "
                >
                  {roles[currentRoleIndex].split("").map((char, index) => (
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
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-text-secondary text-sm/5 md:text-base/7 tracking-wide max-w-[512px]">
            I write code, but I <span className="text-foreground">think in pixels</span>. I’m obsessed with the tiny details that turn a functional app into an <span className="text-foreground">experience people love</span>.
          </p>



        </div>
        {/* <div className="flex flex-col sm:flex-row  gap-4 pt-6">
          <Link href="mailto:amarnathdhumal2001@gmail.com">
            <ShadowButton icon={<IconMail className="text-neutral-400" />}>
              Get in touch
            </ShadowButton>
          </Link>
          <Link href="tel:+918367260182">
            <ShadowButton icon={<IconPhone className="text-neutral-400" />}>
              Resume
            </ShadowButton>
          </Link>
        </div> */}


        {/* Social Icons */}
        <div className="flex flex-row gap-2 pt-6">
          <SocialLink
            href="https://x.com/AmarnathDhumal"
            icon={<IconBrandX size={28} />}
            label="View Twitter"
            newTab
          />
          <SocialLink
            href="tel:+918367260182"
            icon={<IconPhone size={28} />}
            label="Call me"
          />
          <SocialLink
            href="mailto:amarnathdhumal2001@gmail.com"
            icon={<IconMail size={28} />}
            label="Mail me"
          />
          <SocialLink
            href="https://github.com/amarnath666"
            icon={<IconBrandGithub size={28} />}
            label="View GitHub"
            newTab
          />
          <SocialLink
            href="https://linkedin.com/in/amarnath-dhumal"
            icon={<IconBrandLinkedin size={28} />}
            label="View LinkedIn"
            newTab
          />
        </div>


      </div >
    </ViewArea >
  );
};

export default Hero;
