import React from 'react';
import { useSnackbar } from '@mui/base';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon  from '@mui/icons-material/Warning';
import type { SvgIconComponent } from '@mui/icons-material';

import {
  StyledToast,
  DismissButton,
  ActionButton,
  ActionsContainer,
} from './Toast.elements';

import {
  EXIT_CLASS, EXIT_DURATION, DEFAULT_AUTOHIDE_DURATION, DEFAULT_VARIANT,
} from '../constants';

import type { ToastVariants } from '../types';

export type ToastActionProps = {
  label: string;
  onClick: () => void;
};

export type ToastProps = {
  id: string;
  open: boolean;
  icon?: SvgIconComponent;
  variant?: ToastVariants;
  message: string | React.ReactNode;
  dismissable?: boolean;
  action?: ToastActionProps;
  isStaticPosition?: boolean;
  duration?: number;
  animated?: boolean;
  onClose?: () => void;
};

const defaultIcons: Record<ToastVariants, SvgIconComponent> = {
  primary: InfoIcon,
  secondary: InfoIcon,
  info: InfoIcon,
  special: InfoIcon,
  success: CheckCircleIcon,
  danger: WarningIcon,
  warning: WarningIcon,
};

export const Toast = ({
  open,
  icon,
  action,
  message,
  animated = true,
  duration = DEFAULT_AUTOHIDE_DURATION,
  variant = DEFAULT_VARIANT,
  isStaticPosition = false, // static position vs. fixed
  dismissable = true,
  onClose = () => undefined,
}: ToastProps) => {
  const [isClosing, setIsClosing] = React.useState<boolean>(false);

  const handleClose = () => setIsClosing(true);

  React.useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, EXIT_DURATION);
      return () => clearTimeout(timeout);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosing]);

  const { getRootProps } = useSnackbar({
    onClose: handleClose,
    open,
    autoHideDuration: duration,
  });

  const Icon = React.useMemo(() => (
    icon || defaultIcons[variant]
  ), [icon, variant]);

  const shouldAnimateExit = animated && isClosing;

  return (
    <StyledToast
      className={shouldAnimateExit ? EXIT_CLASS : ''}
      isStaticPosition={isStaticPosition}
      animated={animated}
      variant={variant}
      {...getRootProps()}
    >
      <Icon />
      {message}
      <ActionsContainer>
        {!!action && <ActionButton {...action} />}
        {dismissable && <DismissButton onClick={handleClose} />}
      </ActionsContainer>
    </StyledToast>
  );
};
