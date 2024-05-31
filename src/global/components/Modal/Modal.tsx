import React from 'react';
import { type ModalProps } from './types';
import { Backdrop } from 'global/components/Backdrop';
import {
  FooterContainer,
  MainContentContainer,
  StyledContentContainer,
  ModalHeader,
  StyledModal
} from './Modal.elements';
import { useModalTransitionState } from './hooks/useModalTransitionState';

const ModalWrapper = ({
  children,
  size = 'medium',
  open: isModalMounted = false,
  onClose,
  ...props
}: ModalProps) => {

  const width = React.useMemo(() => {
    if (size === 'small') return '500px';
    if (size === 'medium') return '780px';
    if (size === 'large') return '800px';
  }, [size]);

  const {
    isClosing,
    isModalOpen,
    handleDidContentMount,
    handleStartClose,
    transitionDuration,
  } = useModalTransitionState({ isModalMounted, onClose });

  return (
    <StyledModal
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: () => ({ open: isModalOpen, transitionDuration }) }}
      open={isModalMounted}
      onClose={handleStartClose}
      {...props}
    >
      <StyledContentContainer
        ref={handleDidContentMount}
        sx={{
          width,
          opacity: isClosing ? 0 : (isModalOpen ? 1 : 0),
          transition: `opacity ${transitionDuration/2}ms linear ${transitionDuration/2}ms`,
        }}
        gap={3}
      >
        {children}
      </StyledContentContainer>
    </StyledModal>
  );
};

export const Modal = {
  Wrapper: ModalWrapper,
  Header: ModalHeader,
  MainContentContainer,
  FooterContainer,
};
