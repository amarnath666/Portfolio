"use client";
import ViewArea from "@/components/ui/view-area";
import { IconBrandLinkedin, IconBrandX, IconBrandGithub, IconPhone, IconMail } from "@tabler/icons-react";
import SocialLink from "./social-link";
import AnimatedCyclingText from "./ui/animated-cycling-text";
import ScribbledArrowToRight from "@/app/lib/utilis/svg";
import BlurFadeText from "@/components/ui/blur-fade-text";
import BlurFade from "@/components/ui/blur-fade";

const roles = ["Design Engineer"]

const Hero = () => {
  return (
    <ViewArea showBorderTop={false} showTopDots={false} showBottomDots={false} >
      <div className="flex flex-col items-start justify-center md:py-4">
        <div className="flex flex-row  items-center w-full">

          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <div>
                <BlurFadeText
                  delay={0.1}
                  className="text-[24px] md:text-[36px] font-outfit text-foreground tracking-normal font-medium leading-none"
                  text="Amarnath Dhumal"
                />
              </div>


            </div>

            <BlurFade delay={0.2} inView>
              <AnimatedCyclingText texts={roles} />
            </BlurFade>
          </div>
        </div>
        <div className="flex flex-row pt-6 gap-2">
          <BlurFade delay={0.4} inView>
            <p className="text-text-secondary text-sm/5 md:text-base/7 tracking-wide max-w-[512px]">
              I don&apos;t just write code; I <span className="text-foreground">architect experiences</span>. From the first pixel to the final deploy, I obsess over the details that make software feel <span className="text-foreground">intuitive and alive</span>.
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="hidden sm:flex flex-row relative">
              <ScribbledArrowToRight className="text-neutral-200 dark:text-neutral-800 rotate-[190deg] size-[24px]" />
              <p className="text-neutral-200 dark:text-neutral-800 text-sm  tracking-wide  -rotate-[34deg] absolute top-[-25px] left-6 whitespace-nowrap">
                About me
              </p>
            </div>
          </BlurFade>

        </div>


        {/* Social Icons */}
        <BlurFade delay={0.3} inView>
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
        </BlurFade>


      </div >
    </ViewArea >
  );
};

export default Hero;
