"use client";

import Button from "./button";
import PingButton from "./AnimatePingButton";
import { IconDownload, IconBrandX } from "@tabler/icons-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-6 ">
      <div className="flex flex-row  items-center ">
        <img
          src={"/images/profile.jpg"}
          alt="profile"
          className="rounded-full w-[80px] h-[80px]"
        />
        <div className="pl-4 ">
          <p className="text-[26px] font-bold font-doto text-[#fafafa]">
            Amarnath Dhumal
          </p>
          <p 
           onClick={() => window.open("https://x.com/AmarnathDhumal", "_blank")}
          className="text-gray-500 hover:text-gray-300 cursor-pointer">
            @AmarnathDhumal
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="text-gray-400 text-base ">
          Full Stack Developer building SaaS products and web apps.
        </p>
      </div>

      <div className="flex flex-row  gap-4 ">
        <PingButton
          icon={<IconBrandX size={18} />}
          name="Open for Work"
          onClick={() => window.open("https://x.com/AmarnathDhumal", "_blank")}
        />
        <Button
          icon={<IconDownload size={18} />}
          name="Downlaod CV"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Amarnath-Resume.pdf"; 
            link.download = "Amarnath-Dhumal-CV.pdf"; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
