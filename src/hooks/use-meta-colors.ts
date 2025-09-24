// pulled from https://github.com/shadcn-ui/ui/blob/main/apps/v4/hooks/use-meta-color.ts
import * as React from "react";
import { useTheme } from "next-themes";

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
  tinted: "linear-gradient(to right, oklch(0.58 0.22 140) 0%, oklch(0.56 0.24 170) 100%)",
  clear: "url('/suzume-no-tojimari.png')",
};

export function useMetaColor() {
  const { resolvedTheme } = useTheme();

  const metaColor = React.useMemo(() => {
    switch (resolvedTheme) {
      case "dark":
        return META_THEME_COLORS.dark;
      case "tinted":
        return META_THEME_COLORS.tinted;
      case "clear":
        return META_THEME_COLORS.clear;
      default:
        return META_THEME_COLORS.light;
    }
  }, [resolvedTheme]);

  const setMetaColor = React.useCallback((color: string) => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color);
  }, []);

  return {
    metaColor,
    setMetaColor,
  };
}
