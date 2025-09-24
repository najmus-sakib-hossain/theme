import { initialThemeConfig } from "@/lib/themes";
import { ThemeConfig } from "@/types/theme";
import { LOCAL_STORAGE_KEYS } from "@/utils/constants";
import { useAtom } from "jotai/react";
import { atomWithStorage } from "jotai/utils";

// Function to migrate old theme config
function migrateThemeConfig(config: ThemeConfig): ThemeConfig {
  const newThemeObject = { ...config.themeObject };
  if (newThemeObject.light && !newThemeObject.clear) {
    newThemeObject.clear = newThemeObject.light;
    delete newThemeObject.light;
  }
  if (newThemeObject.dark && !newThemeObject.tinted) {
    newThemeObject.tinted = newThemeObject.dark;
    delete newThemeObject.dark;
  }
  return {
    ...config,
    themeObject: newThemeObject,
  };
}

const initialConfigAtom = atomWithStorage<ThemeConfig>(
  LOCAL_STORAGE_KEYS.themeConfig,
  initialThemeConfig,
  {
    getItem: (key, defaultValue) => {
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          return migrateThemeConfig(parsed);
        } catch {
          return defaultValue;
        }
      }
      return defaultValue;
    },
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: (key) => {
      localStorage.removeItem(key);
    },
  },
);

export function useConfig() {
  return useAtom(initialConfigAtom);
}
