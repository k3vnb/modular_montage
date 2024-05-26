import React from 'react';
import { Stack, styled } from '@mui/system';
import { CloseButton } from './CloseButton';
import { TRANSITION_DURATION } from '../../constants';
import type { BottomDrawerModalProps, DrawerTransitionChildProps } from '../../types';

type BottomDrawerProps = DrawerTransitionChildProps<BottomDrawerModalProps>;

export const Drawer = React.forwardRef<HTMLDivElement, BottomDrawerProps>(function BottomDrawerContainer ({
  children,
  onClose = () => undefined,
  ...wrapperProps
}, ref) {
  return (
    <StyledDrawerWrapper ref={ref} {...wrapperProps}>
      <CloseButton onClick={onClose} />
      <ScrollContainer>
        {children}
      </ScrollContainer>
    </StyledDrawerWrapper>
  );
});

const options = {
  shouldForwardProp: (prop: string) => ![
    'open', 'isClosing', 'bottom', 'zIndex', 'maxHeight',
  ].includes(prop),
};

export const StyledDrawerWrapper = styled(Stack, options)<Omit<BottomDrawerProps, 'onClose'>>(({
  theme,
  open,
  isClosing,
  bottom = 0,
  zIndex = 1,
  maxHeight = '96vh',
}) => ({
  visibility: (open || isClosing) ? 'visible' : 'hidden', 
  position: 'fixed',
  zIndex,
  bottom,
  left: 0,
  right: 0,
  width: '100vw',
  maxWidth: '100vw',
  maxHeight,
  overflow: 'auto',
  backgroundColor: theme.styles.neutral[5],
  borderRadius: '8px 8px 0 0',
  transformOrigin: 'top',
  transform: open ? 'translateY(0%)' : 'translateY(100%)',
  transition: `transform ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1) 10ms`,
}));

const StyledScrollStackOuter = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2, 4),
  gap: theme.spacing(2),
  overflowY: 'auto',
  height: '100%',
  maxHeight: '100%',
  ...theme.styles.textMd,
  color: theme.styles.neutral[90],
}));

const ScrollContainer = ({ children }: React.PropsWithChildren) => (
  <StyledScrollStackOuter>
    <Stack minHeight="max-content">
      {children}
    </Stack>
  </StyledScrollStackOuter>
);
