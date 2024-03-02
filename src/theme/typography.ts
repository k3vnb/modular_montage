type FontStyleCSSProperties = {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  letterSpacing: string;
  lineHeight: string;
  fontStyle?: string;
};

type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl';

export const fontFamily = 'Poppins, Arial, sans-serif';

const sizeDefaults: Record<Sizes, Omit<FontStyleCSSProperties, 'fontWeight' | 'fontFamily'>> = {
  xs: {
    fontSize: '0.7rem',
    lineHeight: '0.8rem',
    letterSpacing: 'normal',
  },
  s: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: 'normal',
  },
  m: {
    fontSize: '0.85rem',
    lineHeight: '1.125rem',
    letterSpacing: 'normal',
  },
  l: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '-0.176px',
  },
  xl: {
    fontSize: '2.25rem',
    lineHeight: '3rem',
    letterSpacing: '-0.396px',
  },
};

const fontStyles = {
  'text-xs-regular': {
    ...sizeDefaults.xs,
    fontFamily,
    fontWeight: 400,
  },
  'text-s-regular': {
    ...sizeDefaults.s,
    fontFamily,
    fontWeight: 400,
  },
  'text-s-semibold': {
    ...sizeDefaults.s,
    fontFamily,
    fontWeight: 600,
  },
  'text-s-bold': {
    ...sizeDefaults.s,
    fontFamily,
    fontWeight: 700,
  },
  'text-m-regular': {
    ...sizeDefaults.m,
    fontFamily,
    fontWeight: 300,
  },
  'text-m-medium': {
    ...sizeDefaults.m,
    fontFamily,
    fontWeight: 500,
  },
  'text-m-semibold': {
    ...sizeDefaults.m,
    fontFamily,
    fontWeight: 600,
  },
  'text-m-bold': {
    ...sizeDefaults.m,
    fontFamily,
    fontWeight: 700,
    letterSpacing: '0.2px',
  },
  'text-m-italic': {
    ...sizeDefaults.m,
    fontFamily,
    fontWeight: 400,
    fontStyle: 'italic',
  },
  'text-m-extrabold': {
    ...sizeDefaults.m,
    fontFamily,
    fontWeight: 800,
    letterSpacing: '0.2px',
  },
  'text-l-regular': {
    ...sizeDefaults.l,
    fontFamily,
    fontWeight: 300,
  },
  'text-l-medium': {
    ...sizeDefaults.l,
    fontFamily,
    fontWeight: 500,
  },
  'text-l-semibold': {
    ...sizeDefaults.l,
    fontFamily,
    fontWeight: 600,
  },
  'text-l-bold': {
    ...sizeDefaults.l,
    fontFamily,
    fontWeight: 700,
    letterSpacing: '0.25px',
  },
  'text-xl-regular': {
    ...sizeDefaults.xl,
    fontFamily,
    fontWeight: 400,
  },
  'subtitle-regular': {
    fontFamily,
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    letterSpacing: '-0.22px',
  },
  'subtitle-semibold': {
    fontFamily,
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    letterSpacing: '-0.22px',
  },
  'heading-h1': {
    fontFamily,
    fontWeight: 600,
    fontSize: '3rem',
    lineHeight: '3.75rem',
    letterSpacing: '-0.75px',
  },
  'heading-h1-mobile': {
    fontFamily,
    fontWeight: 600,
    fontSize: '2.5rem',
    lineHeight: '2.5rem',
    letterSpacing: '-0.6px',
  },
  'heading-h2': {
    fontFamily,
    fontWeight: 500,
    fontSize: '2.5rem',
    lineHeight: '2.85rem',
    letterSpacing: '-1.1px',
  },
  'heading-h2-mobile': {
    fontFamily,
    fontWeight: 500,
    fontSize: '1.9rem',
    lineHeight: '1.9rem',
    letterSpacing: '-0.25px',
  },
  'heading-h3': {
    fontFamily,
    fontWeight: 400,
    fontSize: '1.75rem',
    lineHeight: '2.25rem',
    letterSpacing: 'normal',
  },
  'heading-h4': {
    fontFamily,
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    letterSpacing: 'normal',
  },
  'heading-h5': {
    fontFamily,
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.15px',
  },
  'heading-h6': {
    fontFamily,
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
    letterSpacing: '0.15px',
  },
};

const fontStyleVariants = {
  textXs: fontStyles['text-xs-regular'],
  textSm: fontStyles['text-s-regular'],
  textSmSemibold: fontStyles['text-s-semibold'],
  textSmBold: fontStyles['text-s-bold'],
  textMd: fontStyles['text-m-regular'],
  textMdMedium: fontStyles['text-m-medium'],
  textMdSemibold: fontStyles['text-m-semibold'],
  textMdBold: fontStyles['text-m-bold'],
  textMdItalic: fontStyles['text-m-italic'],
  textMdExtrabold: fontStyles['text-m-extrabold'],
  textLg: fontStyles['text-l-regular'],
  textLgMedium: fontStyles['text-l-medium'],
  textLgSemibold: fontStyles['text-l-semibold'],
  textLgBold: fontStyles['text-l-bold'],
  textXl: fontStyles['text-xl-regular'],
  subtitle: fontStyles['subtitle-regular'],
  subtitleSemibold: fontStyles['subtitle-semibold'],
  headingH1: fontStyles['heading-h1'],
  headingH1Mobile: fontStyles['heading-h1-mobile'],
  headingH2: fontStyles['heading-h2'],
  headingH2Mobile: fontStyles['heading-h2-mobile'],
  headingH3: fontStyles['heading-h3'],
  headingH4: fontStyles['heading-h4'],
  headingH5: fontStyles['heading-h5'],
  headingH6: fontStyles['heading-h6'],
};

type ThemeFontKeys = keyof typeof fontStyleVariants;
type ThemeFontMap  = Record<ThemeFontKeys, FontStyleCSSProperties>;
export const THEME_FONTS: ThemeFontMap = {...fontStyleVariants};

const themeFontKeyList: ThemeFontKeys[] = Object.keys(THEME_FONTS) as ThemeFontKeys[];
export const themeFontKeys= Object.fromEntries(themeFontKeyList.map(key => [key, key])) as Record<ThemeFontKeys, ThemeFontKeys>;
