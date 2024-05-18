import React from 'react';
import { Box, styled } from '@mui/system';
import type { ButtonProps as BaseButtonProps  } from '@mui/base';
import type { SvgIconComponent } from '@mui/icons-material';
import type { ThemedTemplateVariants } from 'global/types';
import { UnstyledButton } from '../UnstyledButton';
import { THEME_FONTS } from 'theme/typography';
import { getButtonThemeColors } from '../utils';
import type { ThemePalette } from 'theme/types';

export type TButtonSize = 'small' | 'medium' | 'large';

const options = {
  shouldForwardProp: (prop: string) => ![
    'variant','size','light','showBorder','shadow',
  ].includes(prop),
};

type StyledButtonProps = {
  size: TButtonSize;
  filled?: boolean;
  variant: ThemedTemplateVariants;
} & BaseButtonProps;

export const StyledButton = styled(UnstyledButton, options)<StyledButtonProps>(({
  theme,
  size,
  shadow,
  filled = false,
  variant,
  showBorder,
}) => {
  const palette = theme.palette as ThemePalette;
  const colors = React.useMemo(() => getButtonThemeColors({ palette, variant, filled, showBorder }), [palette, variant, filled, showBorder]);

  const fontStyles = React.useMemo(() => {
    const sizes = {
      small: THEME_FONTS.textSmSemibold,
      medium: THEME_FONTS.textMdBold,
      large: THEME_FONTS.textLgBold,
    };
    return sizes[size];
  }, [size]);

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
      boxShadow: shadow ? palette.shadow1 : 'none',
    },
    // Icon
    '.btn-icon': {
      marginTop: '-1px',
      fontSize: '1rem',
    },
  };
});

export type TButtonProps = {
  text: string;
  shadow?: boolean;
  size?: TButtonSize;
  filled?: boolean;
  variant?: ThemedTemplateVariants;
  showBorder?: boolean;
  icon?: SvgIconComponent | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} & BaseButtonProps;

export const ThemeButton: React.FC<TButtonProps> = ({
  text,
  type = 'button',
  shadow = true,
  size = 'large',
  icon: Icon,
  variant = 'primary',
  showBorder = false,
  ...props
}) => {

  const withIcon: React.ReactNode | null = React.useMemo(() => {
    if (!Icon) return null;
    return (
      <Box aria-hidden="true" className="btn-icon">
        <Icon fontSize="inherit" />
      </Box>
    );
  }, [Icon]);

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      shadow={shadow}
      showBorder={showBorder}
      {...props}
    >
      {withIcon}{text}
    </StyledButton>
  );
};
