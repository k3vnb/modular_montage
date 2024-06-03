import React from 'react';
import type { Theme } from '@mui/system';
import { THEMES, THEME_IDS, type ThemeId } from 'theme';
import { LAYOUT_STYLES, type LayoutStyle } from 'layouts/types';
import { type GlobalToastState, useGlobalToastStateCore } from 'global/components/Toast/hooks/useGlobalToastState';
import { useLocalStorage } from 'hooks/useLocalStorage';

export interface IGlobalContextValue {
  theme: Theme,
  themeId: ThemeId,
  updateTheme: (themeId: ThemeId) => void,
  layoutStyle: LayoutStyle,
  updateLayoutStyle: (layoutStyle: LayoutStyle) => void,
  toastState: GlobalToastState,
}

export const GlobalContext = React.createContext<IGlobalContextValue>({
  theme: THEMES[THEME_IDS.sysPrefs],
  themeId: THEME_IDS.sysPrefs,
  updateTheme: () => undefined,
  layoutStyle: LAYOUT_STYLES.appShell,
  updateLayoutStyle: () => undefined,
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
  const [themeId, setThemeId] = useLocalStorage<ThemeId>('themeId', THEME_IDS.sysPrefs);
  const [layoutStyle, setLayoutStyle] = useLocalStorage<LayoutStyle>('layoutStyle', LAYOUT_STYLES.appShell);
  const theme = THEMES[themeId] || THEMES[THEME_IDS.default];

  const updateTheme = React.useCallback((themeId: ThemeId) => {
    setThemeId(themeId);
  }, [setThemeId]);

  const updateLayoutStyle = React.useCallback((layoutStyle: LayoutStyle) => {
    setLayoutStyle(layoutStyle);
  }, [setLayoutStyle]);

  const toastState = useGlobalToastStateCore();

  return (
    <GlobalContext.Provider
      value={{
        theme,
        themeId,
        updateTheme,
        layoutStyle,
        updateLayoutStyle,
        toastState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
