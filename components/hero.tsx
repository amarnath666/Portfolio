"use client";

import ViewArea from "@/components/ui/view-area";
import { IconBrandLinkedin, IconBrandX, IconBrandGithub, IconPhone, IconMail } from "@tabler/icons-react";
import SocialLink from "./social-link";
import AnimatedCyclingText from "./ui/animated-cycling-text";

const roles = ["Design Engineer", "Full Stack Developer", "App Developer"]

const Hero = () => {
  return (
    <ViewArea showBorderTop={false} showTopDots={false} showBottomDots={false}>
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row  items-center w-full">

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                <h1 className="text-[24px] md:text-[36px] font-outfit   text-foreground tracking-normal font-medium  leading-none ">
                  Amarnath Dhumal
                </h1>
              </div>


            </div>

            <AnimatedCyclingText texts={roles} />
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-text-secondary text-sm/5 md:text-base/7 tracking-wide max-w-[512px]">
            I don&apos;t just write code; I <span className="text-foreground">architect experiences</span>. From the first pixel to the final deploy, I obsess over the details that make software feel <span className="text-foreground">intuitive and alive</span>.
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
