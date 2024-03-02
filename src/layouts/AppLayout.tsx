import { Outlet } from "react-router-dom";
import { Layout } from "./AppLayout.elements";
import { Sidebar } from "global/components/Sidebar";

const IS_DEBUG_MODE = false;

export const AppLayout = (): JSX.Element => {
  return (
    <Layout.AppContainer debugMode={IS_DEBUG_MODE}>
      <Layout.Sidebar debugMode={IS_DEBUG_MODE}>
        <Sidebar />
      </Layout.Sidebar>
      <Layout.MainContent debugMode={IS_DEBUG_MODE}>
        <Outlet />
      </Layout.MainContent>
      <Layout.BottomBar debugMode={IS_DEBUG_MODE}>
        {/* <MobileNavigation /> */}
        BottomBar
      </Layout.BottomBar>
    </Layout.AppContainer>
  );
};
