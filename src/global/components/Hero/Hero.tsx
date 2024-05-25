import { Box, styled } from '@mui/system';
import { MAIN_CONTENT_PAGE_PADDING } from 'layouts/constants';

export const Hero = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1.25, MAIN_CONTENT_PAGE_PADDING.X_SM),
  marginLeft: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.X_SM),
  marginRight: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.X_SM),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, MAIN_CONTENT_PAGE_PADDING.X_XXS),
    marginLeft: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.X_XXS),
    marginRight: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.X_XXS),
  },
}));
