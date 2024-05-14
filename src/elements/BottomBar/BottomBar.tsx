import React from 'react';
import { FocusTrap } from '@mui/base';
import { NavMenuItem, ToggleExpandButton, BottomBarDrawer } from './bin';
import { BottomBarMenu, StyledMenuItem } from './BottomBar.elements';
import { DrawerContext, DrawerContextProvider } from 'global/components/Drawers/contexts/DrawerContext';
import { NAV_ROUTES_LIST_MOBILE as allLinks } from 'routes';
import { MENU_ID } from './constants';

const BottomBarContent = (): JSX.Element => {
  const { open, isDrawerVisible } = React.useContext(DrawerContext);

  const [primaryLinks, drawerLinks] = React.useMemo(() => (
    [allLinks.slice(0, 3), allLinks.slice(3)]
  ), []);

  const zIndex = React.useMemo(() => (
    isDrawerVisible ? 2 : 'auto'
  ), [isDrawerVisible]);

  return (    
    <FocusTrap open={open}>
      <BottomBarMenu id={MENU_ID} component="nav" isDrawerVisible={isDrawerVisible}>
        <BottomBarDrawer links={drawerLinks} />
        {primaryLinks.map((link) => (
          <StyledMenuItem key={link.path} tabIndex={-1} zIndex={zIndex}>
            <NavMenuItem {...link} />
          </StyledMenuItem>
        ))}
        <StyledMenuItem zIndex={zIndex} tabIndex={-1}>
          <ToggleExpandButton />
        </StyledMenuItem>
      </BottomBarMenu>
    </FocusTrap>      
  );
};

export const BottomBar: React.FC = () => (
  <DrawerContextProvider>
    <BottomBarContent />
  </DrawerContextProvider>
);
