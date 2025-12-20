"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const ErrorMessage = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <span
        ref={ref}
        className={cn("text-xs text-red-500", className)}
        {...props}
    />
));
ErrorMessage.displayName = "ErrorMessage";

export { ErrorMessage };
