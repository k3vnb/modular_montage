import type { Theme } from '@mui/system';
import type { ThemedTemplateVariants } from 'global/types';
import type { ThemedTemplateColorMap } from 'theme/types';

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
  const { surface, surfaceContrast } = colorVariant.box;

  const disabledColors = {
    textDisabled: neutral[70],
    bgDisabled: neutral[10],
    borderDisabled: showBorder ? neutral[40] : 'transparent',
  };

  const borderColors = getBorderColors(colorVariant, showBorder);

  const commonColors = {
    ...borderColors,
    ...disabledColors,
    focusOutline: theme.palette.info.mainActive,
  };

  if (filled) {
    return {
      text: neutral[0],
      textHover: neutral[10],
      textPressed: neutral[10],

      bg: surfaceContrast[0],
      bgHover: surfaceContrast[1],
      bgPressed: surfaceContrast[2],
      
      ...commonColors,
    };
  }

  return {
    text: surfaceContrast[0],
    textHover: surfaceContrast[1],
    textPressed: surfaceContrast[2],
    
    bg: surface[0],
    bgHover: surface[1],
    bgPressed: surface[2],

    ...commonColors,
  };
}

function getBorderColors(
  colorVariant: ThemedTemplateColorMap,
  showBorder: boolean
): { border: string; borderHover: string; borderPressed: string } {
  if (!showBorder)
    return {
      border: 'transparent',
      borderHover: 'transparent',
      borderPressed: 'transparent',
    };

  return {
    border: colorVariant.box.border[0],
    borderHover: colorVariant.box.border[1],
    borderPressed: colorVariant.box.border[2],
  };
}
