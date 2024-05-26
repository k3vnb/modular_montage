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

const ModalWrapper = ({children, size = 'medium', ...props}: ModalProps) => {
  const width = React.useMemo(() => {
    if (size === 'small') return '500px';
    if (size === 'medium') return '780px';
    if (size === 'large') return '800px';
  }, [size]);

  return (
    <StyledModal
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: () => ({ open: props.open }) }}
      {...props}
    >
      <StyledContentContainer sx={{ width }} gap={3}>
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
