import { type Theme } from '@mui/system';
import type { ButtonStates } from 'theme/types';
import type { ThemedTemplateVariants } from 'global/types';

type FnOptions = {
  theme: Theme;
  variant: ThemedTemplateVariants;
  filled: boolean;
  showBorder: boolean;
};

type ButtonThemeColors = {
  text: string;
  textHover: string;
  textPressed: string;
  textDisabled: string;

  bg: string;
  bgHover: string;
  bgPressed: string;
  bgDisabled: string;

  border: string;
  borderHover: string;
  borderPressed: string;
  borderDisabled: string;
  focusOutline: string;
};

export function getButtonThemeColors({
  theme,
  variant,
  filled,
  showBorder,
}: FnOptions): ButtonThemeColors {
  const { neutral } = theme.styles;
  const colorVariant = theme.styles[variant];
  const colors = filled ? colorVariant.button.filled : colorVariant.button;

  const disabledColors = {
    textDisabled: neutral[70],
    bgDisabled: neutral[10],
    borderDisabled: showBorder ? neutral[40] : 'transparent',
  };

  const borderColors = getBorderColors(colors, showBorder);

  const commonColors = {
    ...borderColors,
    ...disabledColors,
    focusOutline: theme.styles.hyperlink[0],
  };

  return {
    text: colors.text.main,
    textHover: colors.text.hover,
    textPressed: colors.text.pressed,
    
    bg: colors.background.main,
    bgHover: colors.background.hover,
    bgPressed: colors.background.pressed,

    ...commonColors,
  };
}

function getBorderColors(
  colors: ButtonStates,
  showBorder: boolean,
): { border: string; borderHover: string; borderPressed: string } {
  if (!showBorder)
    return {
      border: 'transparent',
      borderHover: 'transparent',
      borderPressed: 'transparent',
    };

  return {
    border: colors.border.main,
    borderHover: colors.border.hover,
    borderPressed: colors.border.pressed,
  };
}
