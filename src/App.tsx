import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useGlobalContext } from './contexts/GlobalContext';
import { AppRedirectController } from 'routes/components/AppRedirectController';

function App() {
  const { theme } = useGlobalContext();
  return (
    <ThemeProvider theme={theme}>
      <AppRedirectController />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
