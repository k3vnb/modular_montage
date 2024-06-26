import type { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { Menu, MenuItem } from '@mui/base';
import { MENU_ID, SIDEBAR_WIDTH, TRANSITION_DURATION } from '../constants';
import type { TNavRoute } from 'routes';

type NavMenuItemProps = TNavRoute & {
  expanded: boolean;
}

const NavMenuContainer = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <StyledNavMenu
      id={MENU_ID}
      slots={{ root: 'nav' }}
    >
      {children}
    </StyledNavMenu>
  );
};

const NavMenuItem = ({ path, label, icon: Icon, expanded }: NavMenuItemProps): JSX.Element => {
  return (
    <MenuItem tabIndex={-1}>
      <Box component={StyledNavLink} to={path} title={label}>
        <Box aria-hidden="true" className="iconContainer">
          <Icon fontSize="inherit" className="navIcon" />
        </Box>
        <Box className={`label ${expanded ? 'expanded' : ''}`}>{expanded && label}</Box>
      </Box>
    </MenuItem>
  );
};

export const NavMenu = {
  Container: NavMenuContainer,
  Item: NavMenuItem,
};

const StyledNavMenu = styled(Menu)(() => ({
  '& > ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}));

const StyledNavLink = styled(NavLink)(({ theme }) => {
  const { appbar } = theme.styles.elements;
  const rounded = `${theme.shape.borderRadius}px`;
  const borderOffset = 4;
  
  return {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '16px 0px',
    textDecoration: 'none',
    letterSpacing: '0.5px',
    color: appbar.surfaceContrast[0],
    transitionProperty: 'color, background-color, box-shadow',
    transitionDuration: `${TRANSITION_DURATION}ms`,
    transitionTimingFunction: 'ease',
    borderBottom: '1px solid transparent',
    '> .iconContainer': {
      width: SIDEBAR_WIDTH.collapsed,
      minWidth: SIDEBAR_WIDTH.collapsed,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 38,
    },
    '&.active': {
      color: appbar.surfaceContrast[1],
      backgroundColor: appbar.surface[1],
      fontWeight: 600,
      letterSpacing: '0px',
      borderColor: appbar.border[1],
      borderWidth: `0 0 0 ${borderOffset}px`,
      borderStyle: 'solid',
      borderRadius: `0 ${rounded} ${rounded} 0`,
      width: 'calc(100% + 4px)',
      boxShadow: theme.styles.shadow[1],
      '> .iconContainer': {
        marginLeft: `-${borderOffset}px`,
      },
    },
    '.label': {
      opacity: 0,
      transition: `opacity ${TRANSITION_DURATION}ms ease ${TRANSITION_DURATION}ms`,
      '&.expanded': {
        opacity: 1,
      },
    },
    '&:hover&:not(.active)': {
      color: appbar.surfaceContrast[1],
      fontWeight: 500,
    },
  };
});
