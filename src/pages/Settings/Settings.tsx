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

      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={3} p={{ xxs: 4, sm: 0 }}>
      {/* THEME SELECTOR */}
        <Tile showBorder gap={1} elevation={1} flexShrink={0} minWidth={340}>
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
      {/* LAYOUT SELECTOR */}
        <Tile showBorder flexShrink={0} gap={1} elevation={1} minWidth={340}>
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
