"use client";

import Button from "./button";
import {

  IconBrandX,

  IconMail,
  IconBrandGithub,

} from "@tabler/icons-react";
import { Linkedin } from "lucide-react";
import ViewArea from "./ui/view-area";

const Findme = () => {
  return (
    <ViewArea showBorderTop={false} showBottomDots={false}>
      <div className="">


        <p className="text-gray-500 text-base pb-4">
          Where to find me
        </p>
        <div className="flex flex-row gap-4 flex-wrap ">
          <Button
            icon={<IconMail size={18} />}
            name="Email me"
            onClick={() => { window.open("mailto:amarnathdhumal2001@gmail.com", "_blank") }}
          />
          <Button
            icon={<IconBrandX size={18} />}
            name=""
            onClick={() => window.open("https://x.com/AmarnathDhumal", "_blank")}
          />
          <Button
            icon={<IconBrandGithub size={18} />}
            name="Github"
            onClick={() => { window.open("https://github.com/amarnath666", "_blank") }}
          />
          <Button
            icon={<Linkedin size={18} />}
            name="Linkedin"
            onClick={() => { window.open("https://www.linkedin.com/in/amarnath-dhumal/", "_blank") }}
          />
        </div>

      </div>
    </ViewArea>
  );
};

export default Findme;