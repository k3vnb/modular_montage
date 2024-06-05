import { Box } from '@mui/system';
import RobotIcon from '@mui/icons-material/SmartToyOutlined';
import { PageTitle } from 'global/components/PageTitle';
import { HSLGame, RGBGame } from './components/ColorGames';

export const Games = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Games" icon={RobotIcon} />
      <HSLGame />
      <RGBGame />
    </Box>
  );
};
