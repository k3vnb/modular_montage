import React from 'react';
import { TRANSITION_DURATION } from '../constants';

type DrawerTransitionStatus = {
  isOpening: boolean;
  isClosing: boolean;
  didCompleteOpen: boolean;
  didCompleteClose: boolean;
}

export type TUseDrawerTransition = {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  transitionStatus: DrawerTransitionStatus;
  isDrawerVisible: boolean;
}

export const useDrawerTransition = (): TUseDrawerTransition => {
  const [open, setOpen] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // TODO: add test, only one of these properties should be true at a time
  const transitionStatus: DrawerTransitionStatus = React.useMemo(() => (
    {
      isOpening: open && isTransitioning,
      isClosing: !open && isTransitioning,
      didCompleteOpen: open && !isTransitioning,
      didCompleteClose: !open && !isTransitioning,
    }
  ), [open, isTransitioning]);


  const isDrawerVisible = React.useMemo(() => (
    open || transitionStatus.isClosing
  ), [open, transitionStatus.isClosing]);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
  
    if (isTransitioning) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }
    // cleanup function
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isTransitioning]);

  const closeDrawer = React.useCallback(() => {
    if (open) {
      setOpen(false);
      setIsTransitioning(true);
    }
  }, [open]);

  const openDrawer = React.useCallback(() => {
    if (!open) {
      setOpen(true);
      setIsTransitioning(true);
    }
  }, [open]);

  return {
    open,
    openDrawer,
    closeDrawer,
    transitionStatus,
    isDrawerVisible,
  };
};
