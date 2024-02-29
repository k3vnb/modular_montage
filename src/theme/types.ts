export type ThemedTemplateVariants =
  | "primary"
  | "secondary"
  | "info"
  | "danger"
  | "warning"
  | "success"
  | "special";

export type ThemedTemplateColorMap = {
  main: string;
  surface: string;
  border: string;
  hover: string;
  pressed: string;
  focus: string;
  surfaceHover: string;
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