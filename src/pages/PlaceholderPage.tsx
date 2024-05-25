import { Box, Stack } from '@mui/system';
import { Outlet } from 'react-router-dom';
import { PageTitle } from 'global/components/PageTitle';
import { type TNavRoute } from 'routes';

type Props = {
  title: string;
  isSubroute?: boolean;
  hasSubroutes?: boolean;
  icon?: TNavRoute['icon'];
};

export const PlaceholderPage = ({ title, icon, isSubroute = false, hasSubroutes = false }: Props): JSX.Element => {
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
      <PageTitle title={title} icon={icon} />
      {hasSubroutes && <Outlet />}
    </Stack>
  );
};
