import { Box } from '@mui/system';
import { Typography } from 'global/components/Typography';

type Props = {
  backgroundColor: string;
  label: string;
};

export const ColorDisplay = ({ backgroundColor, label }: Props) => {
  return (
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Box
          display="flex"
          justifyContent="center"
          borderRadius="50%"
          sx={{
            width: 200,
            height: 200,
            backgroundColor,
          }}
        />
        <Typography.H5 textAlign="center" mb={1}>{label}</Typography.H5>
      </Box>
  );
};
