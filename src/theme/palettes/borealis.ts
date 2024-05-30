import colors from './colors';
import type { ElementColorMaps, ThemePalette } from '../types';
import { semanticPalettes } from './defaultSemanticPalettes';

const rhinoBlue = {
  50: '#ced2fd',
  100: '#98a1f0',
  200: '#4858e5',
  300: '#172bde',
  400: '#1424b3',
  500: '#242c7b',
  700: '#323763',
  800: '#141628',
  900: '#0f101e',
};

const seafoamGreen = {
  10: '#f1f9f7',
  50: '#e3f3ee',
  100: '#ccf6f0',
  200: '#99ede0',
  300: '#67e5d1',
  400: '#34dcc1',
  500: '#01d3b2',
  600: '#59d6ba',
  650: '#41bba7',
  700: '#397a7e',
  800: '#2f5e5f',
  900: '#002923',
};

const mainDark = '#292e61';
const secondaryDark = '#1c1c21'; 

const palette = {
  ...semanticPalettes,
  primary: {
    name: 'primary',
    main: rhinoBlue[500],
    box: {
      surface: [rhinoBlue[50], rhinoBlue[100], rhinoBlue[200]],
      border: [rhinoBlue[500], rhinoBlue[400], rhinoBlue[300]],
      surfaceContrast: [rhinoBlue[500], rhinoBlue[400], rhinoBlue[300]],
      gradients: ['','',''],
    },
    shades: {
      neutral: {
        50: '#1c1c21',
        100: colors.neutral[40],
      },
      dark: {
        0: rhinoBlue[700],
        1: rhinoBlue[800],
        2: rhinoBlue[900],
      },
      accent: seafoamGreen[500],
      gradient: {
        0: `linear-gradient(45deg, ${rhinoBlue[800]} 30%, ${rhinoBlue[900]} 50%, ${rhinoBlue[800]} 66%, ${mainDark} 100%)`,
      },
    },
    button: {
      text: {
        main: rhinoBlue[500],
        hover: rhinoBlue[400],
        pressed: rhinoBlue[300],
      },
      background: {
        main: colors.neutral[0],
        hover: rhinoBlue[50],
        pressed: colors.neutral[0],
      },
      border: {
        main: rhinoBlue[500],
        hover: rhinoBlue[400],
        pressed: rhinoBlue[300],
      },
      filled: {
        text: {
          main: colors.neutral[0],
          hover: colors.neutral[10],
          pressed: colors.neutral[10],
        },
        background: {
          main: rhinoBlue[500],
          hover: rhinoBlue[400],
          pressed: rhinoBlue[300],
        },
        border: {
          main: rhinoBlue[400],
          hover: rhinoBlue[300],
          pressed: rhinoBlue[200],
        },
      },
    },
  },
  secondary: {
    name: 'secondary',
    main: colors.neutral[90],
    box: {
      surface: [colors.blue[50], colors.blue[100], colors.blue[200]],
      border: [colors.neutral[50], colors.blue[950], colors.blue[900]],
      surfaceContrast: [colors.neutral[90], colors.neutral[90], colors.neutral[80]],
      gradients: ['','',''],
    },
    button: {
      text: {
        main: colors.neutral[90],
        hover: colors.neutral[90],
        pressed: colors.neutral[80],
      },
      background: {
        main: colors.neutral[0],
        hover: colors.blue[50],
        pressed: colors.blue[100],
      },
      border: {
        main: colors.neutral[50],
        hover: colors.blue[950],
        pressed: colors.blue[900],
      },
      filled: {
        text: {
          main: colors.neutral[5],
          hover: colors.neutral[0],
          pressed: colors.neutral[10],
        },
        background: {
          main: colors.neutral[90],
          hover: colors.neutral[80],
          pressed: colors.neutral[90],
        },
        border: {
          main: colors.neutral[50],
          hover: colors.blue[950],
          pressed: colors.blue[900],
        },
      },
    },
  },
  special: {
    name: 'special',
    main: seafoamGreen[500],
    box: {
      surface: [seafoamGreen[100], colors.neutral[0], colors.neutral[0]],
      border: [seafoamGreen[500], seafoamGreen[400], seafoamGreen[300]],
      surfaceContrast: [seafoamGreen[800], seafoamGreen[700], seafoamGreen[600]],
      gradients: ['','',''],
    },
    button: {
      text: {
        main: seafoamGreen[800],
        hover: seafoamGreen[700],
        pressed: seafoamGreen[600],
      },
      background: {
        main: colors.neutral[0],
        hover: seafoamGreen[50],
        pressed: colors.neutral[0],
      },
      border: {
        main: seafoamGreen[500],
        hover: seafoamGreen[400],
        pressed: seafoamGreen[300],
      },
      filled: {
        text: {
          main: colors.neutral[0],
          hover: colors.neutral[10],
          pressed: colors.neutral[10],
        },
        background: {
          main: seafoamGreen[700],
          hover: seafoamGreen[600],
          pressed: seafoamGreen[500],
        },
        border: {
          main: seafoamGreen[500],
          hover: seafoamGreen[400],
          pressed: seafoamGreen[300],
        },
      },
    },
  },
} as const;

export const themePalette: ThemePalette = {
  ...palette,
  mode: 'light',
} as const;

export const elements: ElementColorMaps = {
  appbar: {
    surface: [secondaryDark, rhinoBlue[900], rhinoBlue[800]],
    border: [seafoamGreen[500], seafoamGreen[400], seafoamGreen[300]],
    surfaceContrast: [colors.neutral[40], colors.neutral[10], rhinoBlue[50]],
    gradients: ['','',''],
  },
  header: {
    surface: [rhinoBlue[800], rhinoBlue[900], mainDark],
    border: [seafoamGreen[500], seafoamGreen[400], seafoamGreen[300]],
    surfaceContrast: [palette.neutral[10], palette.neutral[5], palette.neutral[0]],
    gradients: [
      `linear-gradient(45deg, ${rhinoBlue[800]} 30%, ${rhinoBlue[900]} 50%, ${rhinoBlue[800]} 66%, ${mainDark} 100%)`,
      '',
      '',
    ],
  },
  main: {
    surface: [palette.neutral[10], palette.neutral[20], palette.neutral[30]],
    border: [palette.neutral[10], palette.neutral[20], palette.neutral[30]],
    surfaceContrast: [colors.mutedBlue[900], colors.blueViolet[700], colors.blueViolet[500]],
    gradients: [
      `radial-gradient(ellipse at top, ${palette.neutral[5]} 0%, ${palette.neutral[20]} 61%, #e2e1e5 100%)`,
      `linear-gradient(90deg, ${palette.primary.main} 70%, ${palette.primary.shades.dark[0]} 100%)`,
      '',
    ],
  },
};
