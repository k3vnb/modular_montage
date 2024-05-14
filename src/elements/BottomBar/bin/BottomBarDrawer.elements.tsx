import React from 'react';
import { Box, styled } from '@mui/system';
import { NavLink, useMatch } from 'react-router-dom';
import { DrawerContext } from 'global/components/Drawers/contexts/DrawerContext';
import { THEME_FONTS } from 'theme/typography';
import type { TNavRoute } from 'routes';

export const DrawerNavItem: React.FC<TNavRoute> = ({
  path,
  label,
  icon: Icon,
}) => {
  const match = useMatch(path);
  const { closeDrawer } = React.useContext(DrawerContext);
  const className = match ? 'active' : '';

  return (
    <NavLink
      to={path}
      aria-label={`Go to ${label}`}
      onClick={closeDrawer}
      style={{ textDecoration: 'none' }}
    >
      <StyledLinkContainer className={className}>
        <Box className="iconContainer">
          <Icon fontSize="medium" />
        </Box>
        {label}
      </StyledLinkContainer>
    </NavLink>
  );
};

export const StyledLinkContainer = styled(Box)(({ theme }) => {
  const { palette } = theme;
  const paddingXOffset = 0.5;

  return {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    ...THEME_FONTS.textLg,
    padding: theme.spacing(0, paddingXOffset),
    margin: theme.spacing(0, -paddingXOffset),
    gap: theme.spacing(2),
    color: palette.neutral[100],
    letterSpacing: '.5px',
    height: '80px',
    textDecoration: 'none',
    border: '4px solid transparent',
    '&.active': {
      backgroundColor: palette.secondary.surface,
      color: palette.primary.main,
      fontWeight: 600,
      borderColor: palette.primary.border,
      borderRadius: '0 1px 1px 0',
      width: `calc(100% + ${theme.spacing(paddingXOffset * 2)})`,
      boxShadow: `inset 0px 0px 0px 4px ${palette.primary.border}`,
      letterSpacing: '0px',
    },
    '&:hover&:not(.active)': {
      color: palette.primary.main,
      fontWeight: 600,
      letterSpacing: '0px',
    },
    '.iconContainer': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '32px',
    },
  };
});

export const Divider = styled(Box)(({ theme }) => ({
  height: '1px',
  width: '100%',
  backgroundColor: theme.palette.neutral[30],
}));

export const StyledListItem = styled(Box)(() => ({
  '&:focus-within': {
    zIndex: 1, // keeps focused outline above sibling elements
  },
}));
