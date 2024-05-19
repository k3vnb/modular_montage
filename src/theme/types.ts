import type { ThemedTemplateVariants } from 'global/types';

type ShadesMap = {
  neutral: {
    50: string;
    100: string;
  };
  dark: string;
  accent: string;
};

export type ThemedTemplateColorMap = {
  main: string;
  mainHover: string;
  mainActive: string;
  surface: string;
  surfaceHover: string;
  surfaceActive: string;
  border: string;
  borderHover: string;
  borderActive: string;
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
  shadow1: string;
  shadow2: string;
  shadow3: string;
  mode: 'light' | 'dark';
};