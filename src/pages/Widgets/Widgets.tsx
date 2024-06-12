import React from 'react';
import { Box } from '@mui/system';
import InterestsIcon from '@mui/icons-material/InterestsOutlined';
// import { useGlobalContext } from 'contexts/GlobalContext';
// import { ThemeButton } from 'global/components/Buttons';
import { Tile } from 'global/components/Tile/Tile';
import { PageTitle } from 'global/components/PageTitle';
import { H4, Body } from 'global/components/Typography';
import { AllToastsButton, ErrorToastButton, ModalLaunchButtons, SuccessToastButton } from './components';

export const Widgets = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle
        icon={InterestsIcon}
        title="App Widgets"
        description="Whirligigs & whatnot"
      />
      <Tile
        showBorder
        // variant="info"
        gap={1} 
        elevation={1}
      >
        {/* INTRO TILE */}
        <H4 textAlign="center" component="h3">
          Here we explore a variety of pop-ups, modals, and themed components
        </H4>
      </Tile>
      {/* MODAL TILE  */}
      <Tile
        component="section"
        showBorder
        gap={1}
        // variant="info"
        elevation={1}
        // sx={{ backgroundColor: theme => theme.styles.secondary.box.surface[0] }}
      >
        <H4>Drawers & Modals</H4>
        <Body>
          Modals can have a variety of appearances and behaviors. The essential elements of a modal include a backdrop, a container, and a close button. The container can be a drawer, a dialog, or a pop-up. The close button can be a button, a link, or a gesture. The backdrop can be a darkened overlay, a blurred overlay, or a transparent overlay. The modal can be triggered by a button, a link, a gesture, or a timer. The modal can contain text, images, forms, or other components. The modal can be dismissed by clicking outside the container, pressing the escape key, or clicking the close button.
        </Body>
        <Box display="flex" justifyContent="space-around" flexDirection="row" flexWrap="wrap" gap={1}>
          <ModalLaunchButtons.Modal />
          <ModalLaunchButtons.RightDrawer />
          <ModalLaunchButtons.BottomDrawer />
          <ModalLaunchButtons.ResponsiveDrawer />
        </Box>
      </Tile>
      {/* TOAST TILE */}
      <Tile
        component="section"
        showBorder
        gap={1}
        // variant="special"
        elevation={1}
        // sx={{ backgroundColor: theme => theme.styles.primary.box.surface[0] }}
      >
        <H4>Toasts</H4>
        <Body>
          A toast is a brief message that appears on the screen to provide feedback to the user. Toasts can be used to confirm an action, alert the user to an error, or notify the user of a change in status. Toasts can be displayed at the top, bottom, or center of the screen. Toasts can be styled with different colors, icons, and animations. Toasts can be dismissed by clicking on them, pressing the escape key, or waiting for them to disappear automatically.
        </Body>
        <SuccessToastButton />
        <ErrorToastButton />
        <AllToastsButton />
      </Tile>
    </Box>
  );
};
