import React from 'react';
import { Box, styled } from '@mui/system';
import type { ButtonProps as BaseButtonProps  } from '@mui/base';
import type { SvgIconComponent } from '@mui/icons-material';
import type { ThemedTemplateVariants } from 'global/types';
import { UnstyledButton } from '../UnstyledButton';
import { getButtonThemeColors } from '../utils';

export type TButtonSize = 'small' | 'medium' | 'large';

export type StyledButtonProps = {
  size?: TButtonSize;
  filled?: boolean;
  shadow?: boolean;
  variant?: ThemedTemplateVariants;
  showBorder?: boolean;
} & BaseButtonProps;

const options = {
  shouldForwardProp: (prop: string) => ![
    'variant','size','filled','showBorder','shadow',
  ].includes(prop),
};

export const StyledButton = styled(UnstyledButton, options)<StyledButtonProps>(({
  theme,
  size = 'large',
  shadow = true,
  filled = false,
  variant = 'primary',
  showBorder = true,
}) => {
  const colors = React.useMemo(() => getButtonThemeColors({ theme, variant, filled, showBorder }), [theme, variant, filled, showBorder]);

  const fontStyles = React.useMemo(() => {
    const sizes = {
      small: theme.styles.textSmSemibold,
      medium: theme.styles.textMdBold,
      large: theme.styles.textLgBold,
    };
    return sizes[size];
  }, [theme, size]);

  const padding = React.useMemo(() => {
    const sizes = {
      small: '6px 16px',
      medium: '8px 16px',
      large: '10px 16px',
    };
    return sizes[size];
  }, [size]);

  return {
    minWidth: 'min-content',
    maxWidth: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '8px',
    backgroundColor: colors.bg,
    borderRadius: '4px',
    border: `1.5px solid ${colors.border}`,
    padding,
    color: colors.text,
    cursor: 'pointer',
    ...fontStyles,
    lineHeight: 0,
    verticalAlign: 'middle',
    '&:hover&:not(:disabled)': {
      color: colors.textHover,
      borderColor: colors.borderHover,
      backgroundColor: colors.bgHover,
    },
    '&:active&:not(:disabled)': {       
      color: colors.textPressed,
      borderColor: colors.borderPressed,
      backgroundColor: colors.bgPressed,
    },
    '&:focus-visible': {
      outline: `3px solid ${colors.focusOutline}`,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      color: colors.textDisabled,
      borderColor: colors.borderDisabled,
      backgroundColor: colors.bgDisabled,
    },
    '&:not(:hover, :active, :disabled, :focus)': {
      boxShadow: shadow ? theme.styles.shadow[1] : 'none',
    },
    // Icon
    '.btn-icon': {
      marginTop: '-1px',
      fontSize: '1rem',
    },
  };
});

export type IconProp = SvgIconComponent | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export const IconContainer = ({ icon: Icon }: { icon: IconProp }): JSX.Element => (
  <Box aria-hidden="true" className="btn-icon">
    <Icon fontSize="inherit" />
  </Box>
);
