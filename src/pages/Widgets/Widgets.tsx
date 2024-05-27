import React from 'react';
import { Box } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';
import InterestsIcon from '@mui/icons-material/InterestsOutlined';
// import { useGlobalContext } from 'contexts/GlobalContext';
import { ThemeButton } from 'global/components/Buttons';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import { ModalLaunchButtons } from './components';

export const Widgets = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="App Widgets" icon={InterestsIcon} description="Whirligigs & whatnot" />
      <Tile showBorder variant="info" gap={1}  elevation={1}>
        <Typography.H4 textAlign="center" mb={1}>Here we explore a variety of pop-ups, modals, and themed components</Typography.H4>
      </Tile>
      <Tile showBorder gap={1} variant="info" elevation={1}>
        <Typography.H4>Drawers & Modals</Typography.H4>
        <Box display="flex" justifyContent="space-around" flexDirection="row" flexWrap="wrap" gap={1}>
          <ModalLaunchButtons.Modal />
          <ModalLaunchButtons.RightDrawer />
          <ModalLaunchButtons.BottomDrawer />
          <ModalLaunchButtons.ResponsiveDrawer />
        </Box>
      </Tile>
      <Tile showBorder gap={1} variant="special" elevation={1}>
        <Typography.H4>Toasts</Typography.H4>
        <ThemeButton variant="info" text="Show a success toast" />
        <ThemeButton filled text="Show all the toasts" />
      </Tile>
    </Box>
  );
};
