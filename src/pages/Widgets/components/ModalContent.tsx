import { Stack } from '@mui/system';
import { Typography } from 'global/components/Typography';

export const ModalAccessibilityContent = (): JSX.Element => {
  return (
    <Stack spacing={2}>
      <Typography.H5 component="div">Accessibility Controls</Typography.H5>
      <Typography.Body>
        This modal has been designed with accessibility in mind. The modal is
        announced to screen readers and can be closed by pressing the escape key.
      </Typography.Body>
      <Typography.Body>
        Modals employ a backdrop to prevent interaction with the underlying page.
        A 'focus trap' is used to keep focus within the modal until it is closed.
      </Typography.Body>
    </Stack>
  );
};
