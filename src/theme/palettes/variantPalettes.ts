import colors from './colors';
import type { ThemePalette } from '../types';

const rhinoBlue = {
  25: '#f5f6f9',
  50: '#ebebef',
  100: '#d6d7e0',
  200: '#adafc1',
  250: '#707392',
  300: '#7d85c6',
  400: '#6d75bf',
  500: '#5d66b8',
  600: '#545ca6',
  650: '#414781',
  700: '#323763',
  750: '#282c4f',
  800: '#141628',
  900: '#0f101e',
  950: '#0a0b14',
};

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
const mainDark = '#292e61';

const themeColors = {
  neutral: colors.neutral,
  primary: {
    name: 'primary',
    main: rhinoBlue['25'],
    mainHover: brightBlue,
    mainActive: main,
    surface: rhinoBlue['900'],
    surfaceHover: rhinoBlue['25'],
    surfaceActive: rhinoBlue['25'],
    border: '#303991',
    borderHover: rhinoBlue['600'],
    borderActive: brightBlue,
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
    mainHover: '#07af79',
    mainActive: colors.blue['700'],
    surface: colors.blue['50'],
    surfaceHover: colors.blue['25'],
    surfaceActive: colors.blue['50'],
    border: '#245840',
    borderHover: colors.blue['400'],
    borderActive: colors.blue['300'],
  },
  special: {
    name: 'special',
    main: seafoamGreen[500],
    mainHover: seafoamGreen[600],
    mainActive: seafoamGreen[500],
    surface: seafoamGreen[100],
    surfaceHover: seafoamGreen[50],
    surfaceActive: seafoamGreen[100],
    border: seafoamGreen[600],
    borderHover: seafoamGreen[500],
    borderActive: seafoamGreen[400],
  },
  danger: {
    name: 'danger',
    main: red['600'],
    mainHover: colors.red['700'],
    mainActive: colors.red['600'],
    surface: colors.red['50'],
    surfaceHover: colors.red['100'],
    surfaceActive: colors.red['50'],
    border: red['600'],
    borderHover: colors.red['700'],
    borderActive: colors.red['600'],
  },
  warning: {
    name: 'warning',
    main: colors.orange['950'],
    mainHover: colors.orange['800'],
    mainActive: colors.orange['500'],
    surface: colors.orange['50'],
    surfaceHover: colors.orange['100'],
    surfaceActive: colors.orange['50'],
    border: colors.orange['500'],
    borderHover: colors.orange['450'],
    borderActive: colors.orange['500'],
  },
  success: {
    name: 'success',
    main: colors.green['850'],
    mainHover: colors.green['800'],
    mainActive: colors.green['700'],
    surface: colors.green['50'],
    surfaceHover: colors.green['100'],
    surfaceActive: colors.green['50'],
    border: colors.green['500'],
    borderHover: colors.green['400'],
    borderActive: colors.green['300'],
  },
  info: {
    name: 'info',
    main: brightBlue,
    mainHover: colors.blue['700'],
    mainActive: colors.blue['600'],
    surface: colors.blue['50'],
    surfaceHover: colors.blue['100'],
    surfaceActive: colors.blue['50'],
    border: colors.blue['600'],
    borderHover: colors.blue['500'],
    borderActive: colors.blue['400'],
  },
} as const;

export const themePalette1: ThemePalette = {
  ...themeColors,
  mode: 'light',
} as const;
