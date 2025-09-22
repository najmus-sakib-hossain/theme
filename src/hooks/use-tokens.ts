import { allPresetsArray, surfaceShadesPresets } from "@/lib/colors";
import { initialThemeConfig } from "@/lib/themes";
import {
  ColorProperty,
  OklchValue,
  Preset,
  SurfaceShadesThemeObject,
  ThemeMode,
  ThemeProperty,
} from "@/types/theme";
import { getOptimalForegroundColor, isValidColor } from "@/utils/colors";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { useThemeConfig } from "./use-theme-config";

export function useTokens() {
  const { resolvedTheme } = useTheme();
  const mode: ThemeMode = resolvedTheme === "dark" ? "dark" : "light";
  const { config, setConfig, currentThemeObject } = useThemeConfig();

  const getToken = useCallback(
    ({ property }: { property: ThemeProperty }) => {
      const isShadow = property.startsWith("shadow-");
      const isShadowColor = property.startsWith("shadow-color");

      let resolvedMode = mode;

      if (isShadow) {
        resolvedMode = "light";
        if (isShadowColor) resolvedMode = mode;
      }

      const token =
        currentThemeObject[resolvedMode][property] ??
        initialThemeConfig.themeObject[resolvedMode][property];

      if (!token) {
        throw new Error(`Token "${property}" not found in theme object`);
      }

      return token;
    },
    [mode, currentThemeObject[mode]],
  );

  const setToken = ({
    property,
    value,
    modesInSync = false,
  }: {
    property: ThemeProperty;
    value: string;
    modesInSync?: boolean;
  }) => {
    // Update both modes
    if (modesInSync) {
      return setConfig((prev) => {
        return {
          ...prev,
          themeObject: {
            ...prev.themeObject,
            light: {
              ...prev.themeObject.light,
              [property]: value,
            },
            dark: {
              ...prev.themeObject.dark,
              [property]: value,
            },
          },
        };
      });
    }

    // Only update the current mode
    setConfig((prev) => {
      return {
        ...prev,
        themeObject: {
          ...prev.themeObject,
          [mode]: {
            ...prev.themeObject[mode],
            [property]: value,
          },
        },
      };
    });
  };

  const getColorToken = useCallback(
    ({ property }: { property: ColorProperty }) => {
      const color = currentThemeObject[mode][property];

      if (!color) {
        console.error(`Color token "${property}" not found in theme object`);
        return "";
      }

      return color;
    },
    [mode, currentThemeObject[mode]],
  );

  const getActiveThemeColorToken = useCallback(
    ({ property, mode }: { property: ColorProperty; mode: ThemeMode }) => {
      const activeThemeObject = allPresetsArray.find(
        (theme) => theme.name === currentThemeObject.name,
      );

      const themeObject = activeThemeObject ?? currentThemeObject;
      const color = themeObject[mode][property];

      if (!color) {
        throw new Error(`Color token "${property}" not found in theme object`);
      }

      return color;
    },
    [currentThemeObject, mode],
  );

  const createTokenGetterForPreset = useCallback((preset: Preset) => {
    const presetThemeObject = allPresetsArray.find(
      (theme) => theme.name === preset,
    );

    if (!presetThemeObject) {
      throw new Error(`Preset "${preset}" not found`);
    }

    return ({
      property,
      mode,
    }: {
      property: ThemeProperty;
      mode: ThemeMode;
    }) => {
      const color = presetThemeObject[mode][property];

      if (!color) {
        throw new Error(`Color token "${property}" not found in theme object`);
      }

      return color;
    };
  }, []);

  const setColorToken = ({
    property,
    color,
    modesInSync = false,
  }: {
    property: ColorProperty;
    color: string;
    modesInSync?: boolean;
  }) => {
    const isValidPastedColor = isValidColor(color);
    if (!isValidPastedColor) return;

    // Update both modes
    if (modesInSync) {
      return setConfig((prev) => {
        return {
          ...prev,
          themeObject: {
            ...prev.themeObject,
            light: {
              ...prev.themeObject.light,
              [property]: color,
            },
            dark: {
              ...prev.themeObject.dark,
              [property]: color,
            },
          },
        };
      });
    }

    // Only update the current mode
    setConfig((prev) => {
      return {
        ...prev,
        themeObject: {
          ...prev.themeObject,
          [mode]: {
            ...prev.themeObject[mode],
            [property]: color,
          },
        },
      };
    });
  };

  const setColorTokenWithForeground = ({
    property,
    bgColor,
    fgColor,
    modesInSync = false,
  }: {
    property: ColorProperty;
    bgColor: OklchValue | string;
    fgColor: OklchValue | string;
    modesInSync?: boolean;
  }) => {
    const isValidPastedColor = isValidColor(bgColor);
    if (!isValidPastedColor) return;

    const optimalFgColor = getOptimalForegroundColor(fgColor, bgColor);
    const propertyForeground =
      property === "background" ? "foreground" : property + "-foreground";

    // Update both modes
    if (modesInSync) {
      return setConfig((prev) => {
        return {
          ...prev,
          themeObject: {
            ...prev.themeObject,
            light: {
              ...prev.themeObject.light,
              [property]: bgColor,
              [propertyForeground]: optimalFgColor,
            },
            dark: {
              ...prev.themeObject.dark,
              [property]: bgColor,
              [propertyForeground]: optimalFgColor,
            },
          },
        };
      });
    }

    // Only update the current mode
    setConfig((prev) => {
      return {
        ...prev,
        themeObject: {
          ...prev.themeObject,
          [mode]: {
            ...prev.themeObject[mode],
            [property]: bgColor,
            [propertyForeground]: optimalFgColor,
          },
        },
      };
    });
  };

  const setPrimaryColorTokens = ({
    color: color,
    modesInSync = false,
  }: {
    color: string | OklchValue;
    modesInSync?: boolean;
  }) => {
    const isValidPastedColor = isValidColor(color);
    if (!isValidPastedColor) return;

    const primaryFgColor = getColorToken({
      property: "primary-foreground",
    });

    const optimalFgColor = getOptimalForegroundColor(primaryFgColor, color);

    // Update both modes
    if (modesInSync) {
      return setConfig((prev) => {
        return {
          ...prev,
          themeObject: {
            ...prev.themeObject,
            light: {
              ...prev.themeObject.light,
              primary: color,
              "primary-foreground": optimalFgColor,
              ring: color,
              "sidebar-primary": color,
              "sidebar-primary-foreground": optimalFgColor,
              "sidebar-ring": color,
            },
            dark: {
              ...prev.themeObject.dark,
              primary: color,
              "primary-foreground": optimalFgColor,
              ring: color,
              "sidebar-primary": color,
              "sidebar-primary-foreground": optimalFgColor,
              "sidebar-ring": color,
            },
          },
        };
      });
    }

    // Only update the current mode
    setConfig((prev) => {
      return {
        ...prev,
        themeObject: {
          ...prev.themeObject,
          [mode]: {
            ...prev.themeObject[mode],
            primary: color,
            "primary-foreground": optimalFgColor,
            ring: color,
            "sidebar-primary": color,
            "sidebar-primary-foreground": optimalFgColor,
            "sidebar-ring": color,
          },
        },
      };
    });
  };

  const setSurfaceShadesColorTokens = ({
    bgShadesThemeObject,
    modesInSync = false,
  }: {
    bgShadesThemeObject: SurfaceShadesThemeObject;
    modesInSync?: boolean;
  }) => {
    // Update both modes
    if (modesInSync) {
      return setConfig((prev) => {
        return {
          ...prev,
          surface: bgShadesThemeObject.name,
          themeObject: {
            ...prev.themeObject,
            light: {
              ...prev.themeObject.light,
              ...bgShadesThemeObject.light,
            },
            dark: {
              ...prev.themeObject.dark,
              ...bgShadesThemeObject.dark,
            },
          },
        };
      });
    }

    // Only update the current mode
    setConfig((prev) => {
      return {
        ...prev,
        surface: bgShadesThemeObject.name,
        themeObject: {
          ...prev.themeObject,
          [mode]: {
            ...prev.themeObject[mode],
            ...bgShadesThemeObject[mode],
          },
        },
      };
    });
  };

  const getActiveSurfaceShades = useCallback(() => {
    const surface = config?.surface ?? "default";
    const surfaceShadesThemeObject = Object.values(surfaceShadesPresets).find(
      (theme) => theme.name === surface,
    );
    return surfaceShadesThemeObject;
  }, [config.surface]);

  return {
    getToken,
    setToken,
    getColorToken,
    setColorToken,
    setColorTokenWithForeground,
    setPrimaryColorTokens,
    setSurfaceShadesColorTokens,
    getActiveSurfaceShades,
    getActiveThemeColorToken,
    createTokenGetterForPreset,
  };
}
