import { createTheme, type Theme } from '@mui/system';
import { breakpoints } from './breakpoints';
import { themePalette } from './palettes/defaultPalette';
import { fontFamily } from './typography';
import type { ThemePalette } from './types';

declare module '@mui/system/createTheme' {
  interface Theme {
    styles: ThemePalette;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    styles: ThemePalette;
  }
}

export const theme: Theme = createTheme({
  palette: themePalette,
  get styles() {
    return this.palette as ThemePalette; // allows typescript to recognize the palette as ThemePalette; unfortunately, the library does not provide a way to override it's basic type definitions: https://github.com/mui/material-ui/issues/30678
  }, 
  typography: { fontFamily },
  breakpoints: { values: breakpoints },
});
