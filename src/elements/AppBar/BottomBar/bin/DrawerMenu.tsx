import React from 'react';
import { BottomDrawerHeader } from 'global/components/Drawers/BottomDrawer';
import { useDrawerContext } from 'global/components/Drawers/contexts/DrawerContext';
import { BottomDrawerBase } from 'global/components/Drawers/BottomDrawer';
import { DrawerList } from './DrawerMenu.elements';
import { BOTTOM_BAR_HEIGHT, MENU_ID } from '../constants';
import type { TNavRoute } from 'routes';

type DrawerNavMenuProps = {
  links: TNavRoute[];
}

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
      <BottomDrawerHeader component="h3">{DRAWER_TITLE}</BottomDrawerHeader>
      <DrawerList.Container>
        {links.map((link) => (
          <DrawerList.Item key={link.path} {...link} />
        ))}
      </DrawerList.Container>
    </BottomDrawerBase>
  );
};
