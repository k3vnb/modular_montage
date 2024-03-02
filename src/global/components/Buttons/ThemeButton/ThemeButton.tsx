import * as React from "react";
import { Box, styled } from "@mui/system";
import { Button as BaseButton, type ButtonProps as BaseButtonProps  } from "@mui/base";
import type { SvgIconComponent } from "@mui/icons-material";
import type { ThemedTemplateVariants } from "global/types";
import { UnstyledButton } from "../UnstyledButton";
import { THEME_FONTS } from "theme/typography";

export type TButtonSize = "small" | "medium" | "large";

const options = {
  shouldForwardProp: (prop: string) => ![
    "variant", "size","light","showBorder","shadow",
  ].includes(prop),
};

type StyledButtonProps = {
  size: TButtonSize;
  light?: boolean;
  variant: ThemedTemplateVariants;
} & BaseButtonProps;

export const StyledButton = styled(BaseButton, options)<StyledButtonProps>(({
  theme,
  size,
  shadow,
  light = false,
  variant,
  showBorder,
}) => {
  const { palette } = theme;

  const colors = React.useMemo(() => {
    if (!light) return {
      text: palette.neutral[10],
      textHover: palette.neutral[10],
      textPressed: palette.neutral[10],
      textDisabled: palette.neutral[60],

      bg: palette[variant].main,
      bgHover: palette[variant].hover,
      bgPressed: palette[variant].pressed,
      bgDisabled: palette.neutral[30],

      border: showBorder ? palette[variant].border : "transparent",
      borderHover: showBorder ? palette[variant].focus : "transparent",
      borderPressed: showBorder ? palette[variant].focus : "transparent",
      borderDisabled: showBorder ? palette.neutral[50] : "transparent",
      focusOutline: palette[variant].border,
    };
  
    return {
      text: palette[variant].main,
      textHover: palette[variant].hover,
      textPressed: palette[variant].pressed,
      textDisabled: palette.neutral[60],

      bg: palette[variant].surface,
      bgHover: palette[variant].surfaceHover,
      bgPressed: palette[variant].surface,
      bgDisabled: palette.neutral[30],

      border: showBorder ? palette[variant].main : "transparent",
      borderHover: showBorder ? palette[variant].hover : "transparent",
      borderPressed: showBorder ? palette[variant].pressed : "transparent",
      borderDisabled: showBorder ? palette.neutral[40] : "transparent",
      focusOutline: palette[variant].border,
    };
  }, [palette, variant, light, showBorder]);

  const fontStyles = React.useMemo(() => {
    const sizes = {
      small: THEME_FONTS.textSmSemibold,
      medium: THEME_FONTS.textMdBold,
      large: THEME_FONTS.textLgBold,
    };
    return sizes[size];
  }, [size]);

  const padding = React.useMemo(() => {
    const sizes = {
      small: "6px 16px",
      medium: "8px 16px",
      large: "10px 16px",
    };
    return sizes[size];
  }, [size]);

  return {
    minWidth: "min-content",
    maxWidth: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "8px",
    backgroundColor: colors.bg,
    borderRadius: "4px",
    border: `1.5px solid ${colors.border}`,
    padding,
    color: colors.text,
    cursor: "pointer",
    ...fontStyles,
    lineHeight: 0,
    verticalAlign: "middle",
    "&:hover&:not(:disabled)": {
      color: colors.textHover,
      borderColor: colors.borderHover,
      backgroundColor: colors.bgHover,
    },
    "&:active&:not(:disabled)": {       
      color: colors.textPressed,
      borderColor: colors.borderPressed,
      backgroundColor: colors.bgPressed,
    },
    "&:focus-visible": {
      outline: `3px solid ${colors.focusOutline}`,
    },
    "&:disabled": {
      cursor: "not-allowed",
      color: colors.textDisabled,
      borderColor: colors.borderDisabled,
      backgroundColor: colors.bgDisabled,
    },
    "&:not(:hover, :active, :disabled, :focus)": {
      boxShadow: shadow ? palette.shadow1 : "none",
    },
    // Icon
    ".btn-icon": {
      marginTop: "-1px",
      fontSize: "1rem",
    },
  };
});

export type TButtonProps = {
  text: string;
  shadow?: boolean;
  size?: TButtonSize;
  light?: boolean;
  variant?: ThemedTemplateVariants;
  showBorder?: boolean;
  icon?: SvgIconComponent | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} & BaseButtonProps;

export const ThemeButton: React.FC<TButtonProps> = ({
  text,
  type = "button",
  shadow = true,
  size = "large",
  icon,
  variant = "primary",
  showBorder = false,
  ...props
}) => {

  const withIcon: React.ReactNode | null = React.useMemo(() => {
    if (!icon) return null;
    const Icon = icon;
    return (
      <Box className="btn-icon">
        <Icon fontSize="inherit" />
      </Box>
    );
  }, [icon]);

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      shadow={shadow}
      showBorder={showBorder}
      {...props}
    >
      {withIcon}{text}
    </StyledButton>
  );
};
