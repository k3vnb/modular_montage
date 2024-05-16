import * as React from 'react';
import { useDrawerTransition } from '../hooks/useDrawerTransition';
import { Backdrop } from 'global/components/Backdrop';
import { 
  StyledDrawerWrapper,
  StyledModal,
  DrawerContent,
 } from './BottomDrawer.elements';
import { CloseButton } from './bin';
import { TRANSITION_DURATION } from '../constants';

type BottomDrawerCoreProps = {
  id: string;
  role?: string;
  'aria-describedby'?: string;
  'aria-label'?: string;
  open: boolean;
  children: React.ReactNode;
  bottom?: string | number;
  maxHeight?: string;
  zIndex?: string | number;
  onClose: () => void;
};

type BottomDrawerContentProps = BottomDrawerCoreProps & {
  isClosing?: boolean;
};

export const DrawerContents = React.forwardRef<HTMLDivElement, BottomDrawerContentProps>(function DrawerContents ({
  children,
  onClose = () => undefined,
  ...wrapperProps
}, ref) {
  return (
    <StyledDrawerWrapper ref={ref} {...wrapperProps}>
      <CloseButton onClick={onClose} />
      <DrawerContent>
        {children}
      </DrawerContent>
    </StyledDrawerWrapper>
  );
});

// For "Modal" --> wraps DrawerContents in Modal
export const BottomDrawerModal: React.FC<BottomDrawerCoreProps> = ({
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
    <StyledModal
      open={isModalMounted}
      onClose={handleStartClose}
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: () => ({ open: isDrawerOpen, transitionDuration: TRANSITION_DURATION }) }}
    >
      <DrawerContents
        ref={handleDidContentMount}
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
