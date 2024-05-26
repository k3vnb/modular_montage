import React from 'react';
import { Modal } from '@mui/base';
import { useDrawerTransitionState } from '../hooks/useDrawerTransitionState';
import { Backdrop } from 'global/components/Backdrop';
import { Drawer, type TBottomDrawerContainerProps } from './bin';

type BottomDrawerModalProps = Omit<TBottomDrawerContainerProps, 'isClosing'>;

// For "Modal" --> wraps DrawerContents in Modal
export const BottomDrawerModal = ({
  open: isModalMounted = false,
  children,
  onClose,
  ...wrapperProps
}: BottomDrawerModalProps) => {

  const {
    isClosing,
    isDrawerOpen,
    handleDidContentMount,
    handleStartClose,
    transitionDuration,
  } = useDrawerTransitionState({ isModalMounted, onClose });

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
        isClosing={isClosing}
        onClose={handleStartClose}
        {...wrapperProps}
      >
        {children}
      </Drawer>
    </Modal>
  );
};
