import React from 'react';
import { Box } from '@mui/system';
import { ThemeButton } from 'global/components/Buttons';
import { Typography } from 'global/components/Typography';
import { Modal } from 'global/components/Modal';
import { BottomDrawerModal, RightDrawerModal, ResponsiveDrawerModal } from 'global/components/Drawers';

// simple hook to manage modal state
const useModalActions = () => {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  return { open, closeModal, openModal };
};

const ModalButton = () => {
  const { open, closeModal, openModal } = useModalActions();
  return (
    <>
      <ThemeButton text="Open a modal" onClick={openModal} />
      <Modal.Wrapper
        open={open}
        onClose={closeModal}
        size="medium"
        aria-labelledby='demo-modal-header'
      >
        <Modal.Header
          id="demo-modal-header"
          title="Demo Modal"
          onClose={closeModal}
        />
        <Modal.MainContentContainer>
          <Typography.H5 component="div">Modal Content</Typography.H5>
        </Modal.MainContentContainer>
        <Modal.FooterContainer>
          <ThemeButton filled text="Close" onClick={closeModal} />
        </Modal.FooterContainer>
      </Modal.Wrapper>
    </>
  );
};

const RightDrawerButton = () => {
  const { open, closeModal, openModal } = useModalActions();
  return (
    <>
      <ThemeButton variant="info" text="Open right drawer" onClick={openModal} />
      <RightDrawerModal
        open={open}
        id="demo-right-drawer"
        onClose={closeModal}
        title="Right Drawer"
      >
        <Typography.H5 component="div">Right Drawer Content</Typography.H5>
      </RightDrawerModal>
    </>
  );
};

const BottomDrawerButton = () => {
  const { open, closeModal, openModal } = useModalActions();
  return (
    <>
      <ThemeButton variant="secondary" text="Open bottom drawer" onClick={openModal} />
      <BottomDrawerModal
        open={open}
        id="demo-bottom-drawer"
        onClose={closeModal}
        title="Bottom Drawer"
      >
        <Typography.H5 component="div">Bottom Drawer Content</Typography.H5>
        <Box minHeight="200px" />
      </BottomDrawerModal>
    </>
  );
};

const ResponsiveDrawerButton = () => {
  const { open, closeModal, openModal } = useModalActions();
  return (
    <>
      <ThemeButton variant="secondary" text="Open responsive drawer" onClick={openModal} />
      <ResponsiveDrawerModal
        open={open}
        id="demo-responsive-drawer"
        onClose={closeModal}
        title="Responsive Drawer"
      >
        <Typography.Body>
          I am a responsive drawer. I will render as a BottomDrawer on mobile, and a RightDrawer on tablet/desktop.
        </Typography.Body>
        <Typography.Body>
          Resize the browser window to see me change!
        </Typography.Body>
      </ResponsiveDrawerModal>
    </>
  );
};

export const ModalLaunchButtons = {
  Modal: ModalButton,
  RightDrawer: RightDrawerButton,
  BottomDrawer: BottomDrawerButton,
  ResponsiveDrawer: ResponsiveDrawerButton,
};

