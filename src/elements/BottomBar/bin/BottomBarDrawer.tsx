import React from 'react';
import { Box, Stack } from '@mui/system';
import { ClickAwayListener, FocusTrap } from '@mui/base';

import { Divider, StyledListItem, DrawerNavItem } from './BottomBarDrawer.elements';
import { DrawerHeader } from 'global/components/Drawers/BottomDrawer';
import { DrawerContext } from 'global/components/Drawers/contexts/DrawerContext';
import { BOTTOM_BAR_HEIGHT } from '../constants';
import { Backdrop } from 'global/components/Backdrop';
import { TRANSITION_DURATION } from 'global/components/Drawers/constants';
import { DrawerContents } from 'global/components/Drawers/BottomDrawer/BottomDrawer';
import type { TNavRoute } from 'routes';

type DrawerNavMenuProps = {
  links: TNavRoute[];
}

export const DrawerClickaway = ({ children }: React.PropsWithChildren ) => {
  const { open, closeDrawer } = React.useContext(DrawerContext);
  return (
    <FocusTrap open={open}>
      <Box>
        <Backdrop open={open} transitionDuration={TRANSITION_DURATION} />
        <ClickAwayListener onClickAway={closeDrawer} mouseEvent="onMouseDown">
          <Box role="presentation">
            {children}
          </Box>
        </ClickAwayListener>
      </Box>
    </FocusTrap>
  );
};

export const BottomBarDrawer: React.FC<DrawerNavMenuProps> = ({ links }) => {
  const { closeDrawer, open, transitionStatus } = React.useContext(DrawerContext);
  
  return (
    <DrawerContents
      id="btm-drawer-nav-menu"
      aria-label="Expanded navigation menu"
      role="presentation"
      open={open}
      isClosing={transitionStatus.isClosing}
      bottom={BOTTOM_BAR_HEIGHT}
      zIndex={1}
      onClose={closeDrawer}
      maxHeight={`calc(90% - ${BOTTOM_BAR_HEIGHT}px)`}
    >
      <DrawerHeader component="h3"> More </DrawerHeader>
      <Stack divider={<Divider aria-hidden="true" />}>
        {links.map((link) => (
          <StyledListItem key={link.path}>
            <DrawerNavItem {...link} />
          </StyledListItem>
        ))}
      </Stack>
    </DrawerContents>
  );
};
