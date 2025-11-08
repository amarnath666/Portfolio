"use client";

import Button from "./button";
import {

  IconBrandX,

  IconMail,
  IconBrandGithub,

} from "@tabler/icons-react";
import { Linkedin } from "lucide-react";

const Findme = () => {
  return (
    <div className="pt-6">
         <hr className="w-full h-px bg-[#27272a] border-none " />

      <p className="text-gray-500 text-base pt-2 pb-4">
        Where to find me
      </p>
      <div className="flex flex-row gap-4 flex-wrap ">
        <Button
          icon={<IconMail size={18} />}
          name="Email me"
          onClick={() => {window.open("mailto:amarnathdhumal2001@gmail.com", "_blank")}}
        />
        <Button
          icon={<IconBrandX size={18} />}
          name=""
          onClick={() => window.open("https://x.com/AmarnathDhumal", "_blank")}
        />
        <Button
          icon={<IconBrandGithub size={18} />}
          name="Github"
          onClick={() => {window.open("https://github.com/amarnath666", "_blank")}}
        />
        <Button
          icon={<Linkedin size={18} />}
          name="Linkedin"
          onClick={() => {window.open("https://www.linkedin.com/in/amarnath-dhumal/", "_blank")}}
        />
      </div>
       
    </div>
  );
};

export default Findme;