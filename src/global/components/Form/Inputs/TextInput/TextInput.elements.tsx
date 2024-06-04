import React from 'react';
import { Box, styled } from '@mui/system';
import {
  READ_ONLY_CLASS,
  DISABLED_CLASS,
  ACTIVE_LABEL_CLASS,
  ICON_LEFT_CLASS,
  ICON_LEFT_LABEL_CLASS,
} from '../constants';

type StyledRootProps= {
  error?: boolean;
  backgroundColor?: string;
  textArea?: boolean;
};

const options = {
  shouldForwardProp: (prop: string) => !['backgroundColor', 'error','textArea'].includes(prop),
};

export const StyledInputRoot = styled(Box, options)<StyledRootProps>(({
  theme,
  error,
  backgroundColor = theme.styles.neutral[0],
  textArea,
}) => {
  const innerTextStyles = theme.styles.textMd;
  const errorColor = theme.styles.danger.main;
  const disabledContrastColor = theme.styles.neutral[70];

  const colors = React.useMemo(() => ({
    text: theme.styles.neutral[95],
    textDisabled: disabledContrastColor,
    borderHover: error ? errorColor : theme.styles.neutral[90],
    borderFocus: error ? errorColor : theme.styles.primary.main,
    borderDefault: error ? errorColor : disabledContrastColor,
    iconFocus: error ?  theme.styles.neutral[90] : theme.styles.primary.main,
    labelActive: error ? errorColor : theme.styles.neutral[90],
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [error]);

  const labelInactiveStyles = {
    left: '12px',
    ...(textArea && { top: '12px' }),
    overflow: 'visible',
    whiteSpace: 'nowrap',
    ...innerTextStyles,
  };

  const labelActiveStyles = {
    zIndex: 1,
    top: '-1px',
    left: '18px',
    transform: 'translate(0%, -50%)',
    pointerEvents: 'none',
    backgroundColor,
    padding: '0px 4px',
    color: colors.labelActive,
    ...theme.styles.textXs,
    letterSpacing: '.3px',
  };

  return {
    backgroundColor: theme.styles.neutral[0],
    position: 'relative',
    borderRadius: '4px',
    border: `1px solid ${colors.borderDefault}`,
    display: 'flex',
    gap: '4px',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '260px',
    padding: textArea ? '0px' : theme.spacing(0, 2),
    color: colors.text,
    ...innerTextStyles,
    '& label': {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.2s linear 0ms',
      pointerEvents: 'none',
    },
    '&:not(:focus-within)': {
      [`& label:not(.${ACTIVE_LABEL_CLASS})`]: {
        ...labelInactiveStyles,
        [`&.${ICON_LEFT_LABEL_CLASS}`]: {
          left: '40px',
        },
      },
    },
    [`&:focus-within label, label.${ACTIVE_LABEL_CLASS}`]: {
      ...labelActiveStyles,
    },
    '&:focus-within': {
      borderColor: colors.borderFocus,
      outline: `.5px solid ${colors.borderFocus}`,
      '& svg': {
        color: colors.iconFocus,
      },
    },
    [`&:hover&:not(:focus-within)&:not(.${DISABLED_CLASS})`]: {
      borderColor: colors.borderHover,
    },
    [`&.${DISABLED_CLASS}`]: {
      cursor: 'not-allowed',
      borderColor: theme.styles.neutral[30],
      backgroundColor: theme.styles.neutral[20],
      color: colors.textDisabled,
      '& label': {
        pointerEvents: 'none',
        color: theme.styles.neutral[60],
      },
      '& svg': {
        color: theme.styles.neutral[50],
      },
    },
    [`&.${READ_ONLY_CLASS}`]: {
      borderColor: 'transparent',
      backgroundColor: theme.styles.secondary.box.surface[0],
      color: theme.styles.neutral[80],
    },
    [`& svg.${ICON_LEFT_CLASS}`]: {
      transform: 'translate(-25%, 0%)',
    },
  };
});

export const StyledInputElement = styled('input')(({ theme }) => ({
  ...theme.styles.textMd,
  flexGrow: 1,
  color: 'inherit',
  background: 'inherit',
  border: 'none',
  borderRadius: 'inherit',
  padding: theme.spacing(1.5,1),
  outline: 0,
  '&:disabled': {
    cursor: 'not-allowed',
  },
}));

export type TTextAreaProps = {
  rows?: string | number;
};

export const StyledTextAreaElement = styled('textarea')<TTextAreaProps>(({ theme }) => ({
  ...theme.styles.textLg,
  flexGrow: 1,
  color: 'inherit',
  background: 'inherit',
  border: 'none',
  borderRadius: 'inherit',
  outline: 0,
  padding: theme.spacing(1.5,2),
  '&:disabled': {
    cursor: 'not-allowed',
  },
}));
