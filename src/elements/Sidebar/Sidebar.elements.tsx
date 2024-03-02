import { Box, styled } from '@mui/system';
import { Menu, MenuItem } from '@mui/base';
import { UnstyledButton } from 'global/components/Buttons';
import { NavLink } from 'react-router-dom';
import { SIDEBAR_WIDTH, TRANSITION_DURATION } from './constants';
import type { NavRoute } from 'routes';

type ToggleExpandButtonProps = {
  onClick: () => void;
  expanded: boolean;
};

export const ToggleExpandButton = ({ onClick, expanded }: ToggleExpandButtonProps) => {
  return (
    <StyledToggleExpandButton onClick={onClick} aria-expanded={expanded} className={expanded ? 'btnExpanded' : ''} />
  );
};

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

interface NavMenuItemProps extends NavRoute {
  expanded: boolean;
}

export const NavMenuItem = ({ path, label, icon: Icon, expanded }: NavMenuItemProps): JSX.Element => {
  return (
    <MenuItem>
      <Box component={StyledNavLink} to={path} className="showExpanded">
        <Box className="navIcon">
          <Icon fontSize="inherit" />
        </Box>
        <Box className="navLabel expandedLabel">{expanded && label}</Box>
      </Box>
    </MenuItem>
  );
};

export const NavMenu = styled(Menu)(() => ({
  '& > ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}));

const StyledToggleExpandButton = styled(UnstyledButton)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: 32,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.neutral[10],
  transition: `background-color ${TRANSITION_DURATION} ease`,
  transform: 'translateX(50%)',
  '&:hover': {
    backgroundColor: theme.palette.neutral[20],
  },
  '&::after': {
    content: '""',
    width: 0,
    height: 0,
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
    borderLeft: `8px solid ${theme.palette.neutral[60]}`,
    transformOrigin: 'center',
    transition: `transform ${TRANSITION_DURATION}ms ease`,
  },
  '&.btnExpanded': {
    '&::after': {
      transform: 'rotate(180deg)',
    },
  },
}));
