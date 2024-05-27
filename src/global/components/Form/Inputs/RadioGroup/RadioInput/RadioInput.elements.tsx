import React from 'react';
import { styled } from '@mui/system';

export const DISABLED_CLASS = 'disabled';

export const StyledLabel = styled('label')(({ theme }) => {
  const { styles } = theme;

  const colors = React.useMemo(() => ({
    text: styles.neutral[90],
    textDisabled: styles.neutral[60],
  }), [styles]);

  return {
    display: 'inline-flex',
    alignItems: 'flex-end',
    gap: theme.spacing(2),
    cursor: 'pointer',
    color: colors.text,
    ...theme.styles.textMd,
    lineHeight: 1.2,
    [`&.${DISABLED_CLASS}`]: {
      cursor: 'not-allowed',
      color: colors.textDisabled,
    },
  };
});

export const StyledInput = styled('input')(({ theme } ) => {
  const { styles } = theme;

  const colors = React.useMemo(() => ({
    btnBorder: styles.neutral[50],
    btnActive: styles.primary.main,
    btnBorderDisabled: styles.neutral[40],
    btnOutlineFocus: styles.primary.box.border[0],
    btnBg: styles.neutral[10],
    btnBgDisabled: styles.neutral[20],
    btnCheckDisabled: styles.neutral[40],
  }), [styles]);

  return {
    appearance: 'none',
    cursor: 'pointer',
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    borderRadius: styles.borderRadius.full,
    border: `1px solid ${colors.btnBorder}`,
    backgroundColor: colors.btnBg,
    '&::after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      outline: '1px solid transparent',
    },
    '&:hover:not(:disabled):not(:checked)': {
      borderColor: colors.btnActive,
      backgroundColor: styles.primary.box.surface[0],
      outline: `3px solid ${styles.primary.main}4a`,
    },
    '&:checked': {
      borderColor: colors.btnActive,
      outline: `3px solid ${styles.primary.main}4a`,
      '&::after': {
        backgroundColor: colors.btnActive,
        outlineColor: styles.primary.box.border[2],
      },
    },
    '&:disabled': {
      cursor: 'not-allowed',
      borderColor: colors.btnBorderDisabled,
      backgroundColor: colors.btnBgDisabled,
      '&::after': {
        backgroundColor: colors.btnCheckDisabled,
        outlineColor: colors.btnBorderDisabled,
      },
      '&:checked': {
        boxShadow: `0px 0px 0px 1px ${colors.btnBorderDisabled}`,
      },
    },
  };
});
