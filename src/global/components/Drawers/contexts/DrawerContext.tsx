import React from 'react';
import { useDrawerTransition, type TUseDrawerTransition } from '../hooks/useDrawerTransition';

type TDrawerContextValue = TUseDrawerTransition;

export const DrawerContext = React.createContext<TDrawerContextValue>({
  open: false,
  openDrawer: () => undefined,
  closeDrawer: () => undefined,
  transitionStatus: {} as TUseDrawerTransition['transitionStatus'],
  isDrawerVisible: false,
});

export const DrawerContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const {
    open,
    openDrawer,
    closeDrawer,
    transitionStatus,
    isDrawerVisible,
  } = useDrawerTransition();

  return (
    <DrawerContext.Provider
      value={{
        open,
        openDrawer,
        closeDrawer,
        transitionStatus,
        isDrawerVisible,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
