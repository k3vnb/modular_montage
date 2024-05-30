import React from 'react';
import { Box } from '@mui/system';
import { ClickAwayListener, FocusTrap } from '@mui/base';
import { useDrawerContext } from 'global/components/Drawers/contexts/DrawerContext';
import { Backdrop } from 'global/components/Backdrop';

export const DrawerClickaway = ({ children }: React.PropsWithChildren ): JSX.Element => {
  const { open, closeDrawer, transitionDuration } = useDrawerContext();

  const handleEscapeKey = React.useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') closeDrawer();
  }, [closeDrawer]);

  React.useEffect(() => {
    document.body.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);

  return (
    <FocusTrap open={open}>
      <Box>
        <Backdrop open={open} transitionDuration={transitionDuration} zIndex={open ? 0 : -1} />
        <ClickAwayListener onClickAway={closeDrawer} mouseEvent="onMouseDown">
          <Box role="presentation">
            {children}
          </Box>
        </ClickAwayListener>
      </Box>
    </FocusTrap>
  );
};
