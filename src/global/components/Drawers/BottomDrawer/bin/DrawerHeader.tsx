import { Box, styled } from '@mui/system';
import { THEME_FONTS } from 'theme/typography';

export const DrawerHeader = styled(Box)(({ theme }) => ({
  ...THEME_FONTS.headingH3,
  color: theme.palette.neutral[90],
}));
