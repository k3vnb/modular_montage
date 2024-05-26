import { Modal } from '@mui/base';
import { visuallyHidden } from '@mui/utils';
import { Stack, Box, styled, type StackProps } from '@mui/system';
import { Button as BaseButton, type ButtonProps } from '@mui/base';
import CloseIcon from '@mui/icons-material/Close';
import { TRANSITION_DURATION } from '../constants';

type StyledDrawerWrapperProps = {
  open: boolean;
  isClosing?: boolean;
  zIndex?: string | number;
};

const options = {
  shouldForwardProp: (prop: string) => ![
    'open', 'isClosing', 'zIndex',
  ].includes(prop),
};

export const StyledDrawerWrapper = styled(Stack, options)<StyledDrawerWrapperProps>(({
  theme,
  open,
  isClosing,
  zIndex = 1,
}) => ({
  visibility: (open || isClosing) ? 'visible' : 'hidden', 
  position: 'fixed',
  zIndex,
  bottom: 0,
  right: 0,
  height: '100vh',
  maxHeight: '100vh',
  minWidth: '350px',
  maxWidth: '50vw',
  overflow: 'hidden',
  backgroundColor: theme.styles.neutral[10],
  borderRadius: '2px 0px 0px 2px',
  transformOrigin: 'right',
  transform: open ? 'translateX(0%)' : 'translateX(100%)',
  transition: `transform ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1) 10ms`,
}));

export const StyledModal = styled(Modal)(() => ({
  zIndex: 1300,
  position: 'relative',
}));

const StyledContentStack = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  padding: '28px 32px',
  gap: theme.spacing(2),
  overflowY: 'hidden',
  height: '100%',
  maxHeight: '100%',
  minWidth: '100%',
}));

const CLOSE_BUTTON_CLASS = 'close-btn';
const TITLE_CLASS = 'modal-header-title';

const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '100%',
  color: theme.styles.neutral[80],
  [`.${CLOSE_BUTTON_CLASS}`]: {
    display: 'inline-flex',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    border: '.5px solid transparent',
    color: theme.styles.neutral[70],
    padding: '0px',
    cursor: 'pointer',
    fontSize: '24px',
    '&:hover': {
      borderColor: theme.styles.hyperlink[0],
      color: theme.styles.hyperlink[0],
    },
  },
  [`.${TITLE_CLASS}`]: {
    margin: 0,
    ...theme.styles.headingH4,
  },
}));

export const CloseButton= ({ onClick }: ButtonProps) => (
  <BaseButton
    aria-label="Close this modal."
    className={CLOSE_BUTTON_CLASS}
    onClick={onClick}
  >
    <CloseIcon fontSize="inherit" />
  </BaseButton>
);

type DrawerHeaderProps = {
  id: string;
  title: string;
  hideTitle?: boolean;
  onClose: () => void;
};

export const DrawerHeader = ({ title, id, hideTitle, onClose }: DrawerHeaderProps) => {
  const titleStyleOverrides = hideTitle ? { style: { ...visuallyHidden } } : {};
  return (
    <StyledHeader id={id}>
      <h4 className={TITLE_CLASS} {...titleStyleOverrides}>{title}</h4>
      <CloseButton onClick={onClose} />
    </StyledHeader>
  );
};

export const DrawerContent = ({ children, ...stackProps }: StackProps) => {
  return (
    <StyledContentStack {...stackProps}>
      <Stack sx={{ overflowY: 'hidden' }}>
        {children}
      </Stack>
    </StyledContentStack>
  );
};

