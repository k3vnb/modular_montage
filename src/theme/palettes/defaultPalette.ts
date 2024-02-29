import { ThemePalette } from "../types";

const colors = {
  neutral: {
    10: "#F2F2F2",
    15: "#E6E6E6",
    20: "#D9D9D9",
    30: "#CCCCCC",
    40: "#B3B3B3",
    50: "#999999",
    60: "#808080",
    70: "#666666",
    80: "#4D4D4D",
    85: "#333333",
    90: "#1A1A1A",
    100: "#000000",
  },
  primary: {
    main: "#BC16C8",
    surface: "#FFDFFA",
    border: "#6B0E99",
    hover: "#62007A",
    pressed: "#6F0881",
    focus: "#C730E5FF",
    surfaceHover: "#F5B6FF",
  },
  secondary: {
    main: "#1F16C8",
    surface: "#F6F4FF",
    border: "#120E99",
    hover: "#0800E8",
    pressed: "#0D0881",
    focus: "#1F16C833",
    surfaceHover: "#d9d2fd",
  },
  danger: {
    main: "#FF6666",
    surface: "#FFD9D9",
    border: "#FF9999",
    hover: "#CC0000",
    pressed: "#800000",
    focus: "#FF666633",
    surfaceHover: "#FFB2B2",
  },
  warning: {
    main: "#FFB700",
    surface: "#FFF8DC",
    border: "#FFAC59",
    hover: "#E57E00",
    pressed: "#805500",
    focus: "#FFD70033",
    surfaceHover: "#FFE1c0",
  },
  success: {
    main: "#32CD32",
    surface: "#E5FFE5",
    border: "#8DBF8D",
    hover: "#006400",
    pressed: "#004F00",
    focus: "#32CD3233",
    surfaceHover: "#BFE6BF",
  },
  info: {
    main: "#1E90FF",
    surface: "#D3E5FF",
    border: "#70B3FF",
    hover: "#0066CC",
    pressed: "#004080",
    focus: "#1E90FF33",
    surfaceHover: "#B3D4FF",
  },
  special: {
    main: "#CA0058",
    surface: "#FFD7E9",
    border: "#990E21",
    hover: "#A10149",
    pressed: "#990E5D",
    focus: "#990E33",
    surfaceHover: "#FAC6D1",
  },
};

const shadows = {
  shadow1: "0px 2px 4px 0px rgba(0, 0, 0, 0.16)",
  shadow2: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)",
  shadow3: "0px 8px 8px 0px rgba(0, 0, 0, 0.30)",
};

export const themePalette: ThemePalette = {
  ...shadows,
  ...colors,
} as const;
