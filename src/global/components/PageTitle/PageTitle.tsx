import { Box, styled } from '@mui/system';
import FlowerIcon from '@mui/icons-material/LocalFlorist';
import { Hero } from '../Hero';
import { Typography } from '../Typography';
import { MAIN_CONTENT_PAGE_PADDING } from 'layouts/constants';
import { type TNavRoute } from 'routes';

type Props = {
  title: string;
  description?: string;
  icon?: TNavRoute['icon'];
};

export const PageTitle = ({
  title,
  description,
  icon: Icon = FlowerIcon,
}: Props) => {
  return (
    <StyledHeroOuter>
      <StyledHeroInner>
        <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
          <Box component={Icon} alignSelf="start" fontSize={32} display={{ xxs: 'none', sm: 'block' }} />
          <Box
            display="flex"
            flexDirection={{ xxs: 'column', sm: 'row' }}
            alignItems="center"
            gap={{ xxs: 1, sm: 3 }}
          >
            <Box display="flex" flexShrink={0} alignItems="center" gap={{ xxs: 1, xs: 2 }} flexDirection={{ xxs: 'column', xs: 'row' }}>
              <Box component={Icon} fontSize={32} display={{ xxs: 'block', sm: 'none' }} />
              <StyledTitle component="h2">{title}</StyledTitle>
            </Box>
            {description && <StyledDescription component="span">{description}</StyledDescription>}
          </Box>
        </Box>
      </StyledHeroInner>
    </StyledHeroOuter>
  );
};

const StyledTitle = styled(Typography.H3)(({ theme }) => ({
  color: theme.styles.neutral[theme.styles.isDark ? 100 : 5],
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.25rem',
  },
}));

const StyledDescription = styled(Typography.H5)(({ theme }) => ({
  color: theme.styles.neutral[theme.styles.isDark ? 95 : 10],
  fontWeight: 400,
}));

const StyledHeroOuter = styled(Hero)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(3),
  marginTop: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.Y_SM),
  padding: theme.spacing(1, 2),
  color: theme.styles.neutral[10],
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.Y_XXS + 1),
    gap: theme.spacing(2),
  },
}));

const StyledHeroInner = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: theme.spacing(3, 6),
  color: theme.styles.neutral[theme.styles.isDark ? 100 : 10],
  background: theme.styles.elements.main.gradients[1],
  borderRadius: theme.styles.borderRadius.sm,
  border: `1px solid ${theme.styles.primary.shades.dark[1]}`,
  outline: `1px solid ${theme.styles.primary.shades.accent}`,
  boxShadow: theme.styles.shadow[1],
  outlineOffset: '-2px',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 3),
    flexDirection: 'column',
    alignItems: 'start',
    gap: theme.spacing(1),
  },
  [theme.breakpoints.down('xs')]: {
    alignItems: 'center',
  },
}));
