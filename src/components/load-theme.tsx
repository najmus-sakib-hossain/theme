"use client";

import { initialThemeConfig } from "@/lib/themes";
import { LOCAL_STORAGE_KEYS } from "@/utils/constants";
import { monoFontsArray, sansFontsArray, serifFontsArray } from "@/utils/fonts";
import { preconnect } from "react-dom";

export function LoadTheme() {
  preconnect("https://fonts.gstatic.com", { crossOrigin: "anonymous" });
  preconnect("https://fonts.googleapis.com", { crossOrigin: "anonymous" });

  const loadThemeScriptContent = `(function() {
    const root = document.documentElement;

    const defaultClearStyles = ${JSON.stringify(
    initialThemeConfig.themeObject.clear,
  )};
    const defaultTintedStyles = ${JSON.stringify(
    initialThemeConfig.themeObject.tinted,
  )};
    const defaultRadius = ${JSON.stringify(initialThemeConfig.radius)};
    const defaultFonts = ${JSON.stringify(initialThemeConfig.fonts)};

    let themeConfig = null;
    try {
      const persistedThemeConfig = localStorage.getItem("${LOCAL_STORAGE_KEYS.themeConfig}");
      if (persistedThemeConfig) {
        const parsedThemeConfig = JSON.parse(persistedThemeConfig);
        themeConfig = parsedThemeConfig;
      }
    } catch (e) {
      console.warn(
        "Theme initialization: Failed to read/parse localStorage:",
        e,
      );
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const localStorageMode = localStorage.getItem("${LOCAL_STORAGE_KEYS.nextThemesMode}");
    let resolvedMode = localStorageMode;

    if (resolvedMode === "system" || resolvedMode === null) {
      resolvedMode = prefersDark ? "tinted" : "clear"
    }

    // Map old light/dark to clear/tinted
    const mode = resolvedMode === "dark" ? "tinted" : "clear";

    // Migrate themeConfig if it has old structure
    if (themeConfig?.themeObject && !themeConfig.themeObject.clear && themeConfig.themeObject.light) {
      themeConfig.themeObject.clear = themeConfig.themeObject.light;
      delete themeConfig.themeObject.light;
    }
    if (themeConfig?.themeObject && !themeConfig.themeObject.tinted && themeConfig.themeObject.dark) {
      themeConfig.themeObject.tinted = themeConfig.themeObject.dark;
      delete themeConfig.themeObject.dark;
    }

    const activeThemeObjectStyles =
      mode === "tinted"
        ? themeConfig?.themeObject.tinted || defaultTintedStyles
        : themeConfig?.themeObject.clear || defaultClearStyles;

    const activeRadius = themeConfig?.radius || defaultRadius;

    const activeFonts = {
      sans: themeConfig?.fonts?.sans ?? defaultFonts.sans,
      serif: themeConfig?.fonts?.serif ?? defaultFonts.serif,
      mono: themeConfig?.fonts?.mono ?? defaultFonts.mono,
    };

    // Function to fetch fonts up-front for the initial load
    const loadFont = (href) => {
      if (href) {
        const link = document.createElement("link");
        link.href = href;
        link.rel = "stylesheet";
        link.precedence = "high";
        document.head.appendChild(link);
      }
    };

    const activeFontSansHref = [
      ...${JSON.stringify(sansFontsArray)},
      ...${JSON.stringify(serifFontsArray)},
      ...${JSON.stringify(monoFontsArray)}].find((font) => font.value === activeFonts.sans)?.href
    const activeFontSerifHref = ${JSON.stringify(serifFontsArray)}.find(
        (font) => font.value === activeFonts.serif,
      )?.href;
    const activeFontMonoHref = ${JSON.stringify(monoFontsArray)}.find(
        (font) => font.value === activeFonts.mono,
      )?.href;

    loadFont(activeFontSansHref);
    loadFont(activeFontSerifHref);
    loadFont(activeFontMonoHref);

    const themeProperties = {
      ...activeThemeObjectStyles,
      radius: activeRadius,
      "font-sans": activeFonts.sans,
      "font-serif": activeFonts.serif,
      "font-mono": activeFonts.mono,
    };

    let cssVars = [];
    for (const [key, value] of Object.entries(themeProperties)) {
      cssVars[\`--\${key}\`] = value;
    }

    // Set the CSS variables on the root element
    console.log("Theme initialization. CSS variables set:", cssVars);
    for (const [key, value] of Object.entries(cssVars)) {
      root.style.setProperty(key, value);
    }
  })()`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: loadThemeScriptContent }}
      suppressHydrationWarning
    />
  );
}
