import colors from './colors';
import { ThemePalette } from '../types';

const themeColors = {
  neutral: {
    0: '#FFFFFF',
    10: '#F2F2F2',
    15: '#E6E6E6',
    20: '#D9D9D9',
    30: '#CCCCCC',
    40: '#B3B3B3',
    50: '#999999',
    60: '#808080',
    70: '#666666',
    75: '#515151',
    80: '#4D4D4D',
    85: '#333333',
    90: '#1A1A1A',
    95: '#0A0A0A',
    100: '#000000',
  },
  primary: {
    name: 'primary',
    main: colors.blueViolet['700'],
    mainHover: colors.blueViolet['500'],
    mainActive: colors.blueViolet['400'],
    surface: colors.blueViolet['50'],
    surfaceHover: colors.blueViolet['25'],
    surfaceActive: colors.blueViolet['25'],
    border: colors.blueViolet['500'],
    borderHover: colors.blueViolet['400'],
    borderActive: colors.blueViolet['300'],
    shades: {
      neutral: {
        50: colors.mutedBlue['25'],
        100: colors.mutedBlue['900']
      },
      dark: colors.mutedPurple['900'],
      accent: colors.brightPink['500'],
    },
  },
  secondary: {
    name: 'secondary',
    main: colors.blue['950'],
    mainHover: colors.blue['900'],
    mainActive: colors.blue['700'],
    surface: colors.blue['50'],
    surfaceHover: colors.blue['25'],
    surfaceActive: colors.blue['50'],
    border: colors.blue['950'],
    borderHover: colors.blue['400'],
    borderActive: colors.blue['300'],
  },
  basic: {
    name: 'basic',
    main: colors.mutedBlue['900'],
    mainHover: colors.blueViolet['800'],
    mainActive: colors.blueViolet['500'],
    surface: colors.mutedBlue['25'],
    surfaceHover: colors.blueViolet['100'],
    surfaceActive: colors.neutral['50'],
    border: colors.mutedBlue['500'],
    borderHover: colors.blueViolet['400'],
    borderActive: colors.blueViolet['300'],
  },
  special: {
    name: 'special',
    main: colors.brightPink['900'],
    mainHover: colors.brightPink['700'],
    mainActive: colors.brightPink['500'],
    surface: colors.brightPink['50'],
    surfaceHover: colors.brightPink['100'],
    surfaceActive: colors.neutral['50'],
    border: colors.brightPink['500'],
    borderHover: colors.brightPink['400'],
    borderActive: colors.brightPink['300'],
  },
  danger: {
    name: 'danger',
    main: colors.red['750'],
    mainHover: colors.red['700'],
    mainActive: colors.red['500'],
    surface: colors.red['50'],
    surfaceHover: colors.red['100'],
    surfaceActive: colors.red['50'],
    border: colors.red['500'],
    borderHover: colors.red['400'],
    borderActive: colors.red['300'],
  },
  warning: {
    name: 'warning',
    main: colors.stone['800'],
    mainHover: colors.orange['600'],
    mainActive: colors.yellow['700'],
    surface: colors.yellow['50'],
    surfaceHover: colors.yellow['100'],
    surfaceActive: colors.yellow['50'],
    border: colors.yellow['500'],
    borderHover: colors.yellow['300'],
    borderActive: colors.yellow['200'],
  },
  success: {
    name: 'success',
    main: colors.green['750'],
    mainHover: colors.green['700'],
    mainActive: colors.green['600'],
    surface: colors.green['50'],
    surfaceHover: colors.green['100'],
    surfaceActive: colors.green['50'],
    border: colors.green['600'],
    borderHover: colors.green['500'],
    borderActive: colors.green['400'],
  },
  info: {
    name: 'info',
    main: colors.blue['700'],
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

const shadows = {
  shadow1: '0px 2px 4px 0px rgba(0, 0, 0, 0.16)',
  shadow2: '0px 6px 4px 0px rgba(0, 0, 0, 0.25)',
  shadow3: '0px 8px 8px 0px rgba(0, 0, 0, 0.30)',
};

export const themePalette: ThemePalette = {
  ...shadows,
  ...themeColors,
  mode: 'light',
} as const;
