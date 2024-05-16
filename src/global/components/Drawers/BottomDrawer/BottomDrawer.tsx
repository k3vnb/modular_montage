import React from 'react';
import { Modal } from '@mui/base';
import { useDrawerTransition } from '../hooks/useDrawerTransition';
import { Backdrop } from 'global/components/Backdrop';
import { Drawer, type TBottomDrawerContainerProps } from './bin';

type BottomDrawerModalProps = Omit<TBottomDrawerContainerProps, 'isClosing'>;

// For "Modal" --> wraps DrawerContents in Modal
export const BottomDrawerModal: React.FC<BottomDrawerModalProps> = ({
  open: isModalMounted = false,
  children,
  onClose,
  ...wrapperProps
}) => {
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

  const handleStartClose = () => {
    setWillDrawerExit(true);
    closeDrawer();
  };

  return (
    <Modal
      open={isModalMounted}
      onClose={handleStartClose}
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: () => ({ open: isDrawerOpen, transitionDuration }) }}
      style={{ zIndex: 1300, position: 'relative' }}
    >
      <Drawer
        ref={handleDidContentMount}
        open={isDrawerOpen}
        isClosing={transitionStatus.isClosing}
        onClose={handleStartClose}
        {...wrapperProps}
      >
        {children}
      </Drawer>
    </Modal>
  );
};
