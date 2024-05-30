import { NavLink } from 'react-router-dom';
import { Box, Stack, styled } from '@mui/system';
import { NavMenuButton } from 'global/components/Buttons/NavMenuButton';
import { NAV_ROUTES_LIST, type TNavRoute } from 'routes';
import { UnstyledList, ListItem } from 'global/components/List';
import { text } from 'stream/consumers';

const NavMenuContainer = styled(Box)(({ theme }) => ({
  ...theme.styles.textMdSemibold,
  '.nav-item': {
    textDecoration: 'underline',
    textDecorationColor: 'transparent',
    textDecorationThickness: '2px',
    color: theme.styles.elements.header.surfaceContrast[1],
    textUnderlineOffset: theme.spacing(0.75),
    transition: 'text-decoration-color 0.1s ease-in-out',
    '&:hover': {
      textDecorationColor: theme.styles.elements.header.surfaceContrast[0],
      color: theme.styles.elements.header.surfaceContrast[0],
    },
    '&.active': {
      textDecorationColor: theme.styles.elements.header.border[0],
      color: theme.styles.elements.header.surfaceContrast[1],
    },
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const BurgerButtonContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'inline-flex',
  },
}));

const NavItem = styled(NavLink)(({ theme }) => ({
  color: theme.styles.elements.header.surfaceContrast[0],
}));

export const NavMenu = () => {
  return (
    <>
      <NavMenuContainer component="nav">
        <UnstyledList display="inline-flex" flexDirection="row" gap={3}>
          {NAV_ROUTES_LIST.map(({ label, path }: TNavRoute) => (
            <ListItem key={label}>
              <NavItem className="nav-item" to={path}>
                {label}
              </NavItem>
            </ListItem>
          ))}
        </UnstyledList>
      </NavMenuContainer>
      <BurgerButtonContainer>
        <NavMenuButton menuItems={NAV_ROUTES_LIST} />
      </BurgerButtonContainer>
    </>
  );
};

export const Brand = ()=> (
  <>
    <h1 className="sr-only">UX & UI Montage Reviewed</h1>
    <Stack className="brand" aria-hidden="true" alignItems="start" justifyContent="center">
      <Stack direction="row" alignItems="center">
        <StyledTitle mr="4px">Modular</StyledTitle>
        <AdornedText component="span">UX</AdornedText>
      </Stack>
      <Stack direction="row" alignItems="center">
        <AdornedText component="span">UI</AdornedText>
        <StyledTitle ml="4px">Montage</StyledTitle>
      </Stack>
    </Stack>
  </>
);

const StyledTitle = styled(Box)(({ theme }) => ({
  ...theme.styles.textLgMedium,
  lineHeight: 0.85,
}));

const AdornedText = styled(Box)(({ theme }) => ({
  alignSelf: 'center',
  ...theme.styles.textLgMedium,
  lineHeight: 0.5,
  fontSize: '0.6rem',
  fontVariant: 'petite-caps',
  fontFamily: 'monospace',
}));

export const HeaderWrapper = styled(Box)(({ theme: { styles } }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
  backgroundColor: styles.elements.header.surface[0],
  background: styles.elements.header.gradients?.[0] || styles.elements.header.surface[0],
  color: styles.elements.header.surfaceContrast[0],
  borderBottom: `1px solid ${styles.elements.header.border[0]}`,
  '& .brand': {
    textShadow: `0px 1px 0px ${styles.neutral[90]}`,
  },
}));

