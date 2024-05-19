export const THEME_TEMPLATE_VARIANTS = [
  'primary',
  'secondary',
  'special',
  'success',
  'danger',
  'warning',
  'info',
] as const;

export type ThemedTemplateVariants = typeof THEME_TEMPLATE_VARIANTS[number];
