import React from 'react';
import type { Theme } from '@mui/system';
import { THEMES, THEME_IDS, type ThemeId } from 'theme';
import { type GlobalToastState, useGlobalToastStateCore } from 'global/components/Toast/hooks/useGlobalToastState';

export interface IGlobalContextValue {
  theme: Theme,
  themeId: ThemeId,
  updateTheme: (themeId: ThemeId) => void,
  toastState: GlobalToastState,
}

export const GlobalContext = React.createContext<IGlobalContextValue>({
  theme: THEMES.default,
  themeId: THEME_IDS.default,
  updateTheme: () => undefined,
  toastState:  {
    toastList: [],
    addToast: () => undefined,
    removeToast: () => undefined,
  },
});

export const useGlobalContext = () => React.useContext(GlobalContext);

export const GlobalContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [themeId, setThemeId] = React.useState<ThemeId>(THEME_IDS.default);
  const theme = THEMES[themeId];

  const updateTheme = React.useCallback((themeId: ThemeId) => {
    setThemeId(themeId);
  }, [setThemeId]);

  const toastState = useGlobalToastStateCore();

  return (
    <GlobalContext.Provider
      value={{
        theme,
        themeId,
        updateTheme,
        toastState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
