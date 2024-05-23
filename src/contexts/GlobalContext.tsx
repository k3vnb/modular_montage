import React from 'react';
import type { Theme } from '@mui/system';
import { THEMES, THEME_IDS, type ThemeId } from 'theme';

export interface IGlobalContextValue {
  theme: Theme,
  themeId: ThemeId,
  updateTheme: (themeId: ThemeId) => void,
}

export const GlobalContext = React.createContext<IGlobalContextValue>({
  theme: THEMES.default,
  themeId: THEME_IDS.default,
  updateTheme: () => undefined,
});

export const useGlobalContext = () => React.useContext(GlobalContext);

export const GlobalContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [themeId, setThemeId] = React.useState<ThemeId>(THEME_IDS.default);
  const theme = THEMES[themeId];

  const updateTheme = React.useCallback((themeId: ThemeId) => {
    setThemeId(themeId);
  }, [setThemeId]);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        themeId,
        updateTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
