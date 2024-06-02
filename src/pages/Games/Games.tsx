import { Box } from '@mui/system';
import RobotIcon from '@mui/icons-material/SmartToyOutlined';
import { HSLGame } from './components';
import { PageTitle } from 'global/components/PageTitle';
// import { Tile } from 'global/components/Tile/Tile';
// import { Typography } from 'global/components/Typography';

export const Games = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Games" icon={RobotIcon} description="Gregarious gollies" />
      <HSLGame />
    </Box>
  );
};
