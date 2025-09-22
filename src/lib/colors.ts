import { monoFonts, sansFonts } from "@/utils/fonts";
import {
  ColorfulPreset,
  PresetV4,
  SurfaceShadesPreset,
  SurfaceShadesThemeObject,
  ThemeObject,
} from "../types/theme";
import { otherPresets } from "./presets";

// ===> Tailwind V4
export const basePresetsV4: Record<PresetV4, ThemeObject> = {
  neutral: {
    name: "neutral",
    label: "Neutral",
    fonts: {
      sans: sansFonts.Geist.value,
      mono: monoFonts["Geist Mono"].value,
    },
    light: {
      background: "oklch(1 0 0)", // --color-white (closest to neutral-50)
      foreground: "oklch(0.145 0 0)", // --color-neutral-950
      card: "oklch(1 0 0)", // --color-white (closest to neutral-50)
      "card-foreground": "oklch(0.145 0 0)", // --color-neutral-950
      popover: "oklch(1 0 0)", // --color-white (closest to neutral-50)
      "popover-foreground": "oklch(0.145 0 0)", // --color-neutral-950
      primary: "oklch(0.205 0 0)", // --color-neutral-900
      "primary-foreground": "oklch(0.985 0 0)", // --color-neutral-50
      secondary: "oklch(0.97 0 0)", // --color-neutral-100
      "secondary-foreground": "oklch(0.205 0 0)", // --color-neutral-900
      muted: "oklch(0.97 0 0)", // --color-neutral-100
      "muted-foreground": "oklch(0.556 0 0)", // --color-neutral-500
      accent: "oklch(0.97 0 0)", // --color-neutral-100
      "accent-foreground": "oklch(0.205 0 0)", // --color-neutral-900
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.922 0 0)", // --color-neutral-200
      input: "oklch(0.922 0 0)", // --color-neutral-200
      ring: "oklch(0.708 0 0)", // --color-neutral-400
      "chart-1": "oklch(0.81 0.10 252)", // --color-blue-300
      "chart-2": "oklch(0.62 0.19 260)", // --color-blue-500
      "chart-3": "oklch(0.55 0.22 263)", // --color-blue-600
      "chart-4": "oklch(0.49 0.22 264)", // --color-blue-700
      "chart-5": "oklch(0.42 0.18 266)", // --color-blue-800
      sidebar: "oklch(0.985 0 0)", // --color-neutral-50
      "sidebar-foreground": "oklch(0.145 0 0)", // --color-neutral-950
      "sidebar-primary": "oklch(0.205 0 0)", // --color-neutral-900
      "sidebar-primary-foreground": "oklch(0.985 0 0)", // --color-neutral-50
      "sidebar-accent": "oklch(0.97 0 0)", // --color-neutral-100
      "sidebar-accent-foreground": "oklch(0.205 0 0)", // --color-neutral-900
      "sidebar-border": "oklch(0.922 0 0)", // --color-neutral-200
      "sidebar-ring": "oklch(0.708 0 0)", // --color-neutral-400
    },
    dark: {
      background: "oklch(0.145 0 0)", // --color-neutral-950
      foreground: "oklch(0.985 0 0)", // --color-neutral-50
      card: "oklch(0.205 0 0)", // --color-neutral-900
      "card-foreground": "oklch(0.985 0 0)", // --color-neutral-50
      popover: "oklch(0.269 0 0)", // --color-neutral-800
      "popover-foreground": "oklch(0.985 0 0)", // --color-neutral-50
      primary: "oklch(0.922 0 0)", // --color-neutral-200
      "primary-foreground": "oklch(0.205 0 0)", // --color-neutral-900
      secondary: "oklch(0.269 0 0)", // --color-neutral-800
      "secondary-foreground": "oklch(0.985 0 0)", // --color-neutral-50
      muted: "oklch(0.269 0 0)", // --color-neutral-800
      "muted-foreground": "oklch(0.708 0 0)", // --color-neutral-400
      accent: "oklch(0.371 0 0)", // --color-neutral-700
      "accent-foreground": "oklch(0.985 0 0)", // --color-neutral-50
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400
      "destructive-foreground": "oklch(0.145 0 0)", // --color-neutral-950
      border: "oklch(1 0 0 / 10%)", // --color-white/10%
      input: "oklch(1 0 0 / 15%)", // --color-white/15%
      ring: "oklch(0.556 0 0)", // --color-neutral-500
      "chart-1": "oklch(0.81 0.10 252)", // --color-blue-300
      "chart-2": "oklch(0.62 0.19 260)", // --color-blue-500
      "chart-3": "oklch(0.55 0.22 263)", // --color-blue-600
      "chart-4": "oklch(0.49 0.22 264)", // --color-blue-700
      "chart-5": "oklch(0.42 0.18 266)", // --color-blue-800
      sidebar: "oklch(0.205 0 0)", // --color-neutral-900
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-neutral-50
      "sidebar-primary": "oklch(0.488 0.243 264.376)", // --color-blue-700
      "sidebar-primary-foreground": "oklch(0.985 0 0)", // --color-neutral-50
      "sidebar-accent": "oklch(0.269 0 0)", // --color-neutral-800
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-neutral-50
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white/10%
      "sidebar-ring": "oklch(0.439 0 0)", // --color-neutral-600
    },
  },
  zinc: {
    name: "zinc",
    label: "Zinc",
    fonts: {
      sans: sansFonts.Geist.value,
      mono: monoFonts["Geist Mono"].value,
    },
    light: {
      background: "oklch(1 0 0)", // --color-white (closest to zinc-50)
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950
      card: "oklch(1 0 0)", // --color-white (closest to zinc-50)
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950
      popover: "oklch(1 0 0)", // --color-white (closest to zinc-50)
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950
      primary: "oklch(0.21 0.006 285.885)", // --color-zinc-900
      "primary-foreground": "oklch(0.985 0 0)", // --color-zinc-50
      secondary: "oklch(0.967 0.001 286.375)", // --color-zinc-100
      "secondary-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900
      muted: "oklch(0.967 0.001 286.375)", // --color-zinc-100
      "muted-foreground": "oklch(0.552 0.016 285.938)", // --color-zinc-500
      accent: "oklch(0.967 0.001 286.375)", // --color-zinc-100
      "accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.92 0.004 286.32)", // --color-zinc-200
      input: "oklch(0.92 0.004 286.32)", // --color-zinc-200
      ring: "oklch(0.705 0.015 286.067)", // --color-zinc-400
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500
      sidebar: "oklch(0.985 0 0)", // --color-zinc-50
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950
      "sidebar-primary": "oklch(0.21 0.006 285.885)", // --color-zinc-900
      "sidebar-primary-foreground": "oklch(0.985 0 0)", // --color-zinc-50
      "sidebar-accent": "oklch(0.967 0.001 286.375)", // --color-zinc-100
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900
      "sidebar-border": "oklch(0.92 0.004 286.32)", // --color-zinc-200
      "sidebar-ring": "oklch(0.705 0.015 286.067)", // --color-zinc-400
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)", // --color-zinc-950
      foreground: "oklch(0.985 0 0)", // --color-zinc-50
      card: "oklch(0.21 0.006 285.885)", // --color-zinc-900
      "card-foreground": "oklch(0.985 0 0)", // --color-zinc-50
      popover: "oklch(0.21 0.006 285.885)", // --color-zinc-900
      "popover-foreground": "oklch(0.985 0 0)", // --color-zinc-50
      primary: "oklch(0.92 0.004 286.32)", // --color-zinc-200
      "primary-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900
      secondary: "oklch(0.274 0.006 286.033)", // --color-zinc-800
      "secondary-foreground": "oklch(0.985 0 0)", // --color-zinc-50
      muted: "oklch(0.274 0.006 286.033)", // --color-zinc-800
      "muted-foreground": "oklch(0.705 0.015 286.067)", // --color-zinc-400
      accent: "oklch(0.274 0.006 286.033)", // --color-zinc-800
      "accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400
      "destructive-foreground": "oklch(0.145 0 0)", // --color-neutral-950
      border: "oklch(1 0 0 / 10%)", // --color-white
      input: "oklch(1 0 0 / 15%)", // --color-white
      ring: "oklch(0.552 0.016 285.938)", // --color-zinc-500
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500
      sidebar: "oklch(0.21 0.006 285.885)", // --color-zinc-900
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-zinc-50
      "sidebar-primary": "oklch(0.488 0.243 264.376)", // --color-blue-700
      "sidebar-primary-foreground": "oklch(0.985 0 0)", // --color-zinc-50
      "sidebar-accent": "oklch(0.274 0.006 286.033)", // --color-zinc-800
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white
      "sidebar-ring": "oklch(0.552 0.016 285.938)", // --color-zinc-500
    },
  },
  stone: {
    name: "stone",
    label: "Stone",
    fonts: {
      sans: sansFonts.Geist.value,
      mono: monoFonts["Geist Mono"].value,
    },
    light: {
      background: "oklch(1 0 0)", // --color-white (closest to slate-50)
      foreground: "oklch(0.147 0.004 49.25)", // --color-stone-950
      card: "oklch(1 0 0)", // --color-white (closest to slate-50)
      "card-foreground": "oklch(0.147 0.004 49.25)", // --color-stone-950
      popover: "oklch(1 0 0)", // --color-white (closest to slate-50)
      "popover-foreground": "oklch(0.147 0.004 49.25)", // --color-stone-950
      primary: "oklch(0.216 0.006 56.043)", // --color-stone-900
      "primary-foreground": "oklch(0.985 0.001 106.423)", // --color-stone-50
      secondary: "oklch(0.97 0.001 106.424)", // --color-stone-100
      "secondary-foreground": "oklch(0.216 0.006 56.043)", // --color-stone-900
      muted: "oklch(0.97 0.001 106.424)", // --color-stone-100
      "muted-foreground": "oklch(0.553 0.013 58.071)", // --color-stone-500
      accent: "oklch(0.97 0.001 106.424)", // --color-stone-100
      "accent-foreground": "oklch(0.216 0.006 56.043)", // --color-stone-900
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.923 0.003 48.717)", // --color-stone-200
      input: "oklch(0.923 0.003 48.717)", // --color-stone-200
      ring: "oklch(0.709 0.01 56.259)", // --color-stone-400
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500
      sidebar: "oklch(0.985 0.001 106.423)", // --color-stone-50
      "sidebar-foreground": "oklch(0.147 0.004 49.25)", // --color-stone-950
      "sidebar-primary": "oklch(0.216 0.006 56.043)", // --color-stone-900
      "sidebar-primary-foreground": "oklch(0.985 0.001 106.423)", // --color-stone-50
      "sidebar-accent": "oklch(0.97 0.001 106.424)", // --color-stone-100
      "sidebar-accent-foreground": "oklch(0.216 0.006 56.043)", // --color-stone-900
      "sidebar-border": "oklch(0.923 0.003 48.717)", // --color-stone-200
      "sidebar-ring": "oklch(0.709 0.01 56.259)", // --color-stone-400
    },
    dark: {
      background: "oklch(0.147 0.004 49.25)", // --color-stone-950
      foreground: "oklch(0.985 0.001 106.423)", // --color-stone-50
      card: "oklch(0.216 0.006 56.043)", // --color-stone-900
      "card-foreground": "oklch(0.985 0.001 106.423)", // --color-stone-50
      popover: "oklch(0.216 0.006 56.043)", // --color-stone-900
      "popover-foreground": "oklch(0.985 0.001 106.423)", // --color-stone-50
      primary: "oklch(0.923 0.003 48.717)", // --color-stone-200
      "primary-foreground": "oklch(0.216 0.006 56.043)", // --color-stone-900
      secondary: "oklch(0.268 0.007 34.298)", // --color-stone-800
      "secondary-foreground": "oklch(0.985 0.001 106.423)", // --color-stone-50
      muted: "oklch(0.268 0.007 34.298)", // --color-stone-800
      "muted-foreground": "oklch(0.709 0.01 56.259)", // --color-stone-400
      accent: "oklch(0.268 0.007 34.298)", // --color-stone-800
      "accent-foreground": "oklch(0.985 0.001 106.423)", // --color-stone-50
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-500
      "destructive-foreground": "oklch(0.145 0 0)", // --color-neutral-950
      border: "oklch(1 0 0 / 10%)", // --color-white
      input: "oklch(1 0 0 / 15%)", // --color-white
      ring: "oklch(0.553 0.013 58.071)", // --color-stone-500
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500
      sidebar: "oklch(0.216 0.006 56.043)", // --color-stone-900
      "sidebar-foreground": "oklch(0.985 0.001 106.423)", // --color-stone-50
      "sidebar-primary": "oklch(0.488 0.243 264.376)", // --color-blue-700
      "sidebar-primary-foreground": "oklch(0.985 0.001 106.423)", // --color-stone-50
      "sidebar-accent": "oklch(0.268 0.007 34.298)", // --color-stone-800
      "sidebar-accent-foreground": "oklch(0.985 0.001 106.423)", // --color-stone-50
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white
      "sidebar-ring": "oklch(0.553 0.013 58.071)", // --color-stone-500
    },
  },
  gray: {
    name: "gray",
    label: "Gray",
    fonts: {
      sans: sansFonts.Geist.value,
      mono: monoFonts["Geist Mono"].value,
    },
    light: {
      background: "oklch(1 0 0)", // --color-white (closest to gray-50)
      foreground: "oklch(0.13 0.028 261.692)", // --color-gray-950
      card: "oklch(1 0 0)", // --color-white (closest to gray-50)
      "card-foreground": "oklch(0.13 0.028 261.692)", // --color-gray-950
      popover: "oklch(1 0 0)", // --color-white (closest to gray-50)
      "popover-foreground": "oklch(0.13 0.028 261.692)", // --color-gray-950
      primary: "oklch(0.21 0.034 264.665)", // --color-gray-900
      "primary-foreground": "oklch(0.985 0.002 247.839)", // --color-gray-50
      secondary: "oklch(0.967 0.003 264.542)", // --color-gray-100
      "secondary-foreground": "oklch(0.21 0.034 264.665)", // --color-gray-900
      muted: "oklch(0.967 0.003 264.542)", // --color-gray-100
      "muted-foreground": "oklch(0.551 0.027 264.364)", // --color-gray-500
      accent: "oklch(0.967 0.003 264.542)", // --color-gray-100
      "accent-foreground": "oklch(0.21 0.034 264.665)", // --color-gray-900
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.928 0.006 264.531)", // --color-gray-200
      input: "oklch(0.928 0.006 264.531)", // --color-gray-200
      ring: "oklch(0.707 0.022 261.325)", // --color-gray-400
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500
      sidebar: "oklch(0.985 0.002 247.839)", // --color-gray-50
      "sidebar-foreground": "oklch(0.13 0.028 261.692)", // --color-gray-950
      "sidebar-primary": "oklch(0.21 0.034 264.665)", // --color-gray-900
      "sidebar-primary-foreground": "oklch(0.985 0.002 247.839)", // --color-gray-50
      "sidebar-accent": "oklch(0.967 0.003 264.542)", // --color-gray-100
      "sidebar-accent-foreground": "oklch(0.21 0.034 264.665)", // --color-gray-900
      "sidebar-border": "oklch(0.928 0.006 264.531)", // --color-gray-200
      "sidebar-ring": "oklch(0.707 0.022 261.325)", // --color-gray-400
    },
    dark: {
      background: "oklch(0.13 0.028 261.692)", // --color-gray-950
      foreground: "oklch(0.985 0.002 247.839)", // --color-gray-50
      card: "oklch(0.21 0.034 264.665)", // --color-gray-900
      "card-foreground": "oklch(0.985 0.002 247.839)", // --color-gray-50
      popover: "oklch(0.21 0.034 264.665)", // --color-gray-900
      "popover-foreground": "oklch(0.985 0.002 247.839)", // --color-gray-50
      primary: "oklch(0.928 0.006 264.531)", // --color-gray-200
      "primary-foreground": "oklch(0.21 0.034 264.665)", // --color-gray-900
      secondary: "oklch(0.278 0.033 256.848)", // --color-gray-800
      "secondary-foreground": "oklch(0.985 0.002 247.839)", // --color-gray-50
      muted: "oklch(0.278 0.033 256.848)", // --color-gray-800
      "muted-foreground": "oklch(0.707 0.022 261.325)", // --color-gray-400
      accent: "oklch(0.278 0.033 256.848)", // --color-gray-800
      "accent-foreground": "oklch(0.985 0.002 247.839)", // --color-gray-50
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400
      "destructive-foreground": "oklch(0.145 0 0)", // --color-neutral-950
      border: "oklch(1 0 0 / 10%)", // --color-white
      input: "oklch(1 0 0 / 15%)", // --color-white
      ring: "oklch(0.551 0.027 264.364)", // --color-gray-500
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500
      sidebar: "oklch(0.21 0.034 264.665)", // --color-gray-900
      "sidebar-foreground": "oklch(0.985 0.002 247.839)", // --color-gray-50
      "sidebar-primary": "oklch(0.488 0.243 264.376)", // --color-blue-700
      "sidebar-primary-foreground": "oklch(0.985 0.002 247.839)", // --color-gray-50
      "sidebar-accent": "oklch(0.278 0.033 256.848)", // --color-gray-800
      "sidebar-accent-foreground": "oklch(0.985 0.002 247.839)", // --color-gray-50
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white
      "sidebar-ring": "oklch(0.551 0.027 264.364)", // --color-gray-500
    },
  },
  slate: {
    name: "slate",
    label: "Slate",
    fonts: {
      sans: sansFonts.Geist.value,
      mono: monoFonts["Geist Mono"].value,
    },
    light: {
      background: "oklch(1 0 0)", // --color-white (closest to slate-50)
      foreground: "oklch(0.129 0.042 264.695)", // --color-slate-950
      card: "oklch(1 0 0)", // --color-white (closest to slate-50)
      "card-foreground": "oklch(0.129 0.042 264.695)", // --color-slate-950
      popover: "oklch(1 0 0)", // --color-white (closest to slate-50)
      "popover-foreground": "oklch(0.129 0.042 264.695)", // --color-slate-950
      primary: "oklch(0.208 0.042 265.755)", // --color-slate-900
      "primary-foreground": "oklch(0.984 0.003 247.858)", // --color-slate-50
      secondary: "oklch(0.968 0.007 247.896)", // --color-slate-100
      "secondary-foreground": "oklch(0.208 0.042 265.755)", // --color-slate-900
      muted: "oklch(0.968 0.007 247.896)", // --color-slate-100
      "muted-foreground": "oklch(0.554 0.046 257.417)", // --color-slate-500
      accent: "oklch(0.968 0.007 247.896)", // --color-slate-100
      "accent-foreground": "oklch(0.208 0.042 265.755)", // --color-slate-900
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.929 0.013 255.508)", // --color-slate-200
      input: "oklch(0.929 0.013 255.508)", // --color-slate-200
      ring: "oklch(0.704 0.04 256.788)", // --color-slate-400
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500
      sidebar: "oklch(0.984 0.003 247.858)", // --color-slate-50
      "sidebar-foreground": "oklch(0.129 0.042 264.695)", // --color-slate-950
      "sidebar-primary": "oklch(0.208 0.042 265.755)", // --color-slate-900
      "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)", // --color-slate-50
      "sidebar-accent": "oklch(0.968 0.007 247.896)", // --color-slate-100
      "sidebar-accent-foreground": "oklch(0.208 0.042 265.755)", // --color-slate-900
      "sidebar-border": "oklch(0.929 0.013 255.508)", // --color-slate-200
      "sidebar-ring": "oklch(0.704 0.04 256.788)", // --color-slate-400
    },
    dark: {
      background: "oklch(0.129 0.042 264.695)", // --color-slate-950
      foreground: "oklch(0.984 0.003 247.858)", // --color-slate-50
      card: "oklch(0.208 0.042 265.755)", // --color-slate-900
      "card-foreground": "oklch(0.984 0.003 247.858)", // --color-slate-50
      popover: "oklch(0.208 0.042 265.755)", // --color-slate-900
      "popover-foreground": "oklch(0.984 0.003 247.858)", // --color-slate-50
      primary: "oklch(0.929 0.013 255.508)", // --color-slate-200
      "primary-foreground": "oklch(0.208 0.042 265.755)", // --color-slate-900
      secondary: "oklch(0.279 0.041 260.031)", // --color-slate-800
      "secondary-foreground": "oklch(0.984 0.003 247.858)", // --color-slate-50
      muted: "oklch(0.279 0.041 260.031)", // --color-slate-800
      "muted-foreground": "oklch(0.704 0.04 256.788)", // --color-slate-400
      accent: "oklch(0.279 0.041 260.031)", // --color-slate-800
      "accent-foreground": "oklch(0.984 0.003 247.858)", // --color-slate-50
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400
      "destructive-foreground": "oklch(0.145 0 0)", // --color-neutral-950
      border: "oklch(1 0 0 / 10%)", // --color-white
      input: "oklch(1 0 0 / 15%)", // --color-white
      ring: "oklch(0.551 0.027 264.364)", // --color-slate-500
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500
      sidebar: "oklch(0.208 0.042 265.755)", // --color-slate-900
      "sidebar-foreground": "oklch(0.984 0.003 247.858)", // --color-slate-50
      "sidebar-primary": "oklch(0.488 0.243 264.376)", // --color-blue-700
      "sidebar-primary-foreground": "oklch(0.984 0.003 247.858)", // --color-slate-50
      "sidebar-accent": "oklch(0.279 0.041 260.031)", // --color-slate-800
      "sidebar-accent-foreground": "oklch(0.984 0.003 247.858)", // --color-slate-50
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white
      "sidebar-ring": "oklch(0.551 0.027 264.364)", // --color-slate-500
    },
  },
} as const;

export const basePresetsV4Array = Object.values(basePresetsV4);

// ===> Presets based on Shadcn website for TailwindCSS V4 (✅Red, ✅Rose, ✅Orange, ✅Green, ✅Blue, ✅Yellow, ✅Violet)
export const colorfulPresets: Record<ColorfulPreset, ThemeObject> = {
  red: {
    name: "red",
    label: "Red",
    light: {
      background: "oklch(1 0 0)", // --color-white
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      card: "oklch(1 0 0)", // --color-white
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      popover: "oklch(1 0 0)", // --color-white
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      primary: "oklch(0.637 0.237 25.331)", // --color-red-500 (approx HSL 0 72.2% 50.6%)
      "primary-foreground": "oklch(0.971 0.013 17.38)", // --color-red-50 (approx HSL 0 85.7% 97.3%)
      secondary: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "secondary-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      muted: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "muted-foreground": "oklch(0.552 0.016 285.938)", // --color-zinc-500 (from zinc)
      accent: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600 (from zinc)
      "destructive-foreground": "oklch(1 0 0)", // --color-white (from zinc)
      border: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      input: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      ring: "oklch(0.637 0.237 25.331)", // --color-red-500 (approx HSL 0 72.2% 50.6%)
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600 (from zinc)
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600 (from zinc)
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900 (from zinc)
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400 (from zinc)
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      sidebar: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      "sidebar-primary": "oklch(0.637 0.237 25.331)", // --color-red-500 (approx HSL 0 72.2% 50.6%)
      "sidebar-primary-foreground": "oklch(0.971 0.013 17.38)", // --color-red-50 (approx HSL 0 85.7% 97.3%)
      "sidebar-accent": "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-border": "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      "sidebar-ring": "oklch(0.637 0.237 25.331)", // --color-red-500 (approx HSL 0 72.2% 50.6%)
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      foreground: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      card: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "card-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      popover: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "popover-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      primary: "oklch(0.637 0.237 25.331)", // --color-red-500 (approx HSL 0 72.2% 50.6%)
      "primary-foreground": "oklch(0.971 0.013 17.38)", // --color-red-50 (approx HSL 0 85.7% 97.3%)
      secondary: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "secondary-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      muted: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "muted-foreground": "oklch(0.705 0.015 286.067)", // --color-zinc-400 (from zinc)
      accent: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400 (from zinc)
      "destructive-foreground": "oklch(0.145 0 0)", // --color-neutral-950 (from zinc)
      border: "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      input: "oklch(1 0 0 / 15%)", // --color-white (from zinc)
      ring: "oklch(0.637 0.237 25.331)", // --color-red-500 (approx HSL 0 72.2% 50.6%)
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700 (from zinc)
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500 (from zinc)
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500 (from zinc)
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500 (from zinc)
      sidebar: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-primary": "oklch(0.637 0.237 25.331)", // --color-red-500 (approx HSL 0 72.2% 50.6%)
      "sidebar-primary-foreground": "oklch(0.971 0.013 17.38)", // --color-red-50 (approx HSL 0 85.7% 97.3%)
      "sidebar-accent": "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      "sidebar-ring": "oklch(0.637 0.237 25.331)", // --color-red-500 (approx HSL 0 72.2% 50.6%)
    },
  },
  rose: {
    name: "rose",
    label: "Rose",
    light: {
      background: "oklch(1 0 0)", // --color-white
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      card: "oklch(1 0 0)", // --color-white
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      popover: "oklch(1 0 0)", // --color-white
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      primary: "oklch(0.645 0.246 16.439)", // --color-rose-500 (approx HSL 346.8 77.2% 49.8%)
      "primary-foreground": "oklch(0.969 0.015 12.422)", // --color-rose-50 (approx HSL 355.7 100% 97.3%)
      secondary: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "secondary-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      muted: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "muted-foreground": "oklch(0.552 0.016 285.938)", // --color-zinc-500 (from zinc)
      accent: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600 (from zinc)
      border: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      "destructive-foreground": "oklch(1 0 0)", // color-white
      input: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      ring: "oklch(0.645 0.246 16.439)", // --color-rose-500 (approx HSL 346.8 77.2% 49.8%)
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600 (from zinc)
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600 (from zinc)
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900 (from zinc)
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400 (from zinc)
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      sidebar: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      "sidebar-primary": "oklch(0.645 0.246 16.439)", // --color-rose-500 (approx HSL 346.8 77.2% 49.8%)
      "sidebar-primary-foreground": "oklch(0.969 0.015 12.422)", // --color-rose-50 (approx HSL 355.7 100% 97.3%)
      "sidebar-accent": "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-border": "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      "sidebar-ring": "oklch(0.645 0.246 16.439)", // --color-rose-500 (approx HSL 346.8 77.2% 49.8%)
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      foreground: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      card: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "card-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      popover: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "popover-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      primary: "oklch(0.645 0.246 16.439)", // --color-rose-500 (approx HSL 346.8 77.2% 49.8%)
      "primary-foreground": "oklch(0.969 0.015 12.422)", // --color-rose-50 (approx HSL 355.7 100% 97.3%)
      secondary: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "secondary-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      muted: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "muted-foreground": "oklch(0.705 0.015 286.067)", // --color-zinc-400 (from zinc)
      accent: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400 (from zinc)
      "destructive-foreground": "oklch(0 0 0)", // color-black
      border: "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      input: "oklch(1 0 0 / 15%)", // --color-white (from zinc)
      ring: "oklch(0.645 0.246 16.439)", // --color-rose-500 (approx HSL 346.8 77.2% 49.8%)
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700 (from zinc)
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500 (from zinc)
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500 (from zinc)
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500 (from zinc)
      sidebar: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-primary": "oklch(0.645 0.246 16.439)", // --color-rose-500 (approx HSL 346.8 77.2% 49.8%)
      "sidebar-primary-foreground": "oklch(0.969 0.015 12.422)", // --color-rose-50 (approx HSL 355.7 100% 97.3%)
      "sidebar-accent": "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      "sidebar-ring": "oklch(0.645 0.246 16.439)", // --color-rose-500 (approx HSL 346.8 77.2% 49.8%)
    },
  },
  orange: {
    name: "orange",
    label: "Orange",
    light: {
      background: "oklch(1 0 0)", // --color-white
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      card: "oklch(1 0 0)", // --color-white
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      popover: "oklch(1 0 0)", // --color-white
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      primary: "oklch(0.705 0.213 47.604)", // --color-orange-500 (approx HSL 24.6 95% 53.1%)
      "primary-foreground": "oklch(0.98 0.016 73.684)", // --color-orange-50 (approx HSL 60 9.1% 97.8%)
      secondary: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "secondary-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      muted: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "muted-foreground": "oklch(0.552 0.016 285.938)", // --color-zinc-500 (from zinc)
      accent: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600 (from zinc)
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      input: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      ring: "oklch(0.705 0.213 47.604)", // --color-orange-500 (approx HSL 24.6 95% 53.1%)
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600 (from zinc)
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600 (from zinc)
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900 (from zinc)
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400 (from zinc)
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      sidebar: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      "sidebar-primary": "oklch(0.705 0.213 47.604)", // --color-orange-500 (approx HSL 24.6 95% 53.1%)
      "sidebar-primary-foreground": "oklch(0.98 0.016 73.684)", // --color-orange-50 (approx HSL 60 9.1% 97.8%)
      "sidebar-accent": "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-border": "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      "sidebar-ring": "oklch(0.705 0.213 47.604)", // --color-orange-500 (approx HSL 24.6 95% 53.1%)
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      foreground: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      card: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "card-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      popover: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "popover-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      primary: "oklch(0.646 0.222 41.116)", // --color-orange-600 (approx HSL 20.5 90.2% 48.2%)
      "primary-foreground": "oklch(0.98 0.016 73.684)", // --color-orange-50 (approx HSL 60 9.1% 97.8%)
      secondary: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "secondary-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      muted: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "muted-foreground": "oklch(0.705 0.015 286.067)", // --color-zinc-400 (from zinc)
      accent: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400 (from zinc)
      "destructive-foreground": "oklch(0 0 0)", // color-black
      border: "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      input: "oklch(1 0 0 / 15%)", // --color-white (from zinc)
      ring: "oklch(0.646 0.222 41.116)", // --color-orange-600 (approx HSL 20.5 90.2% 48.2%)
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700 (from zinc)
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500 (from zinc)
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500 (from zinc)
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500 (from zinc)
      sidebar: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-primary": "oklch(0.646 0.222 41.116)", // --color-orange-600 (approx HSL 20.5 90.2% 48.2%)
      "sidebar-primary-foreground": "oklch(0.98 0.016 73.684)", // --color-orange-50 (approx HSL 60 9.1% 97.8%)
      "sidebar-accent": "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      "sidebar-ring": "oklch(0.646 0.222 41.116)", // --color-orange-600 (approx HSL 20.5 90.2% 48.2%)
    },
  },
  green: {
    name: "green",
    label: "Green",
    light: {
      background: "oklch(1 0 0)", // --color-white
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      card: "oklch(1 0 0)", // --color-white
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      popover: "oklch(1 0 0)", // --color-white
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      primary: "oklch(0.723 0.219 149.579)", // --color-green-500 (approx HSL 142.1 76.2% 36.3%)
      "primary-foreground": "oklch(0.982 0.018 155.826)", // --color-green-50 (approx HSL 355.7 100% 97.3%)
      secondary: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "secondary-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      muted: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "muted-foreground": "oklch(0.552 0.016 285.938)", // --color-zinc-500 (from zinc)
      accent: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600 (from zinc)
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      input: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      ring: "oklch(0.723 0.219 149.579)", // --color-green-500 (approx HSL 142.1 76.2% 36.3%)
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600 (from zinc)
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600 (from zinc)
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900 (from zinc)
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400 (from zinc)
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      sidebar: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      "sidebar-primary": "oklch(0.723 0.219 149.579)", // --color-green-500 (approx HSL 142.1 76.2% 36.3%)
      "sidebar-primary-foreground": "oklch(0.982 0.018 155.826)", // --color-green-50 (approx HSL 355.7 100% 97.3%)
      "sidebar-accent": "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-border": "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      "sidebar-ring": "oklch(0.723 0.219 149.579)", // --color-green-500 (approx HSL 142.1 76.2% 36.3%)
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      foreground: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      card: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "card-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      popover: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "popover-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      primary: "oklch(0.696 0.17 162.48)", // --color-emerald-500 (approx HSL 142.1 70.6% 45.3%)
      "primary-foreground": "oklch(0.266 0.065 152.934)", // --color-green-950 (I overrode this from green-900)
      secondary: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "secondary-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      muted: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "muted-foreground": "oklch(0.705 0.015 286.067)", // --color-zinc-400 (from zinc)
      accent: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400 (from zinc)
      "destructive-foreground": "oklch(0 0 0)", // color-black
      border: "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      input: "oklch(1 0 0 / 15%)", // --color-white (from zinc)
      ring: "oklch(0.527 0.154 150.069)", // --color-green-700 (approx HSL 142.4 71.8% 29.2%)
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700 (from zinc)
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500 (from zinc)
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500 (from zinc)
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500 (from zinc)
      sidebar: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-primary": "oklch(0.696 0.17 162.48)", // --color-emerald-500 (approx HSL 142.1 70.6% 45.3%)
      "sidebar-primary-foreground": "oklch(0.266 0.065 152.934)", // --color-green-950 (I overrode this from green-900)
      "sidebar-accent": "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      "sidebar-ring": "oklch(0.527 0.154 150.069)", // --color-green-700 (approx HSL 142.4 71.8% 29.2%)
    },
  },
  blue: {
    name: "blue",
    label: "Blue",
    light: {
      background: "oklch(1 0 0)", // --color-white
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      card: "oklch(1 0 0)", // --color-white
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      popover: "oklch(1 0 0)", // --color-white
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      primary: "oklch(0.623 0.214 259.815)", // --color-blue-500 (approx HSL 221.2 83.2% 53.3%)
      "primary-foreground": "oklch(0.97 0.014 254.604)", // --color-blue-50 (approx HSL 210 40% 98%)
      secondary: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "secondary-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      muted: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "muted-foreground": "oklch(0.552 0.016 285.938)", // --color-zinc-500 (from zinc)
      accent: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600 (from zinc)
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      input: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      ring: "oklch(0.623 0.214 259.815)", // --color-blue-500 (approx HSL 221.2 83.2% 53.3%)
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600 (from zinc)
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600 (from zinc)
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900 (from zinc)
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400 (from zinc)
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      sidebar: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      "sidebar-primary": "oklch(0.623 0.214 259.815)", // --color-blue-500 (approx HSL 221.2 83.2% 53.3%)
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)", // --color-blue-50 (approx HSL 210 40% 98%)
      "sidebar-accent": "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-border": "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      "sidebar-ring": "oklch(0.623 0.214 259.815)", // --color-blue-500 (approx HSL 221.2 83.2% 53.3%)
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      foreground: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      card: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "card-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      popover: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "popover-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      primary: "oklch(0.546 0.245 262.881)", // --color-blue-600 (approx HSL 217.2 91.2% 59.8%)
      "primary-foreground": "oklch(0.97 0.014 254.604)", // --color-blue-50 (approx HSL 210 40% 98%)
      secondary: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "secondary-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      muted: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "muted-foreground": "oklch(0.705 0.015 286.067)", // --color-zinc-400 (from zinc)
      accent: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400 (from zinc)
      "destructive-foreground": "oklch(0 0 0)", // color-black
      border: "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      input: "oklch(1 0 0 / 15%)", // --color-white (from zinc)
      ring: "oklch(0.488 0.243 264.376)", // --color-blue-700 (approx HSL 224.3 76.3% 48%)
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700 (from zinc)
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500 (from zinc)
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500 (from zinc)
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500 (from zinc)
      sidebar: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-primary": "oklch(0.546 0.245 262.881)", // --color-blue-600 (approx HSL 217.2 91.2% 59.8%)
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)", // --color-blue-50 (approx HSL 210 40% 98%)
      "sidebar-accent": "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      "sidebar-ring": "oklch(0.488 0.243 264.376)", // --color-blue-700 (approx HSL 224.3 76.3% 48%)
    },
  },
  yellow: {
    name: "yellow",
    label: "Yellow",
    light: {
      background: "oklch(1 0 0)", // --color-white
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      card: "oklch(1 0 0)", // --color-white
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      popover: "oklch(1 0 0)", // --color-white
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      primary: "oklch(0.795 0.184 86.047)", // --color-yellow-500 (approx HSL 47.9 95.8% 53.1%)
      "primary-foreground": "oklch(0.286 0.066 53.813)", // --color-yellow-950 (approx HSL 26 83.3% 14.1%)
      secondary: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "secondary-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      muted: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "muted-foreground": "oklch(0.552 0.016 285.938)", // --color-zinc-500 (from zinc)
      accent: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600 (from zinc)
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      input: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      ring: "oklch(0.795 0.184 86.047)", // --color-yellow-500 (approx HSL 47.9 95.8% 53.1%)
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600 (from zinc)
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600 (from zinc)
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900 (from zinc)
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400 (from zinc)
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      sidebar: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      "sidebar-primary": "oklch(0.795 0.184 86.047)", // --color-yellow-500 (approx HSL 47.9 95.8% 53.1%)
      "sidebar-primary-foreground": "oklch(0.286 0.066 53.813)", // --color-yellow-950 (approx HSL 26 83.3% 14.1%)
      "sidebar-accent": "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-border": "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      "sidebar-ring": "oklch(0.795 0.184 86.047)", // --color-yellow-500 (approx HSL 47.9 95.8% 53.1%)
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      foreground: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      card: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "card-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      popover: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "popover-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      primary: "oklch(0.795 0.184 86.047)", // --color-yellow-500 (approx HSL 47.9 95.8% 53.1%)
      "primary-foreground": "oklch(0.286 0.066 53.813)", // --color-yellow-950 (approx HSL 26 83.3% 14.1%)
      secondary: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "secondary-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      muted: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "muted-foreground": "oklch(0.705 0.015 286.067)", // --color-zinc-400 (from zinc)
      accent: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400 (from zinc)
      "destructive-foreground": "oklch(0 0 0)", // color-black
      border: "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      input: "oklch(1 0 0 / 15%)", // --color-white (from zinc)
      ring: "oklch(0.554 0.135 66.442)", // --color-yellow-700 (approx HSL 35.5 91.7% 32.9%)
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700 (from zinc)
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500 (from zinc)
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500 (from zinc)
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500 (from zinc)
      sidebar: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-primary": "oklch(0.795 0.184 86.047)", // --color-yellow-500 (approx HSL 47.9 95.8% 53.1%)
      "sidebar-primary-foreground": "oklch(0.286 0.066 53.813)", // --color-yellow-950 (approx HSL 26 83.3% 14.1%)
      "sidebar-accent": "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      "sidebar-ring": "oklch(0.554 0.135 66.442)", // --color-yellow-700 (approx HSL 35.5 91.7% 32.9%)
    },
  },
  violet: {
    name: "violet",
    label: "Violet",
    light: {
      background: "oklch(1 0 0)", // --color-white
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      card: "oklch(1 0 0)", // --color-white
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      popover: "oklch(1 0 0)", // --color-white
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      primary: "oklch(0.606 0.25 292.717)", // --color-violet-500 (approx HSL 262.1 83.3% 57.8%)
      "primary-foreground": "oklch(0.969 0.016 293.756)", // --color-violet-50 (approx HSL 210 20% 98%)
      secondary: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "secondary-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      muted: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "muted-foreground": "oklch(0.552 0.016 285.938)", // --color-zinc-500 (from zinc)
      accent: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      destructive: "oklch(0.577 0.245 27.325)", // --color-red-600 (from zinc)
      "destructive-foreground": "oklch(1 0 0)", // color-white
      border: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      input: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      ring: "oklch(0.606 0.25 292.717)", // --color-violet-500 (approx HSL 262.1 83.3% 57.8%)
      "chart-1": "oklch(0.646 0.222 41.116)", // --color-orange-600 (from zinc)
      "chart-2": "oklch(0.6 0.118 184.704)", // --color-teal-600 (from zinc)
      "chart-3": "oklch(0.398 0.07 227.392)", // --color-cyan-900 (from zinc)
      "chart-4": "oklch(0.828 0.189 84.429)", // --color-amber-400 (from zinc)
      "chart-5": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      sidebar: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      "sidebar-primary": "oklch(0.606 0.25 292.717)", // --color-violet-500 (approx HSL 262.1 83.3% 57.8%)
      "sidebar-primary-foreground": "oklch(0.969 0.016 293.756)", // --color-violet-50 (approx HSL 210 20% 98%)
      "sidebar-accent": "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-border": "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      "sidebar-ring": "oklch(0.606 0.25 292.717)", // --color-violet-500 (approx HSL 262.1 83.3% 57.8%)
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)
      foreground: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      card: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "card-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      popover: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "popover-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      primary: "oklch(0.541 0.281 293.009)", // --color-violet-600 (approx HSL 263.4 70% 50.4%)
      "primary-foreground": "oklch(0.969 0.016 293.756)", // --color-violet-50 (approx HSL 210 20% 98%)
      secondary: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "secondary-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      muted: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "muted-foreground": "oklch(0.705 0.015 286.067)", // --color-zinc-400 (from zinc)
      accent: "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      destructive: "oklch(0.704 0.191 22.216)", // --color-red-400 (from zinc)
      "destructive-foreground": "oklch(0 0 0)", // color-black
      border: "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      input: "oklch(1 0 0 / 15%)", // --color-white (from zinc)
      ring: "oklch(0.541 0.281 293.009)", // --color-violet-600 (approx HSL 263.4 70% 50.4%)
      "chart-1": "oklch(0.488 0.243 264.376)", // --color-blue-700 (from zinc)
      "chart-2": "oklch(0.696 0.17 162.48)", // --color-emerald-500 (from zinc)
      "chart-3": "oklch(0.769 0.188 70.08)", // --color-amber-500 (from zinc)
      "chart-4": "oklch(0.627 0.265 303.9)", // --color-purple-500 (from zinc)
      "chart-5": "oklch(0.645 0.246 16.439)", // --color-rose-500 (from zinc)
      sidebar: "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-primary": "oklch(0.541 0.281 293.009)", // --color-violet-600 (approx HSL 263.4 70% 50.4%)
      "sidebar-primary-foreground": "oklch(0.969 0.016 293.756)", // --color-violet-50 (approx HSL 210 20% 98%)
      "sidebar-accent": "oklch(0.274 0.006 286.033)", // --color-zinc-800 (from zinc)
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white (from zinc)
      "sidebar-ring": "oklch(0.541 0.281 293.009)", // --color-violet-600 (approx HSL 263.4 70% 50.4%)
    },
  },
} as const;

export const colorfulPresetsArray = Object.values(colorfulPresets);

// Combination of base and colorful presets
export const allPresets = {
  ...basePresetsV4,
  ...colorfulPresets,
  ...otherPresets,
};
export const allPresetsArray = Object.values(allPresets);

export const surfaceShadesPresets: Record<
  SurfaceShadesPreset,
  SurfaceShadesThemeObject
> = {
  neutro: {
    name: "neutro",
    label: "Neutro",
    light: {
      background: "oklch(1 0 0)", // --color-white
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)

      card: "oklch(1 0 0)", // --color-white
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)

      popover: "oklch(1 0 0)", // --color-white
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)

      muted: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "muted-foreground": "oklch(0.552 0.016 285.938)", // --color-zinc-500 (from zinc)

      accent: "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)

      border: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
      input: "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)

      sidebar: "oklch(0.985 0 0)", // --color-zinc-50 (from zinc)
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950 (from zinc)

      "sidebar-accent": "oklch(0.967 0.001 286.375)", // --color-zinc-100 (from zinc)
      "sidebar-accent-foreground": "oklch(0.21 0.006 285.885)", // --color-zinc-900 (from zinc)

      "sidebar-border": "oklch(0.92 0.004 286.32)", // --color-zinc-200 (from zinc)
    },
    dark: {
      background: "oklch(0.145 0 0)", // --color-neutral-950
      foreground: "oklch(0.985 0 0)", // --color-neutral-50

      card: "oklch(0.205 0 0)", // --color-neutral-900
      "card-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      popover: "oklch(0.205 0 0)", // --color-neutral-900
      "popover-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      muted: "oklch(0.269 0 0)", // --color-neutral-800
      "muted-foreground": "oklch(0.708 0 0)", // --color-neutral-400

      accent: "oklch(0.269 0 0)", // --color-neutral-800
      "accent-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      border: "oklch(1 0 0 / 10%)", // --color-white
      input: "oklch(1 0 0 / 15%)", // --color-white

      sidebar: "oklch(0.205 0 0)", // --color-neutral-900
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      "sidebar-accent": "oklch(0.269 0 0)", // --color-neutral-800
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      "sidebar-border": "oklch(1 0 0 / 10%)", // --color-white
    },
  },
  grayish: {
    name: "grayish",
    label: "Grayish",
    light: {
      background: "oklch(0.967 0.001 286.375)", // --color-zinc-100
      foreground: "oklch(0.141 0.005 285.823)", // --color-zinc-950

      card: "oklch(0.957 0.001 286.375)", // a little darker than --color-zinc-100
      "card-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950

      popover: "oklch(0.957 0.001 286.375)", // a little darker than --color-zinc-100
      "popover-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950

      muted: "oklch(0.92 0.004 286.32)", // --color-zinc-200
      "muted-foreground": "oklch(0.442 0.017 285.786)", // --color-zinc-600

      accent: "oklch(0.92 0.004 286.32)", // --color-zinc-200
      "accent-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950

      border: "oklch(0.871 0.006 286.286)", // --color-zinc-300
      input: "oklch(0.871 0.006 286.286)", // --color-zinc-300

      sidebar: "oklch(0.947 0.001 286.375)", // a little darker than --color-zinc-100
      "sidebar-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950

      "sidebar-accent": "oklch(0.92 0.004 286.32)", // --color-zinc-200
      "sidebar-accent-foreground": "oklch(0.141 0.005 285.823)", // --color-zinc-950

      "sidebar-border": "oklch(0.871 0.006 286.286)", // --color-zinc-300
    },
    dark: {
      background: "oklch(0.21 0.006 285.885)", // --color-zinc-900
      foreground: "oklch(0.985 0 0)", // --color-zinc-50

      card: "oklch(0.274 0.006 286.033)", // --color-zinc-800
      "card-foreground": "oklch(0.985 0 0)", // --color-zinc-50

      popover: "oklch(0.274 0.006 286.033)", // --color-zinc-800
      "popover-foreground": "oklch(0.985 0 0)", // --color-zinc-50

      muted: "oklch(0.37 0.013 285.805)", // --color-zinc-700
      "muted-foreground": "oklch(0.705 0.015 286.067)", // --color-zinc-400

      accent: "oklch(0.37 0.013 285.805)", // --color-zinc-700
      "accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50

      border: "oklch(0.985 0 0 / 10%)",
      input: "oklch(0.985 0 0 / 15%)",

      sidebar: "oklch(0.274 0.006 286.033)", // --color-zinc-800
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-zinc-50

      "sidebar-accent": "oklch(0.37 0.013 285.805)", // --color-zinc-700
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-zinc-50

      "sidebar-border": "oklch(0.985 0 0 / 10%)",
    },
  },
  boring: {
    name: "boring",
    label: "Boring",
    light: {
      background: "oklch(0.97 0 0)", // --color-neutral-100
      foreground: "oklch(0.145 0 0)", // --color-neutral-950

      card: "oklch(0.985 0 0)", // --color-neutral-50
      "card-foreground": "oklch(0.145 0 0)", // --color-neutral-950

      popover: "oklch(0.985 0 0)", // --color-neutral-50
      "popover-foreground": "oklch(0.145 0 0)", // --color-neutral-950

      muted: "oklch(0.87 0 0)", // --color-neutral-300
      "muted-foreground": "oklch(0.442 0.017 285.786)", // --color-zinc-600

      accent: "oklch(0.922 0 0)", // --color-neutral-200
      "accent-foreground": "oklch(0.145 0 0)", // --color-neutral-950

      border: "oklch(0.922 0 0)", // --color-neutral-200
      input: "oklch(0.922 0 0)", // --color-neutral-200

      sidebar: "oklch(0.94 0 0)", // a little lighter than --color-neutral-200
      "sidebar-foreground": "oklch(0.145 0 0)", // --color-neutral-950

      "sidebar-accent": "oklch(0.922 0 0)", // --color-neutral-200
      "sidebar-accent-foreground": "oklch(0.145 0 0)", // --color-neutral-950

      "sidebar-border": "oklch(0.87 0 0)", // --color-neutral-300
    },
    dark: {
      background: "oklch(0.269 0 0)", // --color-neutral-800
      foreground: "oklch(0.985 0 0)", // --color-neutral-50

      card: "oklch(0.205 0 0)", // --color-neutral-900
      "card-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      popover: "oklch(0.205 0 0)", // --color-neutral-900
      "popover-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      muted: "oklch(0.371 0 0)", // --color-neutral-700
      "muted-foreground": "oklch(0.861 0.006 286.286)", // --color-neutral-300

      accent: "oklch(0.371 0 0)", // --color-neutral-700
      "accent-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      border: "oklch(0.985 0 0 / 12%)",
      input: "oklch(0.985 0 0 / 15%)",

      sidebar: "oklch(0.205 0 0)", // --color-neutral-900
      "sidebar-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      "sidebar-accent": "oklch(0.371 0 0)", // --color-neutral-700
      "sidebar-accent-foreground": "oklch(0.985 0 0)", // --color-neutral-50

      "sidebar-border": "oklch(0.985 0 0 / 12%)",
    },
  },
};

export const surfaceShadesPresetArray = Object.values(surfaceShadesPresets);
