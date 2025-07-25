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
          <p className="text-gray-500 hover:text-gray-300 cursor-pointer">
            @AmarnathDhumal
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <p className="text-gray-500 text-sm sm:text-[16px] font-light">
          Senior Software Engineer building SaaS products and web apps. Find me
          on twitter for tech updates and memes.
          {/* I'm <span className="text-white">Amarnath Dhumal</span>, a software
        engineer and a passionate learner. */}
        </p>
      </div>

      <div className="flex flex-row  gap-4 ">
        <PingButton
          icon={<IconBrandX size={18} />}
          name="Open to Work"
          onClick={() => {}}
        />
        <Button
          icon={<IconDownload size={18} />}
          name="Downlaod CV"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Hero;
