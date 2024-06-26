import React, { type PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Stack } from '@mui/system';
import { MAIN_CONTENT_PAGE_PADDING } from './constants';

type Props = {
  debugMode?: boolean;
}

type LayoutProps = PropsWithChildren<Props>;

const AppContainer = ({ children, debugMode }: LayoutProps): JSX.Element => {
  return (
    <Box 
      display="grid"
      minHeight="100%" 
      maxHeight="100%"
      position="fixed"
      sx={{
        width: '100vw',
        height: '100%',
        overflow: 'hidden',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateAreas: `
          "header header"
          "sidebar main"
          "footer footer"`,
        backgroundColor: debugMode ? 'rgb(255, 179, 0)' : 'transparent',
      }}
    >
      {children}
    </Box>
  );
};

const Header = ({ children, debugMode }: LayoutProps): JSX.Element => {
  return (
    <Box
      sx={{
        gridArea: 'header',
        minWidth: '100%',
        width: '100%',
        backgroundColor: debugMode ? 'rgb(0, 255, 255)' : 'transparent',
      }}
    >
      {children}
    </Box>
  );
};

const Sidebar = ({ children, debugMode }: LayoutProps): JSX.Element => {
  const width = 'auto'; // "auto" will grow to fit children's content
  return (
    <Box
      width={width}
      sx={{
        gridArea: 'sidebar',
        display: {
          xxs: 'none',
          sm: 'block',
        },
        minWidth: width,
        backgroundColor: debugMode ? 'rgb(255, 55, 0)' : 'transparent',
      }}
    >
      {children}
    </Box>
  );
};

const MainContent = ({ children, debugMode }: LayoutProps): JSX.Element => {
  const { pathname } = useLocation();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <Box
      ref={ref}
      sx={{
        gridArea: 'main',
        overflow: 'auto',
        width: {
          xxs: '100vw',
          sm: 'auto',
        },
        background: theme => debugMode ? 'rgb(60, 255, 0)' : theme.styles.elements.main.gradients?.[0] || theme.styles.elements.main.surface[0],
      }}
    >
      <Stack
        component="main"
        sx={{
          overflow: 'hidden',
          width: '100%',
          minHeight: '100%',
          padding: theme => ({
            xxs: theme.spacing(
              MAIN_CONTENT_PAGE_PADDING.Y_XXS,
              MAIN_CONTENT_PAGE_PADDING.X_XXS,
              MAIN_CONTENT_PAGE_PADDING.Y_XXS + 1,
            ),
            sm: theme.spacing(
              MAIN_CONTENT_PAGE_PADDING.Y_SM,
              MAIN_CONTENT_PAGE_PADDING.X_SM,
              MAIN_CONTENT_PAGE_PADDING.Y_SM + 12,
            ),
          }),
          background: debugMode ? 'rgb(242, 0, 255)' : 'transparent',
          transition: 'background 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}    
      >
        {children}
      </Stack>
    </Box>
  );
};

const BottomBar = ({ children, debugMode }: LayoutProps): JSX.Element => {
  return (
    <Box
      sx={{
        gridArea: 'footer',
        display: {
          xxs: 'block',
          sm: 'none',
        },
        backgroundColor: debugMode ? 'rgb(255, 0, 111)' : 'transparent',
      }}
    >
      {children}
    </Box>
  );
};

export const Layout = {
  AppContainer,
  Header,
  Sidebar,
  MainContent,
  BottomBar,
};
