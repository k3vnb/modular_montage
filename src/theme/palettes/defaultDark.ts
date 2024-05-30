import colors from './colors';
import type { ElementColorMaps, ThemePalette } from '../types';
import { semanticDarkPalettes } from './defaultSemanticPalettes';
import { getGradients } from 'theme/utils';

const palette = {
  ...semanticDarkPalettes,
  primary: {
    name: 'primary',
    main: colors.blueViolet[700],
    box: {
      surface: [colors.blueViolet[900], colors.blueViolet[950], colors.neutralDark[10]],
      border: [colors.blueViolet[700], colors.blueViolet[600], colors.blueViolet[300]],
      surfaceContrast: [colors.blueViolet[600], colors.blueViolet[400], colors.blueViolet[200]],
      gradients: getGradients(colors.blueViolet[800], colors.blueViolet[900], colors.blueViolet[700]),
    },
    shades: {
      neutral: {
        50: colors.neutralDark[10],
        100: colors.mutedBlue[900]
      },
      dark: {
        0: colors.mutedPurple[700],
        1: colors.mutedPurple[800],
        2: colors.mutedPurple[950],
      },
      gradient: {
        0: `linear-gradient(45deg, ${colors.mutedPurple[900]} 40%, ${colors.mutedPurple[800]} 68%, ${colors.blueViolet[600]} 100%)`,
      },
      accent: colors.brightPink[900],
    },
    button: {
      text: {
        main: colors.blueViolet[300],
        hover: colors.blueViolet[100],
        pressed: colors.blueViolet[50],
      },
      background: {
        main: colors.neutralDark[5],
        hover: colors.blueViolet[950],
        pressed: colors.neutralDark[5],
      },
      border: {
        main: colors.blueViolet[500],
        hover: colors.blueViolet[400],
        pressed: colors.blueViolet[300],
      },
      filled: {
        text: {
          main: colors.neutral[0],
          hover: colors.neutral[10],
          pressed: colors.neutral[5],
        },
        background: {
          main: colors.blueViolet[900],
          hover: colors.blueViolet[700],
          pressed: colors.blueViolet[600],
        },
        border: {
          main: colors.blueViolet[500],
          hover: colors.blueViolet[400],
          pressed: colors.blueViolet[300],
        },
      },
    },
  },
  secondary: {
    name: 'secondary',
    main: colors.blue[950],
    box: {
      surface: [colors.blue[950], colors.blue[900], colors.blue[800]],
      border: [colors.blue[700], colors.blue[600], colors.blue[300]],
      surfaceContrast: [colors.blue[700], colors.blue[400], colors.blue[200]],
      gradients: getGradients(colors.blue[800], colors.blue[900], colors.blue[700]),
    },
    button: {
      text: {
        main: colors.blue[400],
        hover: colors.blue[100],
        pressed: colors.blue[50],
      },
      background: {
        main: colors.neutralDark[5],
        hover: colors.blue[950],
        pressed: colors.neutralDark[5],
      },
      border: {
        main: colors.blue[500],
        hover: colors.blue[400],
        pressed: colors.blue[300],
      },
      filled: {
        text: {
          main: colors.neutral[0],
          hover: colors.neutral[10],
          pressed: colors.neutral[5],
        },
        background: {
          main: colors.blue[950],
          hover: colors.blue[900],
          pressed: colors.blue[700],
        },
        border: {
          main: colors.blue[700],
          hover: colors.blue[600],
          pressed: colors.blue[300],
        },
      },
    },
  },
  special: {
    name: 'special',
    main: colors.brightPink[900],
    box: {
      surface: [colors.brightPink[950], colors.brightPink[900], colors.neutralDark[5]],
      border: [colors.brightPink[700], colors.brightPink[800], colors.brightPink[600]],
      surfaceContrast: [colors.brightPink[800], colors.brightPink[400], colors.brightPink[200]],
      gradients: getGradients(colors.brightPink[800], colors.brightPink[900], colors.brightPink[700]),
    },
    button: {
      text: {
        main: colors.brightPink[300],
        hover: colors.brightPink[100],
        pressed: colors.brightPink[50],
      },
      background: {
        main: colors.neutralDark[5],
        hover: colors.brightPink[950],
        pressed: colors.neutralDark[5],
      },
      border: {
        main: colors.brightPink[500],
        hover: colors.brightPink[400],
        pressed: colors.brightPink[300],
      },
      filled: {
        text: {
          main: colors.neutral[0],
          hover: colors.neutral[10],
          pressed: colors.neutral[5],
        },
        background: {
          main: colors.brightPink[900],
          hover: colors.brightPink[700],
          pressed: colors.brightPink[500],
        },
        border: {
          main: colors.brightPink[500],
          hover: colors.brightPink[400],
          pressed: colors.brightPink[300],
        },
      },
    },
  },
} as const;

export const themePalette: ThemePalette = {
  ...palette,
  mode: 'dark',
} as const;

export const elements: ElementColorMaps = {
  appbar: {
    surface: [palette.neutral[5], colors.blueViolet[950], colors.blueViolet[25]],
    border: [colors.brightPink[500], colors.blueViolet[400], colors.blueViolet[700]],
    surfaceContrast: [palette.neutral[60], colors.blueViolet[50], colors.blueViolet[500]],
    gradients: [
      `linear-gradient(45deg, ${colors.mutedPurple[900]} 40%, ${colors.mutedPurple[800]} 68%, ${colors.blueViolet[600]} 100%)`,
      '',
      '',
    ],
  },
  header: {
    surface: [colors.mutedBlue[900], colors.mutedBlue[800], colors.blueViolet[600]],
    border: [colors.brightPink[800], colors.brightPink[700], colors.brightPink[600]],
    surfaceContrast: [palette.neutral[80], palette.neutral[90], palette.neutral[95]],
    gradients: [
      `linear-gradient(45deg, ${colors.mutedPurple[900]} 40%, ${colors.blueViolet[800]} 68%, ${colors.blueViolet[900]} 100%)`,
      '',
      '',
    ],
  },
  main: {
    surface: [palette.neutral[10], colors.blueViolet[50], colors.blueViolet[25]],
    border: [colors.blueViolet[800], colors.blueViolet[500], colors.blueViolet[400]],
    surfaceContrast: [colors.blueViolet[900], colors.blueViolet[700], colors.blueViolet[500]],
    gradients: [
      `radial-gradient(ellipse at top, ${palette.neutral[10]} 0%, ${palette.neutral[0]} 100%)`,
      `linear-gradient(90deg, ${colors.mutedBlue[900]} 70%, ${palette.primary.shades.dark[0]} 100%)`,
      '',
    ],
  },
};
