import { cn } from "@/lib/utils"

interface ViewAreaProps {
    children: React.ReactNode
    className?: string
    outerClassName?: string
    showBorderTop?: boolean
    showBorderBottom?: boolean
    showBorderLeft?: boolean
    showBorderRight?: boolean
    showTopDots?: boolean
    showBottomDots?: boolean
}

const ViewArea = ({
    children,
    className,
    outerClassName,
    showBorderTop = true,
    showBorderBottom = true,
    showBorderLeft = true,
    showBorderRight = true,
    showTopDots = true,
    showBottomDots = true
}: ViewAreaProps) => {
    const outerBorderClasses = cn(
        showBorderTop && "border-t-1",
        showBorderBottom && "border-b-1",
        (showBorderTop || showBorderBottom) && "border-neutral-200 dark:border-neutral-800/60",
        "px-4 sm:px-0",
        outerClassName
    )

    const innerBorderClasses = cn(
        showBorderLeft && "border-l-1",
        showBorderRight && "border-r-1",
        (showBorderLeft || showBorderRight) && "border-neutral-200 dark:border-neutral-800/60"
    )

    return (
        <div className={outerBorderClasses}>
            <div className={cn(
                innerBorderClasses,
                "w-full h-auto relative px-4 py-8 md:py-12 max-w-3xl mx-auto ",
                className
            )}>
                <Dots
                    showTopLeft={showTopDots && showBorderLeft}
                    showTopRight={showTopDots && showBorderRight}
                    showBottomLeft={showBottomDots && showBorderLeft}
                    showBottomRight={showBottomDots && showBorderRight}
                />

                {children}
            </div>
        </div>
    )
}

interface DotsProps {
    showTopLeft?: boolean
    showTopRight?: boolean
    showBottomLeft?: boolean
    showBottomRight?: boolean
}

export const Dots = ({
    showTopLeft = true,
    showTopRight = true,
    showBottomLeft = true,
    showBottomRight = true
}: DotsProps) => {
    return (
        <div className="absolute inset-0 z-20 pointer-events-none">
            {showTopLeft && (
                <div className="absolute top-[-4px] left-[-4px] w-2 h-2 dark:bg-neutral-800 bg-neutral-200 rounded-full" />
            )}
            {showBottomLeft && (
                <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 dark:bg-neutral-800 bg-neutral-200 rounded-full" />
            )}
            {showTopRight && (
                <div className="absolute top-[-4px] right-[-4px] w-2 h-2 dark:bg-neutral-800 bg-neutral-200 rounded-full" />
            )}
            {showBottomRight && (
                <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 dark:bg-neutral-800 bg-neutral-200 rounded-full" />
            )}
        </div>
    )
}

export default ViewArea
