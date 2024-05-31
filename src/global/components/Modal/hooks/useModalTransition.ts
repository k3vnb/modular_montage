import React from 'react';
import { TRANSITION_DURATION } from '../constants';

type ModalTransitionStatus = {
  isOpening: boolean;
  isClosing: boolean;
  didCompleteOpen: boolean;
  didCompleteClose: boolean;
}

export type TUseModalTransition = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
  transitionStatus: ModalTransitionStatus;
  isModalVisible: boolean;
  transitionDuration: number;
}

export const useModalTransition = (): TUseModalTransition => {
  const [open, setOpen] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // TODO: add test, only one of these properties should be true at a time
  const transitionStatus: ModalTransitionStatus = React.useMemo(() => (
    {
      isOpening: open && isTransitioning,
      isClosing: !open && isTransitioning,
      didCompleteOpen: open && !isTransitioning,
      didCompleteClose: !open && !isTransitioning,
    }
  ), [open, isTransitioning]);

  const isModalVisible = React.useMemo(() => (
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

  const closeModal = React.useCallback(() => {
    if (open) {
      setOpen(false);
      setIsTransitioning(true);
    }
  }, [open]);

  const openModal = React.useCallback(() => {
    if (!open) {
      setOpen(true);
      setIsTransitioning(true);
    }
  }, [open]);

  return {
    open,
    openModal,
    closeModal,
    transitionStatus,
    isModalVisible,
    transitionDuration: TRANSITION_DURATION,
  };
};
