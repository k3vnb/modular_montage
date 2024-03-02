import * as React from 'react';
import { Box, Stack, styled } from '@mui/system';
import { NAV_ROUTES_LIST } from 'routes';

import {
  NavMenu,
  NavMenuItem,
  ToggleExpandButton,
} from './Sidebar.elements';

import {
  SIDEBAR_WIDTH,
  TRANSITION_DURATION,
  SIDEBAR_OVERFLOW_X_BUFFER,
} from './constants';

export const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = React.useState(true);

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
        <StyledStack width={width}>
          <NavMenu slots={{ root: 'nav' }}>
            {NAV_ROUTES_LIST.map((route) => (
              <NavMenuItem key={route.path} expanded={expanded} {...route} />
            ))}
          </NavMenu>
        </StyledStack>
      </OverflowWrapper>
    </RelativeWrapper>
  );
};

const transition = `width ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.6, 1) 0ms`;

const RelativeWrapper = styled(Box)(() => ({
  position: 'relative',
  overflow: 'visible',
  transition, 
}));

const OverflowWrapper = styled(Box)(() => ({
  height: '100vh',
  overflowY: 'auto',
  transition,
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  minHeight: '100%',
  height: 'auto',
  padding: '16px 0',
  backgroundColor: theme.palette.neutral[20],
  transition,
}));
