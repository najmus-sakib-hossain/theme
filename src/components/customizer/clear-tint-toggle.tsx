"use client";

import { META_THEME_COLORS, useMetaColor } from "@/hooks/use-meta-colors";
import { Check, Monitor, Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
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
    setTheme(resolvedTheme === "tinted" ? "clear" : "tinted");
    setMetaColor(
      resolvedTheme === "tinted"
        ? META_THEME_COLORS.clear
        : META_THEME_COLORS.tinted,
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
          <SunIcon className="hidden size-4 [html.dark_&]:block" />
          <MoonIcon className="hidden size-4 [html.light_&]:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem onClick={() => setTheme("light")}>
          <Sun /> Light {theme === "light" && <Check className="ml-auto" />}
        </ContextMenuItem>
        <ContextMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          Dark
          {theme === "dark" && <Check className="ml-auto" />}
        </ContextMenuItem>
        <ContextMenuItem onClick={() => setTheme("system")}>
          <Monitor /> System
          {theme === "system" && <Check className="ml-auto" />}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { TooltipWrapper } from "@/components/tooltip-wrapper";
// import { Button } from "../ui/button";
// import { useThemeConfig } from "@/hooks/use-theme-config";
// import { useTheme } from "next-themes";

// const TINT_GRADIENT = "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)";
// const THEME_IMAGE = "url('/suzume-no-tojimari.png')";

// export function ClearTintToggle() {
//     const { config, setConfig, currentThemeObject } = useThemeConfig();
//     const { resolvedTheme } = useTheme();
//     const mode = (resolvedTheme ?? "light") as "light" | "dark";

//     const [isClear, setIsClear] = useState<boolean>(true);

//     useEffect(() => {
//         // initialize from current theme config once on mount
//         const val = (currentThemeObject as any)?.[mode]?.["gradient-background"];
//         if (val !== undefined) {
//             setIsClear(String(val).startsWith("url("));
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     useEffect(() => {
//         // Update the persisted theme config under the active mode (light/dark)
//         setConfig((prev) => {
//             const themeObject: any = { ...(prev.themeObject || {}) };

//             themeObject[mode] = { ...(themeObject[mode] || {}) };
//             themeObject[mode]["gradient-background"] = isClear
//                 ? THEME_IMAGE
//                 : TINT_GRADIENT;

//             return {
//                 ...prev,
//                 themeObject,
//             };
//         });
//     }, [isClear, mode, setConfig]);

//     return (
//         <TooltipWrapper label={isClear ? "Clear" : "Tinted"} asChild>
//             <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setIsClear((s) => !s)}
//             >
//                 <div className="relative border h-5 w-5 rounded-full">
//                     <div className="absolute top-0 left-0 h-full w-1/2 bg-background rounded-tl-full rounded-bl-full" />
//                     <div className="absolute z-50 border h-2 w-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                         <div className="absolute top-0 left-0 h-full w-1/2 bg-foreground rounded-tl-full rounded-bl-full" />
//                         <div className="absolute top-0 right-0 h-full w-1/2 bg-background rounded-tr-full rounded-br-full" />
//                     </div>
//                     <div className="absolute top-0 right-0 h-full w-1/2 bg-foreground rounded-tr-full rounded-br-full" />
//                 </div>
//             </Button>
//         </TooltipWrapper>
//     );
// }