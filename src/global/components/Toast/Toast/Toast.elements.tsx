import React from 'react';
import { Stack, Box, styled } from '@mui/system';
import { Button as BaseButton } from '@mui/base';
import CloseIcon from '@mui/icons-material/Close';

import { EXIT_CLASS } from '../constants';
import type { ToastVariants } from '../types';
import type { ToastActionProps } from './Toast';

const DISMISS_BUTTON_CLASS = 'dismiss-btn';
const ACTION_BUTTON_CLASS = 'action-btn';

const options = {
  shouldForwardProp: (prop: string) => !['variant', 'isStaticPosition','animated'].includes(prop),
};

type StyledToastProps = {
  isStaticPosition?: boolean;
  variant: ToastVariants;
  animated?: boolean;
};

const KEYFRAMES_NAME = 'toastInRight';

export const toastAnimation = {
  animation: `${KEYFRAMES_NAME} .2s cubic-bezier(.4,0,.2,1)`,
  transition: 'transform .2s cubic-bezier(.4,0,.2,1)',
  keyframes: {
    [`@keyframes ${KEYFRAMES_NAME}`]: {
      'from': {
        transform: 'translateX(100%)',
      },
      'to': {
        transform: 'translateX(0)',
      },
    },
  }
};

export const StyledToast = styled(Box, options)<StyledToastProps>(({
  theme,
  variant,
  animated = true,
  isStaticPosition,
}) => {
  const { styles } = theme;

  const variantColors = React.useMemo(() => ({
    backgroundColor: styles[variant].box.surface[0],
    borderColor: styles[variant].box.border[0],
    '& > svg': {
      color: styles[variant].box.border[0],
    },
  }), [styles, variant]);

  const actionFontStyles = {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '0.2px',
    lineHeight: '20px',
  };

  const BUTTON_PADDING = 6;

  return {
    top: 24,
    right: 24,
    opacity: 1,
    position: isStaticPosition ? 'static' : 'fixed',
    zIndex: isStaticPosition ? 1: theme.styles.zIndex.toast,
    animation: animated ? toastAnimation.animation : 'none',
    transition: animated ? toastAnimation.transition : 'none',
    ...toastAnimation.keyframes,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1,2),
    gap: theme.spacing(2.25),
    minHeight: '56px',
    minWidth: '340px',
    width: 'max-content',
    maxWidth: '550px',
    color: styles.neutral[80],
    borderRadius: '8px',
    boxShadow: styles.shadow[1],
    borderWidth: '1px',
    borderStyle: 'solid',
    ...theme.styles.textMdSemibold,
    ...variantColors,
    '& button': {
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all .1s cubic-bezier(.4,0,.2,1)',
      padding: `${BUTTON_PADDING}px`,
    },
    [`.${DISMISS_BUTTON_CLASS}`]: {
      borderRadius: '4px',
      border: '.5px solid transparent',
      color: styles.neutral[90],
      marginRight: `-${BUTTON_PADDING}px`,
      '&:hover': {
        borderColor: variantColors.backgroundColor,
        boxShadow: `0px 0px 2px 0px ${styles.hyperlink[0]}`,
        color: styles.hyperlink[0],
      },
    },
    [`.${ACTION_BUTTON_CLASS}`]: {
      border: 'none',
      color: styles.hyperlink[0],
      ...actionFontStyles,
      '&:hover': {
        textDecoration: 'underline',
        textUnderlineOffset: 2,
      },
    },
    [`&.${EXIT_CLASS}`]: {
      opacity: 0,
      transform: 'translateX(100%)',
      transition: 'all .2s cubic-bezier(.4,0,.2,1)',
    },
    [theme.breakpoints.down('sm')]: {
      right: 0,
      gap: theme.spacing(1.5),
      width: `calc(100vw - ${theme.spacing(1)})`,
      maxWidth: `calc(100vw - ${theme.spacing(1)})`,
    },
  };
});

const Divider = () => (
  <Box
    sx={{
      width: '1px',
      height: '100%',
      minHeight: '22px',
      backgroundColor: theme => theme.styles.neutral[80],
    }}
  />
);

export const ActionsContainer = ({ children }: React.PropsWithChildren) => (
  <Stack
    flexDirection="row"
    flexGrow={1}
    display="inline-flex"
    alignItems="center"
    justifyContent="flex-end"
    gap="6px"
    divider={<Divider />}
  >
    {children}
  </Stack>
);

export const ActionButton: React.FC<ToastActionProps> = ({
  label,
  onClick,
}) => (
  <BaseButton
    className={ACTION_BUTTON_CLASS}
    onClick={onClick}
  >
    {label}
  </BaseButton>
);

type ButtonProps = {
  onClick: () => void;
};

export const DismissButton: React.FC<ButtonProps> = ({ onClick }) => (
  <BaseButton
    aria-label="Dismiss this notification."
    className={DISMISS_BUTTON_CLASS}
    onClick={onClick}
  >
    <CloseIcon />
  </BaseButton>
);
