import React from 'react';
import type { ToastData } from '../../types';

export type GlobalToastState = {
  toastList: ToastData[];
  addToast: (toast: ToastData) => void;
  removeToast: (id: string) => void;
}

/**
 * This hook should only have one instance in a top-level global context
 */

export const useGlobalToastStateCore = (): GlobalToastState => {
  const _orderedIds = React.useRef<string[]>([]);
  const [toastMap, setToastMap] = React.useState<Record<string, ToastData>>({});

  const orderedIds = React.useMemo(() => (
    Array.from(new Set(_orderedIds.current)).filter(id => !!toastMap[id])
  ), [toastMap]);

  const toastList: ToastData[] = React.useMemo(() => (
    orderedIds.map((id) => toastMap[id]).filter(Boolean)
  ), [orderedIds, toastMap]);

  // visible toasts are "open" toasts
  const hasOpenToasts = React.useMemo(() => (
    toastList.some((toast) => toastMap[toast.id]?.open)
  ), [toastMap, toastList]);

  const shouldClearCache = React.useMemo(() => (
    !!toastList.length && !hasOpenToasts
  ), [toastList, hasOpenToasts]);

  const clearCache = React.useCallback(() => {
    setToastMap({});
    _orderedIds.current = [];
  }, []);

  React.useEffect(() => {
    if (shouldClearCache) clearCache();
  }, [clearCache, shouldClearCache]);

  const addToast = React.useCallback((toast: ToastData) => {
    if (!_orderedIds.current.includes(toast.id)) {
      _orderedIds.current = [..._orderedIds.current, toast.id];
    }

    setToastMap((prev) => ({
      ...prev,
      [toast.id]: toast,
    }));
  }, [setToastMap]);

  const removeToast = React.useCallback((id: string) => {
    _orderedIds.current = _orderedIds.current.filter((toastId) => toastId !== id);
    setToastMap((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: { ...prev[id], open: false },
      };
    });
  }, [setToastMap]);

  return {
    toastList,
    addToast,
    removeToast,
  };
};
