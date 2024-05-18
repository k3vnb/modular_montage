import type { ThemedTemplateVariants } from 'global/types';
import type { ThemePalette, ThemedTemplateColorMap } from 'theme/types';

type FnOptions = {
  palette: ThemePalette;
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
  palette,
  variant,
  filled,
  showBorder,
}: FnOptions): ButtonThemeColors {
  const { neutral } = palette;
  const colorVariant = palette[variant];

  const disabledColors = {
    textDisabled: neutral[70],
    bgDisabled: neutral[10],
    borderDisabled: showBorder ? neutral[40] : 'transparent',
  };

  const borderColors = getBorderColors(colorVariant, showBorder);

  const commonColors = {
    ...borderColors,
    ...disabledColors,
    focusOutline: palette.info.mainActive,
  };

  if (filled)
    return {
      text: neutral[0],
      textHover: neutral[10],
      textPressed: neutral[10],

      bg: colorVariant.main,
      bgHover: colorVariant.mainHover,
      bgPressed: colorVariant.mainActive,

      ...commonColors,
    };

  return {
    text: colorVariant.main,
    textHover: colorVariant.mainHover,
    textPressed: colorVariant.mainActive,

    bg: colorVariant.surface,
    bgHover: colorVariant.surfaceHover,
    bgPressed: colorVariant.surface,

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
    border: colorVariant.border,
    borderHover: colorVariant.borderHover,
    borderPressed: colorVariant.borderActive,
  };
}
