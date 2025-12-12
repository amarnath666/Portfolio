import { cn } from "@/lib/utils"

interface ViewAreaProps {
    children: React.ReactNode
    className?: string
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
    showBorderTop = true,
    showBorderBottom = true,
    showBorderLeft = true,
    showBorderRight = true,
    showTopDots = true,
    showBottomDots = true
}: ViewAreaProps) => {
    const outerBorderClasses = cn(
        showBorderTop && "border-t",
        showBorderBottom && "border-b",
        (showBorderTop || showBorderBottom) && "border-white/10",
        "px-4 sm:px-0"
    )

    const innerBorderClasses = cn(
        showBorderLeft && "border-l",
        showBorderRight && "border-r",
        (showBorderLeft || showBorderRight) && "border-white/10"
    )

    return (
        <div className={outerBorderClasses}>
            <div className={cn(
                innerBorderClasses,
                "w-full h-auto relative p-4 max-w-3xl mx-auto ",
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
        <div className="z-10">
            {showTopLeft && (
                <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-neutral-700 rounded-full" />
            )}
            {showBottomLeft && (
                <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-neutral-700 rounded-full" />
            )}
            {showTopRight && (
                <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-neutral-700 rounded-full" />
            )}
            {showBottomRight && (
                <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-neutral-700 rounded-full" />
            )}
        </div>
    )
}

export default ViewArea
