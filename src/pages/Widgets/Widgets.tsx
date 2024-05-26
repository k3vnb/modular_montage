import React from 'react';
import { Box } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';
import InterestsIcon from '@mui/icons-material/InterestsOutlined';
// import { useGlobalContext } from 'contexts/GlobalContext';
import { ThemeButton } from 'global/components/Buttons';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import { Modal, type ModalProps } from 'global/components/Modal';
import { BottomDrawerModal, RightDrawerModal, ResponsiveDrawerModal } from 'global/components/Drawers';

export const Widgets = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="App Widgets" icon={InterestsIcon} description="Whirligigs & whatnot" />
      <Tile showBorder variant="info" gap={1}  elevation={1}>
        <Typography.H4 textAlign="center" mb={1}>Here we explore a variety of pop-ups, modals, and themed components</Typography.H4>
      </Tile>
      <Tile showBorder gap={1} variant="info" elevation={1}>
        <Typography.H4>Drawers & Modals</Typography.H4>
        <Box display="flex" justifyContent="space-around" flexDirection="row" flexWrap="wrap" gap={1}>
          <DemoModalButton />
          <DemoRightDrawerButton />
          <DemoBottomDrawerButton />
          <DemoResponsiveDrawerButton />
        </Box>
      </Tile>
      <Tile showBorder gap={1} variant="special" elevation={1}>
        <Typography.H4>Toasts</Typography.H4>
        <ThemeButton variant="info" text="Show a success toast" />
        <ThemeButton filled text="Show all the toasts" />
      </Tile>
    </Box>
  );
};

const DemoModalButton = () => {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  return (
    <>
      <ThemeButton text="Open a modal" onClick={openModal} />
      <DemoModalWidget open={open} onClose={closeModal} />
    </>
  );
};

const DemoModalWidget = ({ open, onClose }: Pick<ModalProps, 'open' | 'onClose'>) => {
  return (
    <Modal.Wrapper
      open={open}
      onClose={onClose}
      size="medium"
      aria-labelledby='demo-modal-header'
    >
      <Modal.Header
        id="demo-modal-header"
        title="Demo Modal"
        onClose={onClose}
      />
      <Modal.MainContentContainer>
        <Typography.H5 component="div">Modal Content</Typography.H5>
      </Modal.MainContentContainer>
      <Modal.FooterContainer>
        <ThemeButton filled text="Close" onClick={onClose} />
      </Modal.FooterContainer>
    </Modal.Wrapper>
  );
};

const DemoRightDrawerButton = () => {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
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

const DemoBottomDrawerButton = () => {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
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

const DemoResponsiveDrawerButton = () => {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
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
