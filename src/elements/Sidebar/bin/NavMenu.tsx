import { Box, styled } from '@mui/system';
import { Menu, MenuItem } from '@mui/base';
import { NavLink } from 'react-router-dom';
import { MENU_ID, SIDEBAR_WIDTH, TRANSITION_DURATION } from '../constants';
import type { TNavRoute } from 'routes';
import type { TContainerProps } from 'global/types';

type NavMenuItemProps = TNavRoute & {
  expanded: boolean;
}

const NavMenuContainer = ({ children }: TContainerProps): JSX.Element => {
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
    <MenuItem>
      <Box component={StyledNavLink} to={path} title={label}>
        <Box aria-hidden="true" className="navIcon">
          <Icon fontSize="inherit" />
        </Box>
        <Box>{expanded && label}</Box>
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

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '16px 0px',
  textDecoration: 'none',
  color: theme.palette.neutral[60],
  transition: `all ${TRANSITION_DURATION}ms ease`,
  '> .navIcon': {
    width: SIDEBAR_WIDTH.collapsed,
    minWidth: SIDEBAR_WIDTH.collapsed,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 38,
  },
  '&.active': {
    color: theme.palette.primary.main,
  },
}));
