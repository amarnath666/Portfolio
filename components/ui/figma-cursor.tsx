"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

// Inject global cursor style immediately to prevent flash of system cursor
const CURSOR_STYLE_ID = 'figma-cursor-style';

const injectCursorStyle = () => {
    if (typeof document === 'undefined') return;
    if (document.getElementById(CURSOR_STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = CURSOR_STYLE_ID;
    style.innerHTML = `
        *, *::before, *::after { cursor: none !important; }
        html, body { cursor: none !important; }
    `;
    document.head.appendChild(style);
};

const removeCursorStyle = () => {
    if (typeof document === 'undefined') return;
    const style = document.getElementById(CURSOR_STYLE_ID);
    if (style) {
        style.remove();
    }
    document.body.style.cursor = 'auto';
};

export const FigmaCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const handRef = useRef<HTMLDivElement>(null);

    const [hidden, setHidden] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true); // Default true to prevent flash

    // Use refs to track state without causing re-renders
    const isPointerRef = useRef(false);
    const positionRef = useRef({ x: -100, y: -100 });

    useEffect(() => {
        // Check if device supports touch (mobile/tablet)
        const checkTouchDevice = () => {
            const isTouch =
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia("(pointer: coarse)").matches;

            setIsTouchDevice(isTouch);

            // Only inject style on non-touch devices
            if (!isTouch) {
                injectCursorStyle();
            }
        };

        checkTouchDevice();

        return () => {
            removeCursorStyle();
        };
    }, []);

    // Optimized mouse move handler using refs for direct DOM manipulation
    const updateCursorPosition = useCallback((x: number, y: number) => {
        if (cursorRef.current) {
            // Use translate3d for GPU acceleration
            cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        positionRef.current = { x, y };
    }, []);

    const checkIsClickable = useCallback((target: HTMLElement): boolean => {
        // Walk up the DOM tree to check for clickable elements
        let element: HTMLElement | null = target;

        while (element && element !== document.body) {
            const tagName = element.tagName.toUpperCase();

            // Check for interactive HTML elements
            if (
                tagName === 'A' ||
                tagName === 'BUTTON' ||
                tagName === 'INPUT' ||
                tagName === 'SELECT' ||
                tagName === 'TEXTAREA' ||
                tagName === 'LABEL' ||
                tagName === 'SUMMARY' ||
                tagName === 'DETAILS'
            ) {
                return true;
            }

            // Check for ARIA roles
            const role = element.getAttribute('role');
            if (
                role === 'button' ||
                role === 'link' ||
                role === 'checkbox' ||
                role === 'radio' ||
                role === 'switch' ||
                role === 'tab' ||
                role === 'menuitem' ||
                role === 'option' ||
                role === 'slider'
            ) {
                return true;
            }

            // Check for cursor-pointer class (Tailwind)
            if (element.classList.contains('cursor-pointer')) {
                return true;
            }

            // Check for data attributes indicating clickability
            if (
                element.hasAttribute('data-clickable') ||
                element.hasAttribute('onclick') ||
                element.hasAttribute('tabindex')
            ) {
                return true;
            }

            // Check for contenteditable
            if (element.getAttribute('contenteditable') === 'true') {
                return true;
            }

            // Move to parent element
            element = element.parentElement;
        }

        return false;
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        // Make cursor visible once mounted
        setHidden(false);

        const onMouseMove = (e: MouseEvent) => {
            // Direct DOM manipulation - no React re-render!
            updateCursorPosition(e.clientX, e.clientY);

            // Check for pointer state
            const target = e.target as HTMLElement;
            const shouldBePointer = checkIsClickable(target);

            // Only update state if changed (prevents unnecessary re-renders)
            if (isPointerRef.current !== shouldBePointer) {
                isPointerRef.current = shouldBePointer;
                setIsPointer(shouldBePointer);
            }
        };

        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(false);
        const onMouseLeave = () => setHidden(true);
        const onMouseEnter = () => setHidden(false);

        // Use passive listeners for better performance
        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mousedown", onMouseDown, { passive: true });
        window.addEventListener("mouseup", onMouseUp, { passive: true });
        document.documentElement.addEventListener("mouseleave", onMouseLeave, { passive: true });
        document.documentElement.addEventListener("mouseenter", onMouseEnter, { passive: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            document.documentElement.removeEventListener("mouseleave", onMouseLeave);
            document.documentElement.removeEventListener("mouseenter", onMouseEnter);
        };
    }, [isTouchDevice, updateCursorPosition, checkIsClickable]);

    // Don't render cursor on touch devices
    if (isTouchDevice) return null;

    return (
        <div
            ref={cursorRef}
            className={cn(
                "pointer-events-none fixed left-0 top-0 z-[9999]",
                "transition-opacity duration-150",
                hidden ? "opacity-0" : "opacity-100"
            )}
            style={{
                willChange: 'transform',
                transform: 'translate3d(-100px, -100px, 0)',
            }}
        >
            {/* Hand Cursor - Always rendered, visibility toggled */}
            <div
                ref={handRef}
                className={cn(
                    "absolute",
                    "transition-all duration-75 ease-out",
                    isPointer ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                )}
                style={{
                    // Offset to align fingertip with actual mouse position
                    // The SVG fingertip is at ~(11, 9) in 24x24 viewBox, scaled to ~(18, 15) at 40px
                    left: '-15px',
                    top: '-8px',
                    willChange: 'transform, opacity',
                    transform: clicked && isPointer ? 'scale(0.85) rotate(-10deg)' : 'scale(1) rotate(0deg)',
                }}
            >
                <svg
                    width="40"
                    height="40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                    style={{ display: 'block' }}
                >
                    <defs>
                        <rect id="cursor-clip-rect" width="24" height="24" />
                    </defs>
                    <clipPath id="cursor-clip">
                        <use xlinkHref="#cursor-clip-rect" />
                    </clipPath>
                    <g clipPath="url(#cursor-clip)">
                        <path fill="#FFFFFF" d="M11.3,20.4c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1.2-1.5-1.5-1.9c-0.2-0.4-0.2-0.6-0.1-1c0.1-0.6,0.7-1.1,1.4-1.1c0.5,0,1,0.4,1.4,0.7c0.2,0.2,0.5,0.6,0.7,0.8c0.2,0.2,0.2,0.3,0.4,0.5c0.2,0.3,0.3,0.5,0.2,0.1c-0.1-0.5-0.2-1.3-0.4-2.1c-0.1-0.6-0.2-0.7-0.3-1.1c-0.1-0.5-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-1.1-0.3-1.5c-0.1-0.5-0.1-1.4,0.3-1.8c0.3-0.3,0.9-0.4,1.3-0.2c0.5,0.3,0.8,1,0.9,1.3c0.2,0.5,0.4,1.2,0.5,2c0.2,1,0.5,2.5,0.5,2.8c0-0.4-0.1-1.1,0-1.5c0.1-0.3,0.3-0.7,0.7-0.8c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0.1,0.6,0.3,0.8,0.5c0.4,0.6,0.4,1.9,0.4,1.8c0.1-0.4,0.1-1.2,0.3-1.6c0.1-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.7-0.1,1,0c0.2,0,0.6,0.3,0.7,0.5c0.2,0.3,0.3,1.3,0.4,1.7c0,0.1,0.1-0.4,0.3-0.7c0.4-0.6,1.8-0.8,1.9,0.6c0,0.7,0,0.6,0,1.1c0,0.5,0,0.8,0,1.2c0,0.4-0.1,1.3-0.2,1.7c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1L11.3,20.4z" />
                        <path fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" d="M11.3,20.4c-0.3-0.4-0.6-1.1-1.2-2c-0.3-0.5-1.2-1.5-1.5-1.9c-0.2-0.4-0.2-0.6-0.1-1c0.1-0.6,0.7-1.1,1.4-1.1c0.5,0,1,0.4,1.4,0.7c0.2,0.2,0.5,0.6,0.7,0.8c0.2,0.2,0.2,0.3,0.4,0.5c0.2,0.3,0.3,0.5,0.2,0.1c-0.1-0.5-0.2-1.3-0.4-2.1c-0.1-0.6-0.2-0.7-0.3-1.1c-0.1-0.5-0.2-0.8-0.3-1.3c-0.1-0.3-0.2-1.1-0.3-1.5c-0.1-0.5-0.1-1.4,0.3-1.8c0.3-0.3,0.9-0.4,1.3-0.2c0.5,0.3,0.8,1,0.9,1.3c0.2,0.5,0.4,1.2,0.5,2c0.2,1,0.5,2.5,0.5,2.8c0-0.4-0.1-1.1,0-1.5c0.1-0.3,0.3-0.7,0.7-0.8c0.3-0.1,0.6-0.1,0.9-0.1c0.3,0.1,0.6,0.3,0.8,0.5c0.4,0.6,0.4,1.9,0.4,1.8c0.1-0.4,0.1-1.2,0.3-1.6c0.1-0.2,0.5-0.4,0.7-0.5c0.3-0.1,0.7-0.1,1,0c0.2,0,0.6,0.3,0.7,0.5c0.2,0.3,0.3,1.3,0.4,1.7c0,0.1,0.1-0.4,0.3-0.7c0.4-0.6,1.8-0.8,1.9,0.6c0,0.7,0,0.6,0,1.1c0,0.5,0,0.8,0,1.2c0,0.4-0.1,1.3-0.2,1.7c-0.1,0.3-0.4,1-0.7,1.4c0,0-1.1,1.2-1.2,1.8c-0.1,0.6-0.1,0.6-0.1,1c0,0.4,0.1,0.9,0.1,0.9s-0.8,0.1-1.2,0c-0.4-0.1-0.9-0.8-1-1.1c-0.2-0.3-0.5-0.3-0.7,0c-0.2,0.4-0.7,1.1-1.1,1.1c-0.7,0.1-2.1,0-3.1,0c0,0,0.2-1-0.2-1.4c-0.3-0.3-0.8-0.8-1.1-1.1L11.3,20.4z" />
                        <line fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" x1="19.6" y1="20.7" x2="19.6" y2="17.3" />
                        <line fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" x1="17.6" y1="20.7" x2="17.5" y2="17.3" />
                        <line fill="none" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" x1="15.6" y1="17.3" x2="15.6" y2="20.7" />
                    </g>
                </svg>
            </div>

            {/* Arrow Cursor - Always rendered, visibility toggled */}
            <div
                ref={arrowRef}
                className={cn(
                    "absolute left-0 top-0",
                    "transition-all duration-75 ease-out",
                    !isPointer ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                )}
                style={{
                    willChange: 'transform, opacity',
                    transform: `rotate(-20deg) ${clicked && !isPointer ? 'scale(0.85)' : 'scale(1)'}`,
                }}
            >
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-sm"
                    style={{ display: 'block' }}
                >
                    <path
                        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z"
                        fill="black"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};
