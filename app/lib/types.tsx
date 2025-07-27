import React from "react";

export interface ButtonProps {
  name: string;
  onClick: () => void;
}

export interface IconButtonProps {
  name: string;
   icon?: React.ReactNode;
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  videoSrc: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}
