import colors from './colors';
import { getGradients } from 'theme/utils';

export const semanticPalettes = {
  neutral: colors.neutral,
  hyperlink: [colors.blue[700], colors.blue[500]],
  danger: {
    name: 'danger',
    main: colors.red[800],
    box: {
      surface: [colors.red[50], colors.red[100], colors.neutral[5]],
      border: [colors.red[600], colors.red[500], colors.red[400]],
      surfaceContrast: [colors.red[800], colors.red[700], colors.red[600]],
      gradients: getGradients(colors.red[800], colors.red[900], colors.red[700]),
    },
  },
  warning: {
    name: 'warning',
    main: colors.orange[950],
    box: {
      surface: [colors.orange[50], colors.orange[100], colors.neutral[5]],
      border: [colors.orange[500], colors.orange[450], colors.orange[500]],
      surfaceContrast: [colors.orange[950], colors.orange[800], colors.orange[500]],
      gradients: getGradients(colors.orange[800], colors.orange[900], colors.orange[700]),
    },
  },
  success: {
    name: 'success',
    main: colors.green[850],
    box: {
      surface: [colors.green[50], colors.green[100], colors.neutral[5]],
      border: [colors.green[500], colors.green[400], colors.green[300]],
      surfaceContrast: [colors.green[850], colors.green[800], colors.green[700]],
      gradients: getGradients(colors.green[800], colors.green[900], colors.green[700]),
    },
  },
  info: {
    name: 'info',
    main: colors.blue[700],
    box: {
      surface: [colors.blue[50], colors.blue[100], colors.neutral[5]],
      border: [colors.blue[600], colors.blue[500], colors.blue[400]],
      surfaceContrast: [colors.blue[700], colors.blue[500], colors.blue[400]],
      gradients: getGradients(colors.blue[800], colors.blue[900], colors.blue[700]),
    },
  },
} as const;
