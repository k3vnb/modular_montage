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
    main: "#1F16C8",
    surface: "#e6e1ff",
    border: "#120E99",
    hover: "#150FAD",
    pressed: "#0D0881",
    focus: "#1F16C833",
    surfaceHover: "#9385D6",
  },
  secondary: {
    main: "#20B2AA",
    surface: "#A8E3E3",
    border: "#149F9F",
    hover: "#108888",
    pressed: "#0C6F6F",
    focus: "#20B2AA33",
    surfaceHover: "#91D7D7",
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
    main: "#FFD700",
    surface: "#FFF8DC",
    border: "#FFC759",
    hover: "#E5A600",
    pressed: "#806600",
    focus: "#FFD70033",
    surfaceHover: "#FFE9C0",
  },
  success: {
    main: "#32CD32",
    surface: "#D3EAD3",
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
    main: "#40E0D0",
    surface: "#B2F5EA",
    border: "#00B3A6",
    hover: "#00A399",
    pressed: "#00857A",
    focus: "#40E0D033",
    surfaceHover: "#8EDDE0",
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
