import { Box, Stack, styled } from '@mui/system';
import { THEME_FONTS as themeFonts } from 'theme/typography';

type Props = {
  title: string;
  description?: string;
};

export const PageTitle = ({ title, description }: Props): JSX.Element => {
  return (
    <Stack gap="20px">
      <StyledTitle component="h2">{title}</StyledTitle>
      {description && <StyledDescription component="p">{description}</StyledDescription>}
    </Stack>
  );
};

const StyledTitle = styled(Box)(({ theme }) => ({
  color: theme.palette.neutral[90],
  ...themeFonts.headingH3
}));

const StyledDescription = styled(Box)(({ theme }) => ({
  color: theme.palette.neutral[80],
  ...themeFonts.textLg
}));
