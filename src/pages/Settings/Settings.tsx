import { Box, Stack } from '@mui/system';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import { Tile } from 'global/components/Tile/Tile';
import { PageTitle } from 'global/components/PageTitle';
import { Typography } from 'global/components/Typography';
import { LayoutStyleRadioButtons, ThemeRadioButtons } from './components';

export const Settings = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Settings" icon={SettingsIcon} />
      {/* THEME SELECTOR */}
      <Box display="flex" flexDirection="row" gap={3}>
        <Tile gap={1} variant="info" elevation={1} width={{ xxs: '100%', md: '70%' }} flexShrink={0}>
          <Typography.H4 textAlign="center">Theme Settings</Typography.H4>
          <Stack gap={1.5}>
            <Typography.Body textAlign="center">
              Adjust the application's color scheme.
            </Typography.Body>
            <Box display="flex" alignItems="center" justifyContent={{ xxs: 'space-between', sm: 'start' }} gap={2.5}>
              <ThemeRadioButtons />
            </Box>
          </Stack>
        </Tile>
      </Box>
      {/* LAYOUT SELECTOR */}
      <Box display="flex" flexDirection="row-reverse" gap={3}>
        <Tile flexShrink={0} gap={1} variant="info" elevation={1} width={{ xxs: '100%', md: '70%' }}>
          <Typography.H4 textAlign="center">Layout Selector</Typography.H4>
          <Stack gap={1.5}>
            <Typography.Body textAlign="center">
              Adjust the application's layout.
            </Typography.Body>
            <Box display="flex" alignItems="center" justifyContent={{ xxs: 'space-between', sm: 'start' }} gap={2.5}>
              <LayoutStyleRadioButtons />
            </Box>
          </Stack>
        </Tile>
      </Box>
    </Box>
  );
};
