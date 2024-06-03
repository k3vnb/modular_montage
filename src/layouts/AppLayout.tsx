import { Outlet } from 'react-router-dom';
import { Layout } from './AppLayout.elements';
import { Header } from 'elements/Header';
import { Sidebar } from 'elements/AppBar/Sidebar';
import { BottomBar } from 'elements/AppBar/BottomBar';
import { useGlobalContext } from 'contexts/GlobalContext';
import { LAYOUT_STYLES } from './types';

const IS_DEBUG_MODE = false;

export const AppLayout = (): JSX.Element => {
  const { layoutStyle } = useGlobalContext();
  const isAppShell = layoutStyle === LAYOUT_STYLES.appShell;
  return (
    <Layout.AppContainer debugMode={IS_DEBUG_MODE}>
      <Layout.Header debugMode={IS_DEBUG_MODE}>
        <Header />
      </Layout.Header>
      {isAppShell && (
        <Layout.Sidebar debugMode={IS_DEBUG_MODE}>
          <Sidebar />
        </Layout.Sidebar>
      )}
      <Layout.MainContent debugMode={IS_DEBUG_MODE}>
        <Outlet />
      </Layout.MainContent>
      {isAppShell && (
        <Layout.BottomBar debugMode={IS_DEBUG_MODE}>
          <BottomBar />
        </Layout.BottomBar>
      )}
    </Layout.AppContainer>
  );
};
