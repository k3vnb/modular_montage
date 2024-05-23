import React from 'react';
import { Box, type BoxProps, styled } from '@mui/system';
import { Button as BaseButton, type ButtonProps  } from '@mui/base';

export type UnstyledButtonProps = ButtonProps & BoxProps;

export const UnstyledButton = React.forwardRef<HTMLButtonElement, UnstyledButtonProps>(function UnstyledButton(props: UnstyledButtonProps, ref){
  return <Box component={ButtonReset} ref={ref} {...props} />;
});

const ButtonReset = styled(BaseButton)(() => ({
  padding: '0',
  minWidth: '0',
  minHeight: '0',
  lineHeight: '1',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  '&:focus': {
    boxShadow: 'none',
  },
  ':focus-visible': {
    outline: 'revert',
  },
}));
