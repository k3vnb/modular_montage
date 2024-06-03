import { createTheme, type Theme } from '@mui/system';
import * as theme1 from './palettes/defaultPalette';
import * as borealis from './palettes/borealis';
// import * as limonad from './palettes/limonad';
import * as defaultDark from './palettes/defaultDark';
import { THEME_FONTS, fontFamily } from './typography';
import shadow from './shadow';
import zIndex from './zIndex';
import breakpoints from './breakpoints';
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
  zIndex,
};

const commonThemeItems = {
  typography: { fontFamily },
  breakpoints: { values: breakpoints },
  zIndex,
};

const defaultTheme: Theme = createTheme({
  palette: theme1.themePalette,
  get styles() {
    const _palette = this.palette as ThemePalette; // allows typescript to recognize the palette as ThemePalette; unfortunately, the library does not provide a way to override it's basic type definitions: https://github.com/mui/material-ui/issues/30678
    return {
      ..._palette,
      ...commonStyles,
      elements: theme1.elements,
      isDark: _palette.mode === 'dark',
    };
  }, 
  ...commonThemeItems,
});

const borealisTheme: Theme = createTheme({
  palette: borealis.themePalette,
  get styles() {
    const _palette = this.palette as ThemePalette;
    return {
      ..._palette,
      ...commonStyles,
      elements: borealis.elements,
      isDark: _palette.mode === 'dark',
    };
  },
  ...commonThemeItems,
});

// const limonadTheme: Theme = createTheme({
//   palette: limonad.themePalette,
//   get styles() {
//     const _palette = this.palette as ThemePalette;
//     return {
//       ..._palette,
//       ...commonStyles,
//       elements: limonad.elements,
//       isDark: _palette.mode === 'dark',
//     };
//   },
//   ...commonThemeItems,
// });

const defaultDarkTheme: Theme = createTheme({
  palette: defaultDark.themePalette,
  get styles() {
    const _palette = this.palette as ThemePalette;
    return {
      ..._palette,
      ...commonStyles,
      elements: defaultDark.elements,
      isDark: _palette.mode === 'dark',
    };
  },
  ...commonThemeItems,
});

export const THEME_IDS = {
  default: 'Default',
  defaultDark: 'Default Dark',
  borealis: 'Borealis',
  sysPrefs: 'Use System Preferences',
  // limonad: 'limonad',
} as const;

export type ThemeId = typeof THEME_IDS[keyof typeof THEME_IDS];

export const THEME_ID_LIST = Object.keys(THEME_IDS) as ThemeId[];

export const THEMES: Record<ThemeId, Theme> = {
  [THEME_IDS.default]: defaultTheme,
  [THEME_IDS.defaultDark]: defaultDarkTheme,
  [THEME_IDS.borealis]: borealisTheme,
  [THEME_IDS.sysPrefs]: window?.matchMedia('(prefers-color-scheme: dark)').matches ? defaultDarkTheme : defaultTheme || defaultTheme,
  // [THEME_IDS.limonad]: limonadTheme,
};
