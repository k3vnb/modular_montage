/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Theme } from '@mui/system';
import { THEME_TEMPLATE_VARIANTS } from 'global/types';
import type { ShadesMap, ThemedTemplateColorMap } from 'theme/types';

type TShadesDisplay = {
  neutral: string[];
  dark: string;
  accent: string;
};

export type TPaletteDisplay = {
  name: string;
  spectrum: string[];
  shades?: TShadesDisplay;
};

function getShades(shadesMap?: ShadesMap) {
  if (!shadesMap) return;
  return {
    neutral: [shadesMap.neutral[50], shadesMap.neutral[100]],
    dark: shadesMap.dark,
    accent: shadesMap.accent,
  };
}

function getHSLFromHex(hex: string): [string, number] {
  // convert hex to hsl and return lightness
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
  }

  h *= 60;
  s *= 100;
  l *= 100;
  return [hex, l];
}

function sortHexesByLightness(hexes: string[]) {
  return hexes
    .map(getHSLFromHex)
    .sort((a, b) => a[1] - b[1])
    .map(([hex]) => hex);
}

function getUniqueHexes(themeColor: ThemedTemplateColorMap) {
  return Array.from(
    new Set([
      themeColor.main,
      themeColor.mainHover,
      themeColor.mainActive,
      themeColor.surface,
      themeColor.surfaceHover,
      themeColor.surfaceActive,
      themeColor.border,
      themeColor.borderHover,
      themeColor.borderActive,
    ])
  );
}

function getThemeColorSpectrum(themeColor: ThemedTemplateColorMap) {
  return sortHexesByLightness(getUniqueHexes(themeColor));
}

function getNeutralPaletteDisplay(theme: Theme): TPaletteDisplay {
  return {
    name: 'neutral',
    spectrum: Object.values(theme.styles.neutral),
  };
}

export function getThemeColorPaletteDisplay(theme: Theme): TPaletteDisplay[] {
  const neutralPalette = getNeutralPaletteDisplay(theme);
  const themeColors = THEME_TEMPLATE_VARIANTS.map((variant) => ({
    name: theme.styles[variant].name,
    spectrum: getThemeColorSpectrum(theme.styles[variant]),
    shades: getShades(theme.styles[variant].shades),
  }));

  return [...themeColors, neutralPalette];
}
