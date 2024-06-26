import type { ThemedTemplateVariants } from 'global/types';
import type { ThemeFontMap } from './typography';
import zIndex from './zIndex';
import borderRadius from './borderRadius';

export type ShadesMap = {
  neutral: {
    50: string;
    100: string;
  };
  dark: {
    0: string;
    1: string;
    2: string;
  }
  accent: string;
  gradient: {
    0: string;
  }
};

type ButtonMap = {
  main: string;
  hover: string;
  pressed: string;
};

export type ButtonStates = {
  text: ButtonMap;
  background: ButtonMap;
  border: ButtonMap;
};

type ButtonColorMap = ButtonStates & {
  filled: ButtonStates;
}

export type ColorBox = {
  surface: { 0: string, 1: string, 2: string };
  border: { 0: string, 1: string, 2: string };
  surfaceContrast: { 0: string, 1: string, 2: string };
  gradients: { 0: string, 1: string, 2: string};
}

export type ElementColorMaps = {
  appbar: ColorBox;
  header: ColorBox;
  main: ColorBox;
  flyout: {
    text: string;
    textActive: string;
    surface: string;
    surfaceActive: string;
  };
  yantra: string[];
};

export type ThemedTemplateColorMap = {
  name: string;
  main: string;
  box: ColorBox;
  shades?: ShadesMap;
  button: ButtonColorMap;
};

type TMap = {
  [key in ThemedTemplateVariants]: ThemedTemplateColorMap;
};

export type ThemedTemplateMap = Omit<TMap, 'primary'> & {
  primary: ThemedTemplateColorMap & {
    shades: ShadesMap;
  };
};

export type ThemePalette = ThemedTemplateMap & {
  hyperlink: {
    0: string;
    1: string;
  };
  neutral: {
    0: string;
    5: string;
    10: string;
    15: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    95: string;
    100: string;
  };
  mode: 'light' | 'dark';
};

export type ThemeShadowMap = {
  0: string;
  1: string;
  2: string;
  3: string;
}

export type ThemeStyles = ThemePalette & ThemeFontMap & {
  elements: ElementColorMaps;
  shadow: ThemeShadowMap
  zIndex: typeof zIndex;
  borderRadius: typeof borderRadius;
  isDark?: boolean;
};
