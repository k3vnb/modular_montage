import colors from './colors';
import type { ElementColorMaps, ThemePalette } from '../types';
import { semanticPalettes } from './defaultSemanticPalettes';

const palette = {
  ...semanticPalettes,
  primary: {
    name: 'primary',
    main: colors.blueViolet[700],
    box: {
      surface: [colors.blueViolet[50], colors.blueViolet[25], colors.neutral[10]],
      border: [colors.blueViolet[500], colors.blueViolet[400], colors.blueViolet[300]],
      surfaceContrast: [colors.blueViolet[700], colors.blueViolet[500], colors.blueViolet[400]],
      gradients: ['','','']
    },
    shades: {
      neutral: {
        50: colors.neutral['10'],
        100: colors.mutedBlue['900']
      },
      dark: {
        0: colors.mutedPurple[700],
        1: colors.mutedPurple[800],
        2: colors.mutedPurple[950],
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
      gradients: ['','','']
    },
  },
  special: {
    name: 'special',
    main: colors.brightPink[900],
    box: {
      surface: [colors.brightPink[50], colors.brightPink[100], colors.neutral[5]],
      border: [colors.brightPink[500], colors.brightPink[400], colors.brightPink[300]],
      surfaceContrast: [colors.brightPink[900], colors.brightPink[700], colors.brightPink[500]],
      gradients: ['','','']
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
    gradients: [
      `linear-gradient(45deg, ${colors.mutedPurple[900]} 40%, ${colors.mutedPurple[800]} 68%, ${colors.blueViolet[600]} 100%)`,
      '',
      '',
    ],
  },
  header: {
    surface: [colors.mutedBlue[900], colors.mutedBlue[800], colors.blueViolet[600]],
    border: [colors.brightPink[500], colors.brightPink[400], colors.brightPink[300]],
    surfaceContrast: [palette.neutral[10], palette.neutral[5], palette.neutral[0]],
    gradients: [
      `linear-gradient(45deg, ${colors.mutedPurple[900]} 40%, ${colors.mutedPurple[800]} 68%, ${colors.blueViolet[600]} 100%)`,
      '',
      '',
    ],
  },
  main: {
    surface: [palette.neutral[10], colors.blueViolet[50], colors.blueViolet[25]],
    border: [colors.blueViolet[600], colors.blueViolet[500], colors.blueViolet[400]],
    surfaceContrast: [colors.mutedBlue[900], colors.blueViolet[700], colors.blueViolet[500]],
    gradients: [
      `radial-gradient(ellipse at top, ${palette.neutral[5]} 0%, ${palette.neutral[20]} 61%, #e2e1e5 100%)`,
      `linear-gradient(90deg, ${palette.primary.main} 70%, ${palette.primary.shades.dark[0]} 100%)`,
      '',
    ],
  },
};
