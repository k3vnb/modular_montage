import { Box, Stack } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';
import { Outlet } from 'react-router-dom';

type Props = {
  title: string;
  isSubroute?: boolean;
  hasSubroutes?: boolean;
};

export const PlaceholderPage = ({ title, isSubroute = false, hasSubroutes = false }: Props): JSX.Element => {
  if (isSubroute) {
    return (
      <Box>
        <h3>{title}</h3>
        {hasSubroutes && <Outlet />}
      </Box>
    );
  }

  return (
    <Stack gap="20px">
      <PageTitle title={title} />
      {hasSubroutes && <Outlet />}
    </Stack>
  );
};
