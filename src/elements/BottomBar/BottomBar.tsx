import React from 'react';
import { NavItem, ToggleExpandButton, DrawerMenu, DrawerClickaway } from './bin';
import { BottomBarContainer } from './BottomBar.elements';
import { useDrawerContext, DrawerContextProvider } from 'global/components/Drawers/contexts/DrawerContext';
import { NAV_ROUTES_LIST_MOBILE as allLinks } from 'routes';

const BottomBarContent = (): JSX.Element => {
  const { isDrawerVisible } = useDrawerContext();

  const [primaryLinks, drawerLinks] = React.useMemo(() => (
    [allLinks.slice(0, 3), allLinks.slice(3)]
  ), []);

  return (    
    <DrawerClickaway>
      <BottomBarContainer component="nav" isDrawerVisible={isDrawerVisible}>
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
      <DrawerMenu links={drawerLinks} />
    </DrawerClickaway>
  );
};

export const BottomBar: React.FC = () => (
  <DrawerContextProvider>
    <BottomBarContent />
  </DrawerContextProvider>
);
