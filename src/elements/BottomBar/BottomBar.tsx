import React from 'react';
import { NavItem, ToggleExpandButton, BottomBarDrawer, DrawerClickaway } from './bin';
import { BottomBarContainer } from './BottomBar.elements';
import { useDrawerContext, DrawerContextProvider } from 'global/components/Drawers/contexts/DrawerContext';
import { NAV_ROUTES_LIST_MOBILE as allLinks } from 'routes';
import { MENU_ID } from './constants';

const BottomBarContent = (): JSX.Element => {
  const { isDrawerVisible } = useDrawerContext();

  const [primaryLinks, drawerLinks] = React.useMemo(() => (
    [allLinks.slice(0, 3), allLinks.slice(3)]
  ), []);

  return (    
    <DrawerClickaway>
      <BottomBarContainer
        component="nav"
        id={MENU_ID}
        isDrawerVisible={isDrawerVisible}
      >
        <ul>
          {primaryLinks.map((link) => (
            <li key={link.path} tabIndex={-1}>
              <NavItem {...link} />
            </li>
          ))}
          <li tabIndex={-1}>
            <ToggleExpandButton />
          </li>
        </ul>
      </BottomBarContainer>
      <BottomBarDrawer links={drawerLinks} />
    </DrawerClickaway>
  );
};

export const BottomBar: React.FC = () => (
  <DrawerContextProvider>
    <BottomBarContent />
  </DrawerContextProvider>
);
