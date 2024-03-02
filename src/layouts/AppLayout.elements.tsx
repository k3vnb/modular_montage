import * as React from "react";
import { useLocation } from "react-router-dom";
import { Box, Stack } from "@mui/system";

type LayoutProps = {
  children: React.ReactNode;
  debugMode?: boolean;
}

const AppContainer = ({ children, debugMode }: LayoutProps): JSX.Element => {
  return (
    <Box 
      display="grid"
      minHeight="100%" 
      maxHeight="100%"
      position="fixed"
      sx={{
        width: "100vw",
        height: "100%",
        overflow: "hidden",
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateAreas: `
          "header header"
          "sidebar main"
          "footer footer"`,
        backgroundColor: debugMode ? "rgb(255, 179, 0)" : "transparent",
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
        gridArea: "header",
        minWidth: "100%",
        width: "100%",
        backgroundColor: debugMode ? "rgb(0, 255, 255)" : "transparent",
      }}
    >
      {children}
    </Box>
  );
};

const Sidebar = ({ children, debugMode }: LayoutProps): JSX.Element => {
  const width = "auto"; // "auto" will grow to fit children's content
  return (
    <Box
      width={width}
      sx={{
        gridArea: "sidebar",
        display: {
          xs: "none",
          sm: "block",
        },
        minWidth: width,
        backgroundColor: debugMode ? "rgb(255, 55, 0)" : "transparent",
      }}
    >
      {children}
    </Box>
  );
};

// offset values for full width elements
export const MAIN_CONTENT_PADDING_Y_XS = 4;
export const MAIN_CONTENT_PADDING_Y_SM = 7;
export const MAIN_CONTENT_PADDING_X_XS = 2;
export const MAIN_CONTENT_PADDING_LEFT_SM = 5;
export const MAIN_CONTENT_PADDING_RIGHT_SM = 3;

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
        gridArea: "main",
        // flex: 2,
        overflow: "auto",
        width: {
          xs: "100vw",
          sm: "auto",
        },
        backgroundColor: debugMode ? "rgb(60, 255, 0)" : "transparent",
      }}
    >
      <Stack
        component="main"
        sx={{
          overflow: "hidden",
          width: "100%",
          minHeight: "100%",
          padding: theme => ({
            xs: theme.spacing(
              MAIN_CONTENT_PADDING_Y_XS,
              MAIN_CONTENT_PADDING_X_XS,
            ),
            sm: theme.spacing(
              MAIN_CONTENT_PADDING_Y_SM,
              MAIN_CONTENT_PADDING_RIGHT_SM,
              MAIN_CONTENT_PADDING_Y_SM,
              MAIN_CONTENT_PADDING_LEFT_SM,
            ),
          }),
          backgroundColor: debugMode ? "rgb(242, 0, 255)" : "transparent",
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
        gridArea: "footer",
        display: {
          xs: "block",
          sm: "none",
        },
        backgroundColor: debugMode ? "rgb(255, 0, 111)" : "transparent",
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
