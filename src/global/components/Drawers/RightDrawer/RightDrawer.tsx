import React from 'react';
import { Stack } from '@mui/system';
import { Backdrop } from 'global/components/Backdrop';
import { StyledDrawerWrapper, StyledModal, DrawerContent, DrawerHeader } from './RightDrawer.elements';
import { useDrawerTransitionState } from '../hooks/useDrawerTransitionState';

type RightDrawerCoreProps = {
  id?: string;
  open: boolean;
  children: React.ReactNode;
  title: string;
  hideTitle?: boolean;
  bottom?: string | number;
  maxHeight?: string;
  zIndex?: string | number;
  onClose: () => void;
};

type RightDrawerContentProps = RightDrawerCoreProps & {
  isClosing?: boolean;
};

const getHeaderId = (id?: string) => `${id || 'drawer'}-header`;

export const DrawerContents = React.forwardRef<HTMLDivElement, RightDrawerContentProps>(function DrawerContents ({
  id,
  children,
  title,
  hideTitle,
  onClose = () => undefined,
  ...wrapperProps
}, ref) {
  return (
    <StyledDrawerWrapper ref={ref} {...wrapperProps}>
      <DrawerContent>
        <DrawerHeader
          title={title}
          id={getHeaderId(id)}
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

// For "Modal" --> wraps DrawerContents in Modal
export const RightDrawerModal: React.FC<RightDrawerCoreProps> = ({
  id = 'modal-drawer--right',
  open: isModalMounted = false,
  children,
  onClose,
  ...wrapperProps
}) => {
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
