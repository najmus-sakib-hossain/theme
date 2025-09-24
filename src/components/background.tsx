"use client";

import { useEffect } from "react";

export function Background() {
    useEffect(() => {
        // Ensure the CSS variable exists with a default if not already set.
        const root = document.documentElement;
        const current = getComputedStyle(root).getPropertyValue("--gradient-background").trim();
        if (!current) {
            // default matches globals.css default radial gradient
            root.style.setProperty(
                "--gradient-background",
                "radial-gradient(ellipse 60% 70% at 50% 0%, oklch(from var(--primary) l c h / 0.15), oklch(from var(--secondary) l c h / 0.1), transparent 100%)"
            );
        }
    }, []);

    return (
        <>
            <div className="grid-background-effect" />
            <div className="light-background-effect" />
        </>
    );
}
