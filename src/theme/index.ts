import { createTheme, type Theme } from '@mui/system';
import { breakpoints } from './breakpoints';
import { themePalette } from './palettes/defaultPalette';
import { themePalette1 } from './palettes/variantPalettes';
import { THEME_FONTS, fontFamily } from './typography';
import shadow from './shadow';
import borderRadius from './borderRadius';
import type { ThemeStyles, ThemePalette } from './types';

declare module '@mui/system/createTheme' {
  interface Theme {
    styles: ThemeStyles;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    styles: ThemeStyles;
  }
}

const commonStyles = {
  ...THEME_FONTS,
  borderRadius,
  shadow,
};

const defaultTheme: Theme = createTheme({
  palette: themePalette,
  get styles() {
    const _palette = this.palette as ThemePalette; // allows typescript to recognize the palette as ThemePalette; unfortunately, the library does not provide a way to override it's basic type definitions: https://github.com/mui/material-ui/issues/30678
    return {
      ..._palette,
      ...commonStyles,
    };
  }, 
  typography: { fontFamily },
  breakpoints: { values: breakpoints },
});

const borealisTheme: Theme = createTheme({
  palette: themePalette1,
  get styles() {
    const _palette = this.palette as ThemePalette;
    return {
      ..._palette,
      ...commonStyles,
    };
  },
  typography: { fontFamily },
  breakpoints: { values: breakpoints },
});

export const THEME_IDS = {
  default: 'default',
  borealis: 'borealis',
} as const;

export type ThemeId = typeof THEME_IDS[keyof typeof THEME_IDS];

export const THEME_ID_LIST = Object.keys(THEME_IDS) as ThemeId[];

export const THEMES: Record<ThemeId, Theme> = {
  [THEME_IDS.default]: defaultTheme,
  [THEME_IDS.borealis]: borealisTheme,
};
