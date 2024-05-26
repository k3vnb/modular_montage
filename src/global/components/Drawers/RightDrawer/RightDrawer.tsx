import React from 'react';
import { Stack } from '@mui/system';
import { Backdrop } from 'global/components/Backdrop';
import { StyledDrawerWrapper, StyledModal, DrawerContent, DrawerHeader } from './RightDrawer.elements';
import { useDrawerTransitionState } from '../hooks/useDrawerTransitionState';
import type { RightDrawerModalProps, DrawerTransitionChildProps } from '../types';

export const DrawerContents = React.forwardRef<HTMLDivElement, DrawerTransitionChildProps<RightDrawerModalProps>>(function DrawerContents ({
  id,
  children,
  title,
  hideTitle,
  onClose = () => undefined,
  ...props
}, ref) {

  const headerId = React.useMemo(() => getHeaderId(id), [id]);

  return (
    <StyledDrawerWrapper ref={ref} {...props}>
      <DrawerContent>
        <DrawerHeader
          title={title}
          id={headerId}
          hideTitle={hideTitle}
          onClose={onClose}
        />
        <Stack flexGrow={1} pt="40px" minHeight="min-content" sx={{ overflowY: 'auto' }}>
          {children}
        </Stack>
      </DrawerContent>
    </StyledDrawerWrapper>
  );
});

export const RightDrawerModal = ({
  id = 'modal-drawer--right',
  open: isModalMounted = false,
  children,
  onClose,
  ...wrapperProps
}: RightDrawerModalProps) => {

  const {
    isClosing,
    isDrawerOpen,
    handleDidContentMount,
    handleStartClose,
    transitionDuration,
  } = useDrawerTransitionState({ isModalMounted, onClose });

  return (
    <StyledModal
      open={isModalMounted}
      aria-labelledby={getHeaderId(id)}
      onClose={handleStartClose}
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: () => ({ open: isDrawerOpen, transitionDuration }) }}
    >
      <DrawerContents
        ref={handleDidContentMount}
        id={id}
        open={isDrawerOpen}
        isClosing={isClosing}
        onClose={handleStartClose}
        {...wrapperProps}
      >
        {children}
      </DrawerContents>
    </StyledModal>
  );
};

const getHeaderId = (id?: string) => `${id || 'right-drawer'}-header`;
