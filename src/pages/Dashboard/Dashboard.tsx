import { Box } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';

export const Dashboard = (): JSX.Element => {
  
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Dashboard" description="Lorem Ipsum Doleres etc" />
    </Box>
  );
};
