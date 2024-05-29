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
    button: {
      text: {
        main: colors.red[800],
        hover: colors.red[900],
        pressed: colors.red[950],
      },
      background: {
        main: colors.neutral[0],
        hover: colors.red[100],
        pressed: colors.red[50],
      },
      border: {
        main: colors.red[500],
        hover: colors.red[400],
        pressed: colors.red[300],
      },
      filled: {
        text: {
          main: colors.neutral[5],
          hover: colors.neutral[10],
          pressed: colors.neutral[20],
        },
        background: {
          main: colors.red[800],
          hover: colors.red[700],
          pressed: colors.red[500],
        },
        border: {
          main: colors.red[500],
          hover: colors.red[400],
          pressed: colors.red[500],
        },
      },
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
    button: {
      text: {
        main: colors.orange[800],
        hover: colors.orange[900],
        pressed: colors.orange[800],
      },
      background: {
        main: colors.neutral[0],
        hover: colors.orange[50],
        pressed: colors.orange[100],
      },
      border: {
        main: colors.orange[500],
        hover: colors.orange[400],
        pressed: colors.orange[300],
      },
      filled: {
        text: {
          main: colors.neutral[0],
          hover: colors.neutral[5],
          pressed: colors.neutral[0],
        },
        background: {
          main: colors.orange[800],
          hover: colors.orange[700],
          pressed: colors.orange[600],
        },
        border: {
          main: colors.orange[500],
          hover: colors.orange[400],
          pressed: colors.orange[300],
        },
      },
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
    button: {
      text: {
        main: colors.green[800],
        hover: colors.green[900],
        pressed: colors.green[950],
      },
      background: {
        main: colors.neutral[0],
        hover: colors.green[50],
        pressed: colors.green[100],
      },
      border: {
        main: colors.green[800],
        hover: colors.green[900],
        pressed: colors.green[950],
      },
      filled: {
        text: {
          main: colors.neutral[5],
          hover: colors.neutral[10],
          pressed: colors.neutral[5],
        },
        background: {
          main: colors.green[800],
          hover: colors.green[700],
          pressed: colors.green[600],
        },
        border: {
          main: colors.green[500],
          hover: colors.green[400],
          pressed: colors.green[300],
        },
      },
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
    button: {
      text: {
        main: colors.blue[800],
        hover: colors.blue[700],
        pressed: colors.blue[600],
      },
      background: {
        main: colors.neutral[0],
        hover: colors.blue[50],
        pressed: colors.blue[100],
      },
      border: {
        main: colors.blue[500],
        hover: colors.blue[400],
        pressed: colors.blue[300],
      },
      filled: {
        text: {
          main: colors.neutral[5],
          hover: colors.neutral[10],
          pressed: colors.neutral[20],
        },
        background: {
          main: colors.blue[800],
          hover: colors.blue[600],
          pressed: colors.blue[500],
        },
        border: {
          main: colors.blue[500],
          hover: colors.blue[400],
          pressed: colors.blue[300],
        },
      },
    },
  },
} as const;

export const semanticDarkPalettes = {
  neutral: colors.neutralDark,
  hyperlink: [colors.blue[400], colors.blue[300]],
  danger: {
    name: 'danger',
    main: colors.red[400],
    box: {
      surface: [colors.red[800], colors.red[300], colors.red[200]],
      border: [colors.red[600], colors.red[500], colors.red[400]],
      surfaceContrast: [colors.red[900], colors.red[800], colors.red[950]],
      gradients: getGradients(colors.red[800], colors.red[900], colors.red[700]),
    },
    button: {
      text: {
        main: colors.red[500],
        hover: colors.red[50],
        pressed: colors.red[300],
      },
      background: {
        main: colors.neutralDark[5],
        hover: colors.red[950],
        pressed: colors.neutralDark[5],
      },
      border: {
        main: colors.red[400],
        hover: colors.red[500],
        pressed: colors.red[600],
      },
      filled: {
        text: {
          main: colors.neutralDark[5],
          hover: colors.neutralDark[10],
          pressed: colors.neutralDark[20],
        },
        background: {
          main: colors.red[600],
          hover: colors.red[500],
          pressed: colors.red[600],
        },
        border: {
          main: colors.red[400],
          hover: colors.red[500],
          pressed: colors.red[600],
        },
      },
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
    button: {
      text: {
        main: colors.orange[400],
        hover: colors.orange[500],
        pressed: colors.orange[600],
      },
      background: {
        main: colors.neutralDark[5],
        hover: colors.orange[950],
        pressed: colors.neutralDark[5],
      },
      border: {
        main: colors.orange[400],
        hover: colors.orange[500],
        pressed: colors.orange[600],
      },
      filled: {
        text: {
          main: colors.neutralDark[5],
          hover: colors.neutralDark[10],
          pressed: colors.neutralDark[20],
        },
        background: {
          main: colors.orange[400],
          hover: colors.orange[500],
          pressed: colors.orange[600],
        },
        border: {
          main: colors.orange[400],
          hover: colors.orange[500],
          pressed: colors.orange[600],
        },
      },
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
    button: {
      text: {
        main: colors.green[400],
        hover: colors.green[500],
        pressed: colors.green[600],
      },
      background: {
        main: colors.neutralDark[5],
        hover: colors.green[950],
        pressed: colors.neutralDark[5],
      },
      border: {
        main: colors.green[400],
        hover: colors.green[500],
        pressed: colors.green[600],
      },
      filled: {
        text: {
          main: colors.neutralDark[5],
          hover: colors.neutralDark[10],
          pressed: colors.neutralDark[20],
        },
        background: {
          main: colors.green[400],
          hover: colors.green[500],
          pressed: colors.green[600],
        },
        border: {
          main: colors.green[400],
          hover: colors.green[500],
          pressed: colors.green[600],
        },
      },
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
        main: colors.blue[400],
        hover: colors.blue[500],
        pressed: colors.blue[600],
      },
      filled: {
        text: {
          main: colors.neutralDark[5],
          hover: colors.neutralDark[10],
          pressed: colors.neutralDark[20],
        },
        background: {
          main: colors.blue[400],
          hover: colors.blue[500],
          pressed: colors.blue[600],
        },
        border: {
          main: colors.blue[400],
          hover: colors.blue[500],
          pressed: colors.blue[600],
        },
      },
    },
  },
} as const;
