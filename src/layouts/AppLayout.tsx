import { Outlet } from "react-router-dom";
import { Layout } from "./AppLayout.elements";

export const AppLayout = (): JSX.Element => {
  return (
    <Layout.AppContainer>
      <Layout.Sidebar>
        {/* <NavigationSidebar /> */}
        Sidebar
      </Layout.Sidebar>
      <Layout.MainContent>
        <Outlet />
      </Layout.MainContent>
      <Layout.BottomBar>
        {/* <MobileNavigation /> */}
        BottomBar
      </Layout.BottomBar>
    </Layout.AppContainer>
  );
};
