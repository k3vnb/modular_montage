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
}: Props): JSX.Element => {
  return (
    <Hero
      flexDirection="row"
      alignItems="center"
      gap={2}
      marginTop={theme => ({
        xxs: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.Y_XXS + 1),
        sm: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.Y_SM),
      })}
      sx={{
        color: theme => theme.styles.neutral[10],
        padding: theme => theme.spacing(1, 2),
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
        width="100%"
        gap={3}
        padding={theme => ({
          xxs: theme.spacing(2,3),
          md: theme.spacing(3,6),
        })}
        sx={{
          color: theme => theme.styles.neutral[10],
          background: theme => theme.styles.elements.main.gradients[1],
          borderRadius: '4px',
          border: theme => `1px solid ${theme.styles.primary.shades.dark[1]}`,
          outline: theme => `1px solid ${theme.styles.primary.shades.accent}`,
          outlineOffset: '-2px',
          boxShadow: theme => theme.styles.shadow[1],
        }}
      >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={2}
      >
        <Icon fontSize="large" />
        <StyledTitle component="h2">{title}</StyledTitle>
      </Box>
      {description && <StyledDescription component="p">{description}</StyledDescription>}
      </Box>
    </Hero>
  );
};

const StyledTitle = styled(Typography.H3)(({ theme }) => ({
  color: theme.styles.neutral[5],
}));

const StyledDescription = styled(Typography.H5)(({ theme }) => ({
  color: theme.styles.neutral[10],
  fontWeight: 400,
}));
