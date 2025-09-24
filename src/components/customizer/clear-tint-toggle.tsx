"use client";

import { useState } from "react";
import { TooltipWrapper } from "@/components/tooltip-wrapper";
import { Button } from "../ui/button";

export function ClearTintToggle() {
    const [isClear, setIsClear] = useState(true);

    return (
        <TooltipWrapper label={isClear ? "Clear" : "Tinted"} asChild>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsClear(!isClear)}
            >
                <div className="relative border h-5 w-5 rounded-full">
                    <div className="absolute top-0 left-0 h-full w-1/2 bg-background rounded-tl-full rounded-bl-full" />
                    <div className="absolute z-50 border h-2 w-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="absolute top-0 left-0 h-full w-1/2 bg-foreground rounded-tl-full rounded-bl-full" />
                        <div className="absolute top-0 right-0 h-full w-1/2 bg-background rounded-tr-full rounded-br-full" />
                    </div>
                    <div className="absolute top-0 right-0 h-full w-1/2 bg-foreground rounded-tr-full rounded-br-full" />
                </div>
            </Button>
        </TooltipWrapper>
    );
}