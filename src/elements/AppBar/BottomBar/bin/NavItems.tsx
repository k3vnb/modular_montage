import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import MoreIcon from '@mui/icons-material/MoreHorizOutlined';

import { UnstyledButton } from 'global/components/Buttons';
import { useDrawerContext } from 'global/components/Drawers/contexts/DrawerContext';
import { MENU_ID, TRANSITION_DURATION } from '../constants';
import type { TNavRoute } from 'routes';

export const NavItem: React.FC<TNavRoute> = ({
  path,
  icon,
  label,
  shortLabel = '',
}) => {
  const { open, closeDrawer } = useDrawerContext();
  const match = useMatch(path);
  const showIsActive = !!match && !open;

  const onClick = React.useCallback(() => {
    if (open) closeDrawer();
  }, [open, closeDrawer]);

  return (
    <Link
      to={path}
      onClick={onClick}
      style={{ textDecoration: 'unset' }}
    >
      <StyledNavItem className={showIsActive ? 'active' : ''}>
        <IconContainer icon={icon} />
        {shortLabel || label}
      </StyledNavItem>
    </Link>
  );
};

export const ToggleExpandButton: React.FC = () => {
  const { open, openDrawer, closeDrawer } = useDrawerContext();

  const openProps = React.useMemo(() => ({
    className: open ? 'active' : '',
    'aria-label': `${open ? 'Close' : 'Open'} expanded navigation menu`,
    'aria-expanded': open,
    onClick: open ? closeDrawer : openDrawer,
  }), [open, closeDrawer, openDrawer]);

  return (
    <StyledNavItem
      component={UnstyledButton}
      aria-controls={MENU_ID}
      aria-haspopup="true"
      {...openProps}
    >
      <IconContainer icon={MoreIcon} />
      More
    </StyledNavItem>
  );
};

const IconContainer: React.FC<{ icon: TNavRoute['icon'] }> = ({ icon: Icon }) => (
  <Box aria-hidden="true" className="iconContainer">
    <Icon fontSize="inherit" />
  </Box>
);

const StyledNavItem = styled(Box)(({ theme }) => {
  const { appbar } = theme.styles.elements;
  const borderOffset = 8;

  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    ...theme.styles.textMd,
    color: appbar.surfaceContrast[0],
    fontWeight: 400,
    letterSpacing: '.25px',
    height: '80px',
    borderWidth: `0 0 ${borderOffset}px 0`,
    borderStyle: 'solid',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    textAlign: 'center',
    transitionProperty: 'color, background-color, box-shadow',
    transitionDuration: `${TRANSITION_DURATION}ms`,
    transitionTimingFunction: 'ease',
    '&.active': {
      backgroundColor: appbar.surface[1],
      color: appbar.surfaceContrast[1],
      fontWeight: 600,
      borderWidth: `0 0 ${borderOffset}px 0`,
      borderColor: appbar.border[1],
      letterSpacing: '0px',
    },
    '&:hover&:not(.active)': {
      color: appbar.surfaceContrast[1],
    },
    '&:not(.active)': {
      borderColor: 'transparent',
    },
    '.iconContainer': {
      height: '34px',
      width: '34px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      'svg': {
        fontSize: '24px',
      },
    },
  };
});
