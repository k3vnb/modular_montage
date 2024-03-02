import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/system';
import ArrowLeft from '@mui/icons-material/WestOutlined';
import { ROUTES } from 'routes';

export const NotFoundPage = (): JSX.Element => {
  return (
    <Stack gap="20px">
      <h2>Not Found</h2>
      <span>Sorry, the page you are looking for does not exist.</span>
        <Box display="flex" alignItems="center" gap="10px" component={Link} to={ROUTES.dashboard.path}>
          <ArrowLeft fontSize="small" /> Go to Dashboard
        </Box>
    </Stack>
  );
};
