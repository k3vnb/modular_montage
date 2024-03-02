import { styled } from '@mui/system';
import { Button as BaseButton  } from '@mui/base';

export const UnstyledButton = styled(BaseButton)(() => ({
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
}));
