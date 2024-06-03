export const LAYOUT_STYLES = {
  appShell: 'App Shell',
  classic: 'Classic',
} as const;

export type LayoutStyle = typeof LAYOUT_STYLES[keyof typeof LAYOUT_STYLES];
