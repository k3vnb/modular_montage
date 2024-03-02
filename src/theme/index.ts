import { createTheme, type Theme } from '@mui/system';
import { breakpoints } from './breakpoints';
import { themePalette } from './palettes/defaultPalette';

export const theme: Theme = createTheme({
  palette: { ...themePalette },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  shape: {
    borderRadius: 20,
  },
  breakpoints: {
    values: {
      ...breakpoints,
    },
  },
});
