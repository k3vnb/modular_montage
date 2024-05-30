export const LAYOUT_STYLES = {
  appShell: 'appShell',
  classic: 'classic',
} as const;

export type LayoutStyle = typeof LAYOUT_STYLES[keyof typeof LAYOUT_STYLES];
