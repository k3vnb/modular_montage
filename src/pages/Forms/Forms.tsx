import { Box } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';
// import { useGlobalContext } from 'contexts/GlobalContext';
import { ThemeButton } from 'global/components/Buttons';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import RobotIcon from '@mui/icons-material/SmartToyOutlined';

export const Forms = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="App Forms" icon={RobotIcon} description="Forms of forms" />
      <Tile showBorder variant="info" gap={1}  elevation={1}>
        <Typography.H4 textAlign="center" mb={1}>Here we explore form validation, form state, and input types</Typography.H4>
      </Tile>
      <Tile showBorder gap={1} variant="info" elevation={1}>
        <Typography.H4>Form State</Typography.H4>
        <ThemeButton filled text="Open a modal" />
      </Tile>
    </Box>
  );
};
