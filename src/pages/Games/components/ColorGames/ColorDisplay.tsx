import { Box } from '@mui/system';
import { Typography } from 'global/components/Typography';

type Props = {
  backgroundColor: string;
  label: string;
};

const XXS_SIZE = 80;
const SM_SIZE = 100;

export const ColorDisplay = ({ backgroundColor, label }: Props) => {
  return (
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography.H6 textAlign="center" mb={1}>{label}</Typography.H6>
        <Box
          display="flex"
          justifyContent="center"
          borderRadius="50%"
          sx={{
            width: { xxs: XXS_SIZE, sm: SM_SIZE },
            height: { xxs: XXS_SIZE, sm: SM_SIZE },
            backgroundColor,
          }}
        />
      </Box>
  );
};
