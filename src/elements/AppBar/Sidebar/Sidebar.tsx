import React from 'react';
import { NavMenu, ToggleExpandButton } from './components';
import { OverflowWrapper, RelativeWrapper, SidebarContent } from './Sidebar.elements';
import { NAV_ROUTES_LIST } from 'routes';
import { SIDEBAR_WIDTH, SIDEBAR_OVERFLOW_X_BUFFER } from './constants';

export const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = React.useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, [setExpanded]);

  const width = React.useMemo(() => (
    expanded ? SIDEBAR_WIDTH.expanded : SIDEBAR_WIDTH.collapsed
  ), [expanded]);

  return (
    <RelativeWrapper width={width}>
      <ToggleExpandButton onClick={toggleExpanded} expanded={expanded} />
      <OverflowWrapper minWidth={width + SIDEBAR_OVERFLOW_X_BUFFER}>
        <SidebarContent width={width}>
          <NavMenu.Container>
            {NAV_ROUTES_LIST.map((route) => (
              <NavMenu.Item key={route.path} expanded={expanded} {...route} />
            ))}
          </NavMenu.Container>
        </SidebarContent>
      </OverflowWrapper>
    </RelativeWrapper>
  );
};
