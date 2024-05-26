import type { ThemedTemplateVariants } from 'global/types';
import type { ThemeFontMap } from './typography';
import zIndex from './zIndex';

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

type ColorBox = {
  surface: { 0: string, 1: string, 2: string };
  border: { 0: string, 1: string, 2: string };
  surfaceContrast: { 0: string, 1: string, 2: string };
  gradients?: { 0: string };
}

export type ElementColorMaps = {
  appbar: ColorBox;
  header: ColorBox;
  main: ColorBox;
};


export type ThemedTemplateColorMap = {
  name: string;
  main: string;
  box: ColorBox;
  shades?: ShadesMap;
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
  neutral: {
    0: string;
    5: string;
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
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

export type BorderRadiusMap = {
  0: string;
  1: string;
  2: string;
  3: string;
  full: string;
};

  export type ThemeStyles = ThemePalette & ThemeFontMap & {
    elements: ElementColorMaps;
    shadow: ThemeShadowMap
    zIndex: typeof zIndex;
  };
