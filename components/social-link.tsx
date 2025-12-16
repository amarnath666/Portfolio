import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

interface SocialLinkProps {
    href: string;
    icon: ReactNode;
    label: string;
    newTab?: boolean;
}

const SocialLink = ({ href, icon, label, newTab = false }: SocialLinkProps) => {
    // Apply shared styling to the icon
    const styledIcon = isValidElement(icon)
        ? cloneElement(icon as React.ReactElement<{ className?: string }>, {
            className: cn(
                "border border-dashed border-neutral-400 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 rounded-md text-neutral-400 dark:text-text-secondary p-1 hover:bg-neutral-300 dark:hover:bg-neutral-900 transition-colors",
                (icon as React.ReactElement<{ className?: string }>).props.className
            ),
        })
        : icon;

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    href={href}
                    target={newTab ? "_blank" : undefined}
                    rel={newTab ? "noopener noreferrer" : undefined}
                >
                    {styledIcon}
                </Link>
            </TooltipTrigger>
            <TooltipContent>
                <p>{label}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default SocialLink;
