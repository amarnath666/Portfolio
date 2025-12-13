import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface SocialLinkProps {
    href: string;
    icon: ReactNode;
    label: string;
    newTab?: boolean;
}

const SocialLink = ({ href, icon, label, newTab = false }: SocialLinkProps) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    href={href}
                    target={newTab ? "_blank" : undefined}
                    rel={newTab ? "noopener noreferrer" : undefined}
                >
                    {icon}
                </Link>
            </TooltipTrigger>
            <TooltipContent>
                <p>{label}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default SocialLink;
