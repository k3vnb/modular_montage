import { Box } from '@mui/system';
import { Modal } from '@mui/base';
import { useDrawerTransitionState } from '../hooks/useDrawerTransitionState';
import { Backdrop } from 'global/components/Backdrop';
import { Drawer } from './bin';
import { type BottomDrawerModalProps } from '../types';

/* 
* Modal instance of BottomDrawer
* the Nav BottomDrawer utilizes the inner Drawer component directly, not via this Modal
*/

export const BottomDrawerModal = ({
  open: isModalMounted = false,
  children,
  onClose,
  ...wrapperProps
}: BottomDrawerModalProps) => {

  const {
    isClosing,
    isDrawerOpen,
    transitionDuration,
    handleDidContentMount,
    handleStartClose,
  } = useDrawerTransitionState({ isModalMounted, onClose });

  return (
    <Box
      component={Modal}
      open={isModalMounted}
      onClose={handleStartClose}
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: () => ({ open: isDrawerOpen, transitionDuration }) }}
      sx={{
        position: 'relative',
        zIndex: theme => theme.styles.zIndex.drawer,
      }}
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
    </Box>
  );
};
