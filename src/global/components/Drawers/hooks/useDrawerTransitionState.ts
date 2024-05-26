import React from 'react';
import { useDrawerTransition } from '../hooks/useDrawerTransition';

/*
  * This hook is used to manage the state of the drawer transition.
  * It is used to internally track the opening and closing state of a drawer.
  * When a drawer has finished closing, it will call the onClose callback, which will tell the parent component to unmount the drawer.
  */

type UseDrawerTransitionStateOptions = {
  isModalMounted: boolean;
  onClose: () => void;
};

export const useDrawerTransitionState = ({
  isModalMounted,
  onClose,
}: UseDrawerTransitionStateOptions) => {
  const [didContentMount, setDidContentMount] = React.useState(false);
  const [willDrawerExit, setWillDrawerExit] = React.useState(false);
  const isContentMounted = didContentMount && isModalMounted;

  const {
    open: isDrawerOpen,
    openDrawer,
    closeDrawer,
    transitionStatus,
    transitionDuration,
  } = useDrawerTransition();

  const needsUpdate = isContentMounted && !isDrawerOpen;
  const didDrawerExit = willDrawerExit && transitionStatus.didCompleteClose;
  const shouldCloseModal = needsUpdate && didDrawerExit;
  const shouldDrawerEnter = needsUpdate && !willDrawerExit;

  React.useEffect(() => {
    if (shouldCloseModal) {
      onClose();
      setWillDrawerExit(false);
    }
    else if (shouldDrawerEnter) {
      openDrawer();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldCloseModal, shouldDrawerEnter]);

  const handleDidContentMount = React.useCallback(() => {
    // allows content to render to DOM before transitioning in for smoother animation
    setDidContentMount(true);
  }, []);

  const handleStartClose = React.useCallback(() => {
    setWillDrawerExit(true);
    closeDrawer();
  }, [closeDrawer]);

  return {
    isDrawerOpen,
    isClosing: transitionStatus.isClosing,
    transitionDuration,
    handleDidContentMount,
    handleStartClose,
  };
};
