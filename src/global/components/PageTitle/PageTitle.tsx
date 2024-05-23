import { Stack, styled } from '@mui/system';
import { Typography } from '../Typography';

type Props = {
  title: string;
  description?: string;
};

export const PageTitle = ({ title, description }: Props): JSX.Element => {
  return (
    <Stack gap={0.5}>
      <StyledTitle component="h2">{title}</StyledTitle>
      {description && <StyledDescription component="p">{description}</StyledDescription>}
    </Stack>
  );
};

const StyledTitle = styled(Typography.H3)(({ theme }) => ({
  color: theme.styles.neutral[80],
}));

const StyledDescription = styled(Typography.H4)(({ theme }) => ({
  color: theme.styles.neutral[70],
}));
