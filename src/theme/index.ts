import { createTheme, type Theme } from '@mui/system';
import { breakpoints } from './breakpoints';
import { themePalette } from './palettes/defaultPalette';
import { THEME_FONTS, fontFamily } from './typography';
import shadow from './shadow';
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

export const theme: Theme = createTheme({
  palette: themePalette,
  get styles() {
    const _palette = this.palette as ThemePalette; // allows typescript to recognize the palette as ThemePalette; unfortunately, the library does not provide a way to override it's basic type definitions: https://github.com/mui/material-ui/issues/30678
    return {
      ..._palette,
      ...THEME_FONTS,
      shadow,
    };
  }, 
  typography: { fontFamily },
  breakpoints: { values: breakpoints },
});
