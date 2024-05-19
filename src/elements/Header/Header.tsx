import { Stack, Box, styled } from '@mui/system';
import { THEME_FONTS } from 'theme/typography';

export const Header = (): JSX.Element => {
  return (
    <HeaderWrapper component="header">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="12px 16px"
        sx={{ position: 'relative', zIndex: 1 }}
      >
        <Brand />
      </Stack>
    </HeaderWrapper>
  );
};

const Brand = (): JSX.Element => (
  <>
    <h1 className="sr-only">UX & UI Montage Reviewed</h1>
    <Stack className="brand" aria-hidden="true" alignItems="start" justifyContent="center">
      <Stack direction="row" alignItems="center">
        <StyledTitle mr="4px">Modular</StyledTitle>
        <AdornedText component="span">UX</AdornedText>
      </Stack>
      <Stack direction="row" alignItems="center">
        <AdornedText component="span">UI</AdornedText>
        <StyledTitle ml="4px">Montage</StyledTitle>
      </Stack>
    </Stack>
  </>
);

const StyledTitle = styled(Box)(() => ({
  ...THEME_FONTS.textLgMedium,
  lineHeight: 0.85,
}));

const AdornedText = styled(Box)(() => ({
  alignSelf: 'center',
  ...THEME_FONTS.textLgMedium,
  lineHeight: 0.5,
  fontSize: '0.6rem',
  fontVariant: 'petite-caps',
  fontFamily: 'monospace',
}));

const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  backgroundColor: theme.styles.primary.shades.dark,
  color: theme.styles.neutral[10],
  borderBottom: `0.5px solid ${theme.styles.primary.shades.accent}`,
  '& .brand': {
    textShadow: `0px 1px 0px ${theme.palette.neutral[95]}`,
  },
}));
