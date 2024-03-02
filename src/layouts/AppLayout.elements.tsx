import * as React from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Stack } from "@mui/system";

type LayoutProps = {
  children: React.ReactNode;
}

const AppContainer = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Grid 
      container 
      height="100%" 
      minHeight="100%" 
      maxHeight="100%"
      width="100vw"
      wrap="nowrap"
      position="fixed"
      columns={{ xs: 12 }}
      sx={{
        overflow: "hidden",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      {children}
    </Grid>
  );
};

const Sidebar = ({ children }: LayoutProps): JSX.Element => {
  const width = "auto"; // "auto" will grow to fit children's content
  return (
    <Grid
      width={width}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        minWidth: width,
      }}
    >
      {children}
    </Grid>
  );
};

// offset values for full width elements
export const MAIN_CONTENT_PADDING_Y_XS = 4;
export const MAIN_CONTENT_PADDING_Y_SM = 7;
export const MAIN_CONTENT_PADDING_X_XS = 2;
export const MAIN_CONTENT_PADDING_LEFT_SM = 5;
export const MAIN_CONTENT_PADDING_RIGHT_SM = 3;

const MainContent = ({ children }: LayoutProps): JSX.Element => {
  const { pathname } = useLocation();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <Grid
      ref={ref}
      sx={{
        flex: 2,
        overflow: "auto",
        width: {
          xs: "100vw",
          sm: "auto",
        }
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
        }}    
      >
        {children}
      </Stack>
    </Grid>
  );
};

const BottomBar = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Grid
      sx={{
        display: {
          xs: "block",
          sm: "none",
        },
      }}
    >
      {children}
    </Grid>
  );
};

export const Layout = {
  AppContainer,
  Sidebar,
  MainContent,
  BottomBar,
};
