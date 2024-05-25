import { styled } from '@mui/system';
import { Typography } from '../Typography';
import { Hero } from '../Hero/Hero';
import { MAIN_CONTENT_PAGE_PADDING } from 'layouts/constants';

type Props = {
  title: string;
  description?: string;
};

export const PageTitle = ({ title, description }: Props): JSX.Element => {
  return (
    <Hero
      flexDirection="row"
      alignItems="center"
      gap={2}
      marginTop={theme => ({
        xxs: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.Y_XXS),
        sm: theme.spacing(-MAIN_CONTENT_PAGE_PADDING.Y_SM),
      })}
      sx={{
        background: theme =>  `linear-gradient(0deg, ${theme.styles.primary.shades.dark[0]} 0%, ${theme.styles.primary.main} 12%, ${theme.styles.primary.shades.dark[0]} 99%, transparent 100%)`,
      }}
    >
      <StyledTitle component="h2">{title}</StyledTitle>
      {description && <StyledDescription component="p">{description}</StyledDescription>}
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
