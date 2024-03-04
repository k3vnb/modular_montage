import { Stack, Box, styled } from '@mui/system';
import { THEME_FONTS } from 'theme/typography';

export const Header = (): JSX.Element => {
  return (
    <HeaderWrapper component="header">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="6px 16px"
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
    <Stack aria-hidden="true" alignItems="start" justifyContent="center">
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

const StyledTitle = styled(Box)(({ theme }) => ({
  ...THEME_FONTS.textLgMedium,
  lineHeight: 0.85,
  color: theme.palette.neutral[90],
}));

const AdornedText = styled(Box)(({ theme }) => ({
  alignSelf: 'center',
  ...THEME_FONTS.textLgMedium,
  lineHeight: 0.5,
  fontSize: '0.6rem',
  color: theme.palette.neutral[90],
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
  backgroundColor: theme.palette.primary.surface,
  color: theme.palette.neutral[80],
  borderBottom: `0.5px solid ${theme.palette.primary.border}`,
}));
