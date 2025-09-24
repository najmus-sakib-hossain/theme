"use client";

import { META_THEME_COLORS, useMetaColor } from "@/hooks/use-meta-colors";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function ClearTintToggle({
    className,
    onClick,
    ...props
}: React.ComponentProps<typeof Button>) {
    const { setTheme, resolvedTheme, theme } = useTheme();
    const { setMetaColor } = useMetaColor();

    const toggleTheme = React.useCallback(() => {
        setTheme(resolvedTheme === "clear" ? "tinted" : "clear");
        setMetaColor(
            resolvedTheme === "clear"
                ? META_THEME_COLORS.tinted
                : META_THEME_COLORS.clear,
        );
    }, [resolvedTheme, setTheme, setMetaColor]);

    return (
        <ContextMenu modal={false}>
            <ContextMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className={className}
                    {...props}
                >
                    <div className="relative border h-5 w-5 rounded-full">
                        <div className="absolute top-0 left-0 h-full w-1/2 bg-background rounded-tl-full rounded-bl-full" />
                        <div className="absolute z-50 border h-2 w-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="absolute top-0 left-0 h-full w-1/2 bg-foreground rounded-tl-full rounded-bl-full" />
                            <div className="absolute top-0 right-0 h-full w-1/2 bg-background rounded-tr-full rounded-br-full" />
                        </div>
                        <div className="absolute top-0 right-0 h-full w-1/2 bg-foreground rounded-tr-full rounded-br-full" />
                    </div>
                    <span className="sr-only">Toggle clear/tinted</span>
                </Button>
            </ContextMenuTrigger>

            <ContextMenuContent>
                <ContextMenuItem onClick={() => setTheme("clear")}>
                    <Sun /> Clear {theme === "clear" && <Check className="ml-auto" />}
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setTheme("tinted")}>
                    <Moon />
                    Tinted
                    {theme === "tinted" && <Check className="ml-auto" />}
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setTheme("system")}>
                    <Monitor /> System
                    {theme === "system" && <Check className="ml-auto" />}
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
}