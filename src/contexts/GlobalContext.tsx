import React from 'react';
import type { Theme } from '@mui/system';
import { theme as defaultTheme } from '../theme';

export interface IGlobalContextValue {
  theme: Theme,
  updateTheme: (themeId: string) => void,
}

export const GlobalContext = React.createContext<IGlobalContextValue>({
  theme: defaultTheme,
  updateTheme: () => undefined,
});

export const useGlobalContext = () => React.useContext(GlobalContext);

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  const updateTheme = React.useCallback((themeId: string) => {
    console.log(themeId);
    setTheme(theme);
  }, [theme, setTheme]);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        updateTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
