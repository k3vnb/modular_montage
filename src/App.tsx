import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { useGlobalContext } from './contexts/GlobalContext';
import { AppRedirectController } from 'routes/components/AppRedirectController';
import { ToastListRenderer } from 'global/components/Toast/ToastListRenderer';

function App() {
  const { theme } = useGlobalContext();
  return (
    <ThemeProvider theme={theme}>
      <ToastListRenderer />
      <AppRedirectController />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
