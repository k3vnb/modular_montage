import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalToastState } from './useGlobalToastState';
import type { ToastRendererOptions } from '../types';

export const useToastRenderer = () => {
  const { addToast, removeToast } = useGlobalToastState();

  const handleAddToast = React.useCallback((options: ToastRendererOptions) => {
    const id = options.id || uuidv4();
  
    addToast({
      ...options,
      id,
      open: true,
      onClose: () => {
        removeToast(id);
        if (options.onClose) options.onClose();
      },
    });
  }, [addToast, removeToast]);

  const showSuccessToast = React.useCallback((options: ToastRendererOptions) => {
    handleAddToast({ ...options, variant: 'success' });
  }, [handleAddToast]);

  const showErrorToast = React.useCallback((options: ToastRendererOptions) => {
    handleAddToast({ ...options, variant: 'danger' });
  }, [handleAddToast]);

  const cancelToast = React.useCallback(({ id }: { id: string }) => {
    removeToast(id);
  }, [removeToast]);

  return {
    showToast: handleAddToast,
    showSuccessToast,
    showErrorToast,
    cancelToast,
  };
};
