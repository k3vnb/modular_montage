import React from 'react';
import { useWindowResize } from 'hooks/useWindowResize';
import { BottomDrawerModal, BottomDrawerHeader } from '../BottomDrawer';
import { RightDrawerModal } from '../RightDrawer';
import { type ResponsiveDrawerProps } from '../types';

export const ResponsiveDrawerModal = ({
  title,
  children,
  ...props
}: ResponsiveDrawerProps) => {
  const { didMount, isTablet, isDesktop } = useWindowResize();
  const isMobile = !isTablet && !isDesktop;

  // Modal renders as a BottomDrawer on mobile, and a RightDrawer on tablet/desktop
  const DrawerModal = React.useMemo(() => (
    isMobile ? BottomDrawerModal : RightDrawerModal
  ), [isMobile]);
  
  const [mobileTitle, titleProps] = React.useMemo(() => ([
    isMobile ? <BottomDrawerHeader>{title}</BottomDrawerHeader> : null,
    !isMobile && { title },
  ]), [title, isMobile]);
  
  if (!didMount) return null; // prevent mounting before windowSize is available

  return (
    <DrawerModal
      id={props.id || 'responsive-drawer'}
      {...props}
      {...titleProps}
    >
      {mobileTitle}
      {children}
    </DrawerModal>
  );
};
