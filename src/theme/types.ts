import type { ThemedTemplateVariants } from 'global/types';

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
  accent?: string;
};

export type ThemedTemplateMap = {
  [key in ThemedTemplateVariants]: ThemedTemplateColorMap;
};

export type ThemePalette = ThemedTemplateMap & {
  neutral: {
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
};