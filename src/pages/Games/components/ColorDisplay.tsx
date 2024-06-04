import { Box } from '@mui/system';
import { Typography } from 'global/components/Typography';

type Props = {
  backgroundColor: string;
  label: string;
};

export const ColorDisplay = ({ backgroundColor, label }: Props) => {
  return (
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography.H6 textAlign="center" mb={1}>{label}</Typography.H6>
        <Box
          display="flex"
          justifyContent="center"
          borderRadius="50%"
          sx={{
            width: { xxs: 100, sm: 200 },
            height: { xxs: 100, sm: 200 },
            backgroundColor,
          }}
        />
      </Box>
  );
};
