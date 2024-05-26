import React from 'react';
import { Box, useTheme } from '@mui/system';
import { PageTitle } from 'global/components/PageTitle';
import InterestsIcon from '@mui/icons-material/InterestsOutlined';
// import { useGlobalContext } from 'contexts/GlobalContext';
import { ThemeButton } from 'global/components/Buttons';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import { Modal, type ModalProps } from 'global/components/Modal';

export const Widgets = (): JSX.Element => {
  const theme = useTheme();
  console.log(theme);
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
          <ThemeButton variant="secondary" text="Open bottom drawer" />
          <ThemeButton variant="info" text="Open right drawer" />
          <ThemeButton variant="primary" text="Responsive drawer" />
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
