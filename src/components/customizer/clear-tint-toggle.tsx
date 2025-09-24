"use client";

import { useEffect, useState } from "react";
import { TooltipWrapper } from "@/components/tooltip-wrapper";
import { Button } from "../ui/button";

const TINT_GRADIENT = "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)";
const THEME_IMAGE = "url('/suzume-no-tojimari.png')";

export function ClearTintToggle() {
    const [isClear, setIsClear] = useState(true);

    useEffect(() => {
        // Update the CSS variable that `.light-background-effect` uses for its background
        const root = document.documentElement;
        root.style.setProperty(
            "--gradient-background",
            isClear ? THEME_IMAGE : TINT_GRADIENT
        );
    }, [isClear]);

    return (
        <TooltipWrapper label={isClear ? "Clear" : "Tinted"} asChild>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsClear((s) => !s)}
            >
                <div className="relative border h-7 w-7 rounded-full">
                    <div className="absolute top-0 left-0 h-full w-1/2 bg-background rounded-tl-full rounded-bl-full" />
                    <div className="absolute z-50 border h-3 w-3 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="absolute top-0 left-0 h-full w-1/2 bg-foreground rounded-tl-full rounded-bl-full" />
                        <div className="absolute top-0 right-0 h-full w-1/2 bg-background rounded-tr-full rounded-br-full" />
                    </div>
                    <div className="absolute top-0 right-0 h-full w-1/2 bg-foreground rounded-tr-full rounded-br-full" />
                </div>
            </Button>
        </TooltipWrapper>
    );
}