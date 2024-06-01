import { Box } from '@mui/system';
import RobotIcon from '@mui/icons-material/SmartToyOutlined';
import { Tile } from 'global/components/Tile/Tile';
import { PageTitle } from 'global/components/PageTitle';
import { Typography } from 'global/components/Typography';

export const Games = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Games" icon={RobotIcon} description="Gregarious gollies" />
      <Tile showBorder gap={1}  elevation={1}>
        <Typography.H4 textAlign="center" mb={1}>Here we exploregames</Typography.H4>
      </Tile>
      <Tile showBorder gap={1} elevation={1}>
        <Typography.H4>Form State</Typography.H4>
      </Tile>
    </Box>
  );
};
