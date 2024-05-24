import colors from './colors';
import type { ElementColorMaps, ThemePalette } from '../types';

const palette = {
  neutral: colors.neutral,
  primary: {
    name: 'primary',
    main: colors.blueViolet[700],
    box: {
      surface: [colors.blueViolet[50], colors.blueViolet[25], colors.neutral[10]],
      border: [colors.blueViolet[500], colors.blueViolet[400], colors.blueViolet[300]],
      surfaceContrast: [colors.blueViolet[700], colors.blueViolet[500], colors.blueViolet[400]],
    },
    shades: {
      neutral: {
        50: colors.neutral['10'],
        100: colors.mutedBlue['900']
      },
      dark: {
        0: colors.mutedPurple['800'],
        1: colors.mutedPurple['900'],
        2: colors.mutedPurple['950'],
      },
      gradient: {
        0: `linear-gradient(45deg, ${colors.mutedPurple['900']} 40%, ${colors.mutedPurple['800']} 68%, ${colors.blueViolet['600']} 100%)`,
      },
      accent: colors.brightPink['500'],
    },
  },
  secondary: {
    name: 'secondary',
    main: colors.blue[950],
    box: {
      surface: [colors.blue[50], colors.blue[25], colors.neutral[5]],
      border: [colors.blue[500], colors.blue[400], colors.blue[300]],
      surfaceContrast: [colors.blue[950], colors.blue[900], colors.blue[700]],
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
    surface: [palette.neutral[10], colors.blueViolet[50], colors.blueViolet[25]],
    border: [colors.blueViolet[900], colors.blueViolet[800], colors.blueViolet[600]],
    surfaceContrast: [colors.mutedBlue[900], colors.blueViolet[700], colors.blueViolet[500]],
  },
  header: {
    surface: [colors.mutedBlue[900], colors.mutedBlue[800], colors.blueViolet[600]],
    border: [colors.brightPink[500], colors.brightPink[400], colors.brightPink[300]],
    surfaceContrast: [palette.neutral[10], palette.neutral[5], palette.neutral[0]],
    gradients: [`linear-gradient(45deg, ${colors.mutedPurple[900]} 40%, ${colors.mutedPurple[800]} 68%, ${colors.blueViolet[600]} 100%)`],
  },
  main: {
    surface: [palette.neutral[10], colors.blueViolet[50], colors.blueViolet[25]],
    border: [colors.blueViolet[600], colors.blueViolet[500], colors.blueViolet[400]],
    surfaceContrast: [colors.mutedBlue[900], colors.blueViolet[700], colors.blueViolet[500]],
    gradients: [`radial-gradient(ellipse at top, ${palette.neutral[5]} 0%, ${palette.neutral[20]} 61%, #e2e1e5 100%)`],
  },
};
