import React from 'react';
import { Stack } from '@mui/system';

import { useDrawerTransition } from '../hooks/useDrawerTransition';
import { Backdrop } from 'global/components/Backdrop';
import { StyledDrawerWrapper, StyledModal, DrawerContent, DrawerHeader } from './RightDrawer.elements';
import { TRANSITION_DURATION } from '../constants';

type BottomDrawerCoreProps = {
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

type BottomDrawerContentProps = BottomDrawerCoreProps & {
  isClosing?: boolean;
};

const getHeaderId = (id?: string) => `${id || 'drawer'}-header`;

export const DrawerContents = React.forwardRef<HTMLDivElement, BottomDrawerContentProps>(function DrawerContents ({
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
export const RightDrawerModal: React.FC<BottomDrawerCoreProps> = ({
  id = 'modal-drawer--right',
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
    <StyledModal
      open={isModalMounted}
      aria-labelledby={getHeaderId(id)}
      onClose={handleStartClose}
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: () => ({ open: isDrawerOpen, transitionDuration: TRANSITION_DURATION }) }}
    >
      <DrawerContents
        ref={handleDidContentMount}
        id={id}
        open={isDrawerOpen}
        isClosing={transitionStatus.isClosing}
        onClose={handleStartClose}
        {...wrapperProps}
      >
        {children}
      </DrawerContents>
    </StyledModal>
  );
};
