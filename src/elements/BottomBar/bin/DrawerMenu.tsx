import React from 'react';
import { Box } from '@mui/system';
import { ClickAwayListener, FocusTrap } from '@mui/base';

import { DrawerHeader } from 'global/components/Drawers/BottomDrawer';
import { useDrawerContext } from 'global/components/Drawers/contexts/DrawerContext';
import { Backdrop } from 'global/components/Backdrop';
import { BottomDrawerBase } from 'global/components/Drawers/BottomDrawer';
import { DrawerList } from './DrawerMenu.elements';
import { BOTTOM_BAR_HEIGHT, MENU_ID } from '../constants';
import type { TNavRoute } from 'routes';

type DrawerNavMenuProps = {
  links: TNavRoute[];
}

export const DrawerClickaway = ({ children }: React.PropsWithChildren ) => {
  const { open, closeDrawer, transitionDuration } = useDrawerContext();
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

export const DrawerMenu: React.FC<DrawerNavMenuProps> = ({ links }) => {
  const { closeDrawer, open, transitionStatus } = useDrawerContext();
  return (
    <BottomDrawerBase
      id={MENU_ID}
      aria-label="Expanded navigation menu"
      role="presentation"
      open={open}
      isClosing={transitionStatus.isClosing}
      bottom={BOTTOM_BAR_HEIGHT}
      onClose={closeDrawer}
      maxHeight={`calc(90% - ${BOTTOM_BAR_HEIGHT}px)`}
    >
      <DrawerHeader component="h3">{DRAWER_TITLE}</DrawerHeader>
      <DrawerList.Container>
        {links.map((link) => (
          <DrawerList.Item key={link.path} {...link} />
        ))}
      </DrawerList.Container>
    </BottomDrawerBase>
  );
};
