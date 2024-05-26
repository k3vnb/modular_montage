import colors from './colors';
import type { ElementColorMaps, ThemePalette } from '../types';
const d0 = '#a3a3a3';
const d1 = '#1c1c21';
const rhinoBlue = {
  25: '#f5f6f9', //
  50: '#ebebef',
  100: '#d6d7e0',
  200: '#adafc1',
  250: '#707392',
  300: '#7d85c6',
  400: '#6d75bf',
  500: '#5d66b8',
  600: '#545ca6',
  650: '#414781',
  700: '#323763', //
  750: '#282c4f',
  800: '#141628', //
  900: '#0f101e', //
  950: '#0a0b14',
};

const _rhinoBlue = {
  10: '#f5f5f5',
  20: '#ced2fd',
  100: '#98a1f0',
  200: '#4858e5',
  300: '#172bde',
  400: '#1424b3',
  500: '#242c7b',
  600: '#172382',
  650: '#232d71',
  700: '#323663', //700
  750: '#292d61',
  800: '#101865',
  825: '#111646',
  850: '#151728', //800
  900: '#1c1c21',
  950: '#0f101f', // 900
};

const testlist3 = [
  '#f5f6f9',
  '#a3a3a3',
  '#323763',
  '#292e61',
  '#141628',
  '#0f101e',
  '#1c1c21',
];

const brightBlue = '#131faa';
const marigold = '#d3b201';

const seafoamGreen = {
  0: '#f1f9f7',
  50: '#e3f3ee',
  100: '#ccf6f0',
  200: '#99ede0',
  300: '#67e5d1',
  400: '#34dcc1',
  500: '#01d3b2',
  600: '#59d6ba',
  630: '#41bba7',
  700: '#397a7e',
  900: '#002923',
};

const red = {
  600: '#d30122',
};

const main = '#182181';
const mainDark = '#292e61'; //

const palette = {
  neutral: colors.neutral,
  hyperlink: [colors.blue[700], colors.blue[500]],
  primary: {
    name: 'primary',
    main: _rhinoBlue[500],
    box: {
      surface: [_rhinoBlue[10], _rhinoBlue[20], _rhinoBlue[100]],
      border: [_rhinoBlue[500], _rhinoBlue[400], _rhinoBlue[300]],
      surfaceContrast: [_rhinoBlue[950], _rhinoBlue[850], _rhinoBlue[700]],
    },
    shades: {
      neutral: {
        50: '#1c1c21',
        100: colors.neutral[40],
      },
      dark: {
        0: rhinoBlue['700'],
        1: rhinoBlue['800'],
        2: rhinoBlue['900'],
      },
      accent: seafoamGreen[500],
      gradient: {
        0: `linear-gradient(45deg, ${rhinoBlue['800']} 30%, ${rhinoBlue['900']} 50%, ${rhinoBlue['800']} 66%, ${mainDark} 100%)`,
      },
    },
  },
  secondary: {
    name: 'secondary',
    main: '#388560',
    box: {
      surface: [colors.neutral[10], colors.neutral[20], colors.neutral[30]],
      border: [colors.neutral[50], colors.neutral[40], colors.neutral[30]],
      surfaceContrast: [colors.neutral[90], colors.neutral[80], colors.neutral[70]],
    },
  },
  special: {
    name: 'special',
    main: colors.brightPink[900],
    box: {
      surface: [colors.brightPink[50], colors.brightPink[100], colors.neutral[5]],
      border: [colors.brightPink[500], colors.brightPink[400], colors.brightPink[300]],
      surfaceContrast: [colors.brightPink[900], colors.brightPink[700], colors.brightPink[500]],
    },
  },
  danger: {
    name: 'danger',
    main: colors.red[800],
    box: {
      surface: [colors.red[50], colors.red[100], colors.neutral[5]],
      border: [colors.red[600], colors.red[500], colors.red[400]],
      surfaceContrast: [colors.red[800], colors.red[700], colors.red[600]],
    },
  },
  warning: {
    name: 'warning',
    main: colors.orange[950],
    box: {
      surface: [colors.orange[50], colors.orange[100], colors.neutral[5]],
      border: [colors.orange[500], colors.orange[450], colors.orange[500]],
      surfaceContrast: [colors.orange[950], colors.orange[800], colors.orange[500]],
    },
  },
  success: {
    name: 'success',
    main: colors.green[850],
    box: {
      surface: [colors.green[50], colors.green[100], colors.neutral[5]],
      border: [colors.green[500], colors.green[400], colors.green[300]],
      surfaceContrast: [colors.green[850], colors.green[800], colors.green[700]],
    },
  },
  info: {
    name: 'info',
    main: colors.blue[700],
    box: {
      surface: [colors.blue[50], colors.blue[100], colors.neutral[5]],
      border: [colors.blue[600], colors.blue[500], colors.blue[400]],
      surfaceContrast: [colors.blue[700], colors.blue[500], colors.blue[400]],
    },
  },
} as const;

export const themePalette: ThemePalette = {
  ...palette,
  mode: 'light',
} as const;

export const elements: ElementColorMaps = {
  appbar: {
    surface: ['#1c1c21', _rhinoBlue[950], _rhinoBlue[850]],
    border: [seafoamGreen[500], seafoamGreen[400], seafoamGreen[300]],
    surfaceContrast: [colors.neutral[40], _rhinoBlue[10], _rhinoBlue[20]],
  },
  header: {
    surface: [rhinoBlue[800], rhinoBlue[900], mainDark],
    border: [seafoamGreen[500], seafoamGreen[400], seafoamGreen[300]],
    surfaceContrast: [palette.neutral[10], palette.neutral[5], palette.neutral[0]],
    gradients: [`linear-gradient(45deg, ${rhinoBlue[800]} 30%, ${rhinoBlue[900]} 50%, ${rhinoBlue[800]} 66%, ${mainDark} 100%)`],
  },
  main: {
    surface: [palette.neutral[10], palette.neutral[20], palette.neutral[30]],
    border: [palette.neutral[10], palette.neutral[20], palette.neutral[30]],
    surfaceContrast: [colors.mutedBlue[900], colors.blueViolet[700], colors.blueViolet[500]],
    gradients: [`radial-gradient(ellipse at top, ${palette.neutral[5]} 0%, ${palette.neutral[20]} 61%, #e2e1e5 100%)`],
  },
};
