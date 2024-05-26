import * as React from 'react';
import { Box, styled } from '@mui/system';
import { UnstyledButton } from 'global/components/Buttons';

const StyledCloseButton = styled(UnstyledButton)(({ theme }) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifySelf: 'flex-end',
    backgroundColor: theme.styles.neutral[50],
    borderRadius: '4px',
    width: '40%',
    minWidth: '60px',
    height: '7px',
    '&:hover&:not(:disabled)': {
      backgroundColor: theme.styles.hyperlink[0],
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: .3,
    },
  };
});

export type CloseButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
};

export const CloseButton: React.FC<CloseButtonProps> = ({
  disabled = false,
  onClick,
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px 0' }}>
      <StyledCloseButton
        aria-label="Close Drawer"
        title="Close"
        disabled={disabled}
        onClick={onClick}
      />
    </Box>
  );
};
