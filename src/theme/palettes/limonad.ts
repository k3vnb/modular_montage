import colors from './colors';
import type { ElementColorMaps, ThemePalette } from '../types';
import { semanticPalettes } from './defaultSemanticPalettes';


const yellows = { //primary
  50: '#fefee8',
  100: '#fdfac5',
  200: '#fbf79e',
  300: '#faf276',
  400: '#f7ee56',
  500: '#f4e935',
  600: '#fbde37', // 600
  700: '#fac52d',
  800: '#f8ad23',
  900: '#f58510',
};

const pinks = {
  50: '#fae4ec',
  100:'#f4bbd1',
  200:'#ee90b2',
  300:'#e86594',
  400:'#e3467d', // 400
  500:'#df2b67',
  600:'#ce2863',
  700:'#b8255e',
  800:'#a32259',
  900:'#7e1b4f',
};

const blues = { // complementary
  50:'#eaecff',
  100: '#caceff',
  200: '#a5aeff',
  300: '#7c8dff',
  400: '#5b71fe',
  500: '#3754fb', // 500
  600: '#324bef',
  700: '#263fe2',
  800: '#1933d7',
  900: '#0017c6',
};

const melon = { // analogous
  50:'#fff8e4',
  100: '#ffedbb',
  200: '#ffe291',
  300: '#ffd868',
  400: '#ffce4f',
  500: '#ffc645',
  600: '#ffb941',
  700: '#ffa73d',
  800: '#ff973b',
  900: '#fb7c37', // 900
};

const greens = {
  50:'#f5ffe6',
  100: '#d1ffc3',
  200: '#afff9a',
  300: '#84fe68',
  400: '#54fb37', // 400
  500: '#00f800',
  600: '#00e600',
  700: '#00d000',
  800: '#00bb00',
  900: '#009600',
};

const mainDark = '#292e61';

const palette = {
  ...semanticPalettes,
  primary: {
    name: 'primary',
    main: yellows[500],
    box: {
      surface: [yellows[500], yellows[100], yellows[200]],
      border: [pinks[500], pinks[400], pinks[300]],
      surfaceContrast: [pinks[500], pinks[400], pinks[300]],
      gradients: ['','',''],
    },
    shades: {
      neutral: {
        50: '#1c1c21',
        100: colors.neutral[40],
      },
      dark: {
        0: yellows[700],
        1: yellows[800],
        2: yellows[900],
      },
      accent: pinks[400],
      gradient: {
        0: `linear-gradient(45deg, ${yellows[800]} 30%, ${yellows[900]} 50%, ${yellows[800]} 66%, ${mainDark} 100%)`,
      },
    },
  },
  secondary: {
    name: 'secondary',
    main: blues[500],
    box: {
      surface: [blues[50], blues[100], blues[200]],
      border: [blues[600], blues[700], blues[700]],
      surfaceContrast: [blues[900], blues[900], blues[800]],
      gradients: ['','',''],
    },
  },
  special: {
    name: 'special',
    main: greens[500],
    box: {
      surface: [greens[100], colors.neutral[0], colors.neutral[0]],
      border: [greens[500], greens[400], greens[300]],
      surfaceContrast: [greens[800], greens[700], greens[600]],
      gradients: ['','',''],
    },
  },
} as const;

export const themePalette: ThemePalette = {
  ...palette,
  mode: 'light',
} as const;

export const elements: ElementColorMaps = {
  appbar: {
    surface: [yellows[300], yellows[500], yellows[800]],
    border: [pinks[600], pinks[400], pinks[300]],
    surfaceContrast: [colors.neutral[80], pinks[700], yellows[50]],
    gradients: ['','',''],
  },
  header: {
    surface: [yellows[300], yellows[400], yellows[500]],
    border: [pinks[400], pinks[300], pinks[200]],
    surfaceContrast: [pinks[600], pinks[700], pinks[800]],
    gradients: [
      `linear-gradient(45deg, ${yellows[500]} 50%, ${yellows[600]} 66%, ${yellows[700]} 100%)`,
      '',
      '',
    ],
  },
  main: {
    surface: [palette.neutral[10], palette.neutral[20], palette.neutral[30]],
    border: [palette.neutral[10], palette.neutral[20], palette.neutral[30]],
    surfaceContrast: [colors.mutedBlue[900], colors.blueViolet[700], colors.blueViolet[500]],
    gradients: [
      `radial-gradient(ellipse at top, ${palette.neutral[0]} 0%, ${palette.neutral[5]} 61%, #e2e1e5 100%)`,
      `linear-gradient(90deg, ${pinks[500]} 70%, ${palette.primary.shades.dark[0]} 100%)`,
      '',
    ],
  },
};


