// hue gradient is a rainbow gradient that matches hsl degree values
export const HUE_GRADIENT = 'linear-gradient(90deg, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))';

// light gradient is a grayscale gradient that matches hsl lightness values
export const LIGHT_GRADIENT = 'linear-gradient(90deg, hsl(0, 0%, 0%), hsl(0, 0%, 50%), hsl(0, 0%, 100%))';

export const HSL_VAL_KEYS = ['hue', 'saturation', 'light'] as const;
export const INIT_HSL_GUESS_VALS = { hue: 180, saturation: 50, light: 50 } as const;
export const INIT_HSL_HINTS = { hue: '', saturation: '', light: '' } as const;

export const RGB_VAL_KEYS = ['red', 'green', 'blue'] as const;
export const INIT_RGB_GUESS_VALS = { red: 0, green: 0, blue: 0 } as const;
export const INIT_RGB_HINTS = { red: '', green: '', blue: '' } as const;
