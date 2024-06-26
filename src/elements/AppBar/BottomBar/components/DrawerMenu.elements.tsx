import { NavLink, useMatch } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { UnstyledList, ListItem } from 'global/components/List';
import { useDrawerContext } from 'global/components/Drawers/contexts/DrawerContext';
import type { TNavRoute } from 'routes';

const NavListItem = ({
  path,
  label,
  icon: Icon,
}: TNavRoute): JSX.Element => {
  const match = useMatch(path);
  const { closeDrawer } = useDrawerContext();

  return (
    <StyledListItem>
      <NavLink
        to={path}
        aria-label={`Go to ${label}`}
        onClick={closeDrawer}
        style={{ textDecoration: 'none' }}
      >
        <StyledLinkContainer className={match ? 'active' : ''}>
          <Box aria-hidden="true" className="iconContainer">
            <Icon fontSize="medium" />
          </Box>
          {label}
        </StyledLinkContainer>
      </NavLink>
    </StyledListItem>
  );
};

export const DrawerList = {
  Container: UnstyledList,
  Item: NavListItem,
};

const StyledLinkContainer = styled(Box)(({ theme }) => {
  const { box } = theme.styles.primary;
  const paddingXOffset = 0.75;

  return {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    ...theme.styles.textLg,
    padding: theme.spacing(0, paddingXOffset),
    margin: theme.spacing(0, -paddingXOffset),
    gap: theme.spacing(1),
    color: theme.styles.neutral[100],
    letterSpacing: '.5px',
    height: '80px',
    textDecoration: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    '&.active': {
      backgroundColor: box.surface[0],
      color: box.surfaceContrast[0],
      fontWeight: 500,
      borderColor: box.border[0],
      borderRadius: '4px',
      width: `calc(100% + ${theme.spacing(paddingXOffset * 2)})`,
      boxShadow: `inset 0px 0px 0px 2px ${box.border[0]}`,
      letterSpacing: '0px',
    },
    '&:hover&:not(.active)': {
      color: box.surfaceContrast[0],
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

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:focus-within': {
    zIndex: 1, // keeps focused outline above sibling elements
  },
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.styles.neutral[30]}`,
  },
}));
