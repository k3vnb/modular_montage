import React from 'react';
import { Stack } from '@mui/system';
import { Divider, StyledListItem, DrawerNavItem } from './BottomBarDrawer.elements';
import { BottomDrawerWrapper, DrawerHeader } from 'global/components/Drawers/BottomDrawer';
import { DrawerContext } from 'global/components/Drawers/contexts/DrawerContext';
import { BOTTOM_BAR_HEIGHT } from '../constants';
import type { TNavRoute } from 'routes';

type DrawerNavMenuProps = {
  links: TNavRoute[];
}

export const BottomBarDrawer: React.FC<DrawerNavMenuProps> = ({ links }) => {
  const { closeDrawer, open, transitionStatus } = React.useContext(DrawerContext);
  
  return (
    <BottomDrawerWrapper
      id="btm-drawer-nav-menu"
      aria-describedby="btm-drawer-nav-menu-header"
      open={open}
      isClosing={transitionStatus.isClosing}
      bottom={BOTTOM_BAR_HEIGHT}
      zIndex={1}
      onClose={closeDrawer}
      maxHeight={`calc(100% - ${BOTTOM_BAR_HEIGHT}px)`}
    >
      <DrawerHeader id="drawer-nav-menu" component="h3">
        More
      </DrawerHeader>
      <Stack divider={<Divider aria-hidden="true" />}>
        {links.map((link) => (
          <StyledListItem key={link.path}>
            <DrawerNavItem {...link} />
          </StyledListItem>
        ))}
      </Stack>
    </BottomDrawerWrapper>
  );
};
