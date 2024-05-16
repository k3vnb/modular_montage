import React from 'react';
import { Box } from '@mui/system';
import { ClickAwayListener, FocusTrap } from '@mui/base';

import { DrawerHeader } from 'global/components/Drawers/BottomDrawer';
import { DrawerContext } from 'global/components/Drawers/contexts/DrawerContext';
import { Backdrop } from 'global/components/Backdrop';
import { DrawerContents } from 'global/components/Drawers/BottomDrawer/BottomDrawer';
import { DrawerList, DrawerNavItem } from './BottomBarDrawer.elements';
import { BOTTOM_BAR_HEIGHT } from '../constants';
import type { TNavRoute } from 'routes';

type DrawerNavMenuProps = {
  links: TNavRoute[];
}

export const DrawerClickaway = ({ children }: React.PropsWithChildren ) => {
  const { open, closeDrawer, transitionDuration } = React.useContext(DrawerContext);
  return (
    <FocusTrap open={open}>
      <Box>
        <Backdrop open={open} transitionDuration={transitionDuration} />
        <ClickAwayListener onClickAway={closeDrawer} mouseEvent="onMouseDown">
          <Box role="presentation">
            {children}
          </Box>
        </ClickAwayListener>
      </Box>
    </FocusTrap>
  );
};

const DRAWER_TITLE = 'More';

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
      <DrawerHeader component="h3">{DRAWER_TITLE}</DrawerHeader>
      <DrawerList.Ul>
        {links.map((link) => (
          <DrawerList.Li key={link.path}>
            <DrawerNavItem {...link} />
          </DrawerList.Li>
        ))}
      </DrawerList.Ul>
    </DrawerContents>
  );
};
