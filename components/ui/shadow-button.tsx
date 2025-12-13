import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShadowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
}

const ShadowButton = ({ children, icon, className, ...props }: ShadowButtonProps) => {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 bg-neutral-900 text-white hover:bg-neutral-800 py-2 shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33] h-8 px-4 text-sm hover:text-white cursor-pointer active:scale-95 transition-all duration-200",
                className
            )}
            {...props}
        >
            {icon}
            <span>{children}</span>
        </button>
    );
};

export default ShadowButton;
