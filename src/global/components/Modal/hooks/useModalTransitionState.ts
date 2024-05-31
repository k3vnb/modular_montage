import React from 'react';
import { useModalTransition } from './useModalTransition';

/*
  * This hook is used to manage the state of the Modal transition.
  * It is used to internally track the opening and closing state of a modal.
  * When a modal has finished closing, it will call the onClose callback, which will tell the parent component to unmount the modal.
  */

type UseModalTransitionStateOptions = {
  isModalMounted: boolean;
  onClose: () => void;
};

export const useModalTransitionState = ({
  isModalMounted,
  onClose,
}: UseModalTransitionStateOptions) => {
  const [didContentMount, setDidContentMount] = React.useState(false);
  const [willModalExit, setWillModalExit] = React.useState(false);
  const isContentMounted = didContentMount && isModalMounted;

  const {
    open: isModalOpen,
    openModal,
    closeModal,
    transitionStatus,
    transitionDuration,
  } = useModalTransition();

  const needsUpdate = isContentMounted && !isModalOpen;
  const didModalExit = willModalExit && transitionStatus.didCompleteClose;
  const shouldCloseModal = needsUpdate && didModalExit;
  const shouldModalEnter = needsUpdate && !willModalExit;

  React.useEffect(() => {
    if (shouldCloseModal) {
      onClose();
      setWillModalExit(false);
    }
    else if (shouldModalEnter) {
      openModal();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldCloseModal, shouldModalEnter]);

  const handleDidContentMount = React.useCallback(() => {
    // allows content to render to DOM before transitioning in for smoother animation
    setDidContentMount(true);
  }, []);

  const handleStartClose = React.useCallback(() => {
    setWillModalExit(true);
    closeModal();
  }, [closeModal]);

  return {
    isModalOpen,
    isClosing: transitionStatus.isClosing,
    transitionDuration,
    handleDidContentMount,
    handleStartClose,
  };
};
