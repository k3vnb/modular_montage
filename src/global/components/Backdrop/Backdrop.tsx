import React from 'react';
import { styled, Box } from '@mui/system';

type BackdropProps = {
  open?: boolean;
  className?: string
  zIndex?: number;
  transitionDuration?: number;
};

const BaseBackdrop = React.forwardRef<HTMLDivElement, BackdropProps>(function BaseBackdrop ({
  open,
  className = '',
  ...other
}, ref) {

  const classNames = React.useMemo(() => (
    [open ? 'MuiBackdrop-open' : '', className].filter(Boolean).join(' ')
  ), [open, className]);

  return (
    <Box
      aria-hidden="true"
      className={classNames}
      ref={ref}
      {...other}
    />
  );
});

const options = {
  shouldForwardProp: (prop: string) => !['ownerState','open', 'zIndex', 'transitionDuration'].includes(prop),
};

export const Backdrop = styled(BaseBackdrop, options)`
  z-index: ${({ zIndex }) => zIndex ?? -1};
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  opacity: ${({ open }) => open ? 0.85 : 0};
  background-color: #000000;
  -webkit-tap-highlight-color: transparent;
  transition: ${({ transitionDuration }) => `opacity ${transitionDuration ?? 225}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`};
`;
