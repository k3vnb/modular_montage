import { Stack } from '@mui/system';
import { Typography } from 'global/components/Typography';

type Props = {
  title: string;
  description: string;
};

export const TileHeader = ({ title, description }: Props) => {
  return (
    <Stack gap={1} textAlign="center">
      <Typography.H3>{title}</Typography.H3>
      <Typography.H5 component="div" sx={{ fontWeight: 400 }}>
        {description}
      </Typography.H5>
    </Stack>
  );
};
