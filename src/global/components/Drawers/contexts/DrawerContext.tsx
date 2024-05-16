import React from 'react';
import { useDrawerTransition, type TUseDrawerTransition } from '../hooks/useDrawerTransition';

type TDrawerContextValue = TUseDrawerTransition;

export const DrawerContext = React.createContext<TDrawerContextValue>({
  open: false,
  openDrawer: () => undefined,
  closeDrawer: () => undefined,
  transitionStatus: {} as TUseDrawerTransition['transitionStatus'],
  isDrawerVisible: false,
  transitionDuration: 0,
});

export const DrawerContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const drawerTransitionState = useDrawerTransition();

  return (
    <DrawerContext.Provider value={drawerTransitionState}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => React.useContext(DrawerContext);
