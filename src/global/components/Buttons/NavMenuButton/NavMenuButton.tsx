import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Menu,
  Dropdown,
  useMenuButton,
  menuItemClasses,
  MenuItem as BaseMenuItem,
} from '@mui/base';
import { fontFamily } from 'theme/typography';
import { UnstyledButton } from '../UnstyledButton';
import type { TNavRoute } from 'routes';

type MenuButtonProps = {
  defaultOpen?: boolean;
  menuItems: TNavRoute[];
};

export const NavMenuButton = ({
  defaultOpen = false,
  menuItems,
}: MenuButtonProps) => {
  return (
    <Dropdown defaultOpen={defaultOpen}>
      <MenuButtonCore />
      <Menu slots={{ root: 'nav', listbox: Listbox }}>
        {menuItems.map(({label, path, icon: Icon}) => (
          <MenuItem key={label} tabIndex={-1}>
            <NavLink className="link-container" to={path}>
              <Icon /> {label}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};

const Listbox = styled('ul')(({ theme }) => ({
  fontFamily: fontFamily,
  fontWeight: 300,
  fontSize: '15px',
  letterSpacing: '0.5px',
  boxSizing: 'border-box',
  padding: '2px 0px',
  margin: '6px 0',
  minWidth: '200px',
  borderRadius: '4px',
  overflow: 'auto',
  outline: '0px',
  background: theme.styles.elements.flyout.surface,
  border: `1px solid ${theme.styles.neutral[60]}`,
  color: theme.styles.neutral[90],
  boxShadow: theme.styles.shadow[1],
  zIndex: 1,
}));

const MenuItem = styled(BaseMenuItem)(({ theme }) => ({
  listStyle: 'none',
  padding: theme.spacing(2),
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  lineHeight: 1,
  gap: theme.spacing(2),
  cursor: 'pointer',
  borderBottom: `1px solid ${theme.styles.neutral[20]}`,
  color: theme.styles.elements.flyout.text,
  fontWeight: 500,

  '&:last-of-type': {
    borderBottom: 'none',
  },

  [`&.${menuItemClasses.focusVisible}`]: {
    outline: `2px solid ${theme.styles.elements.flyout.textActive}`,
    outlineOffset: '-3px',
    backgroundColor: theme.styles.elements.flyout.surface,
    color: theme.styles.elements.flyout.textActive,
  },

  [`&.${menuItemClasses.disabled}`]: {
    cursor: 'not-allowed',
    color: theme.styles.neutral[60],
  },

  [`&:hover:not(.${menuItemClasses.disabled})`]: {
    color: theme.styles.elements.flyout.textActive,
    backgroundColor: theme.styles.elements.flyout.surface,
  },
  
  '> .link-container': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    textDecoration: 'none',
    width: '100%',
    height: '100%',
    padding: '0',
    color: 'inherit',
    outline: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    '&.active' : {
      color: theme.styles.elements.flyout.textActive,
    },
  },
  '&:has(.link-container.active)': {
    backgroundColor: theme.styles.elements.flyout.surfaceActive,
  },
}));

const MenuButtonCore = React.forwardRef(function MenuButton(
  props,
  forwardedRef: React.ForwardedRef<HTMLButtonElement>,
) {
  const { getRootProps: getButtonProps } = useMenuButton({
    rootRef: forwardedRef,
  });


  return (
    <UnstyledButton
      {...getButtonProps()}
    >
      <Box display="flex" alignItems="center" sx={{ '.menu-icon': { fontSize: 28 }}}>
        <MenuIcon className="menu-icon" fontSize="inherit" />
      </Box>
    </UnstyledButton>
  );
});
