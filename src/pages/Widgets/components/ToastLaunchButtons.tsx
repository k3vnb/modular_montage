import React from 'react';
import { ThemeButton } from 'global/components/Buttons';
import { useToastRenderer } from 'global/components/Toast/hooks/useToastRenderer';
import { type ToastRendererOptions } from 'global/components/Toast/types';

export const SuccessToastButton = () => {
  const { showSuccessToast } = useToastRenderer();
  const onClick = () => showSuccessToast({ message: 'Yes! Successful success toast.' });
  return <ThemeButton text="Show a success toast!" onClick={onClick} />;
};

export const ErrorToastButton = () => {
  const { showErrorToast, showSuccessToast } = useToastRenderer();

  const onClickUndo = () => showSuccessToast({ message: 'Woo! Success toast once again' });

  const onClick = () => showErrorToast({
    message: 'Error: Don\'t worry, it\'s not a real error, you did great.',
    action: {
      label: 'Undo',
      onClick: onClickUndo,
    },
  });

  return <ThemeButton text="Show an error toast" onClick={onClick} />;
};

export const AllToastsButton = () => {
  const [showToasts, setShowToasts] = React.useState(false);
  const { showToast } = useToastRenderer();
  const onClick = () => setShowToasts(true);
  
  React.useEffect(() => {
    if (showToasts) {
      let index = 0;
      const showNextToast = () => {
        const toast = TOASTS[index];
        showToast(toast);
        index += 1;
        if (index >= TOASTS.length) {
          setShowToasts(false);
          clearInterval(interval);
        }
      };
      const interval: NodeJS.Timeout = setInterval(showNextToast, 180);
      return () => clearInterval(interval);
    }
  }, [showToast, showToasts]);

  return (
   <ThemeButton text="Show all the toasts" onClick={onClick} />
  );
};

const TOASTS: ToastRendererOptions[] = [
  {
    id: 'demo-success-toast',
    message: 'Success toast',
    variant: 'success',
  },
  {
    id: 'demo-special-toast',
    message: 'Special toast',
    variant: 'special',
  },
  {
    id: 'demo-info-toast',
    message: 'Info toast',
    variant: 'info',
  },
  {
    id: 'demo-primary-toast',
    message: 'Primary toast',
    variant: 'primary',
  },
  {
    id: 'demo-danger-toast',
    message: 'Danger toast',
    variant: 'danger',
  },
  {
    id: 'demo-warning-toast',
    message: 'Warning toast',
    variant: 'warning',
  },
];
