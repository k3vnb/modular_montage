import { Box, Stack } from '@mui/system';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';

export const IntroTile = () => {
  return (
    <Box component="section">
      <Tile showBorder gap={3} elevation={1}>
        <Typography.H2 component="h3" textAlign="center">
          Welcome to Modular Montage
        </Typography.H2>
        <Stack gap={1}>
          <Typography.Body>
            This app is dedicated to the exploration of themes, layout, and components in a clientside rendered environment.
          </Typography.Body>
          <Typography.Body>
            This is a dashboard page. It is a place where you can see the themes & layout design in action.
          </Typography.Body>
          <Typography.Body>
            The 'Widgets page' will explore assortments of popups, modals, toasts and other components.
          </Typography.Body>
          <Typography.Body>
            The 'Forms page' will explore form state, styling and validation.
          </Typography.Body>
        </Stack>
      </Tile>
    </Box>
  );
};
