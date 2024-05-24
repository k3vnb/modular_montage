import React from 'react';
import { Stack, type StackProps, styled } from '@mui/system';
import { TRANSITION_DURATION } from '../../constants';
import { THEME_FONTS } from 'theme/typography';
import { CloseButton } from './CloseButton';

type StyledWrapperProps = {
  open: boolean;
  isClosing?: boolean;
  bottom?: string | number;
  zIndex?: string | number;
  maxHeight?: string;
};

export type TBottomDrawerContainerProps = StackProps & StyledWrapperProps & {
  onClose: () => void;
};

export const Drawer = React.forwardRef<HTMLDivElement, TBottomDrawerContainerProps>(function BottomDrawerContainer ({
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

export const StyledDrawerWrapper = styled(Stack, options)<StyledWrapperProps>(({
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
  backgroundColor: theme.styles.neutral[10],
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
  ...THEME_FONTS.textMd,
  color: theme.palette.neutral[100],
}));

const ScrollContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <StyledScrollStackOuter>
      <Stack minHeight="max-content">
        {children}
      </Stack>
    </StyledScrollStackOuter>
  );
};