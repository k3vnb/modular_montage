import type { ThemedTemplateVariants } from 'global/types';
import type { ToastProps } from './Toast/Toast';

export type ToastVariants = ThemedTemplateVariants;
export type ToastData = ToastProps;

type ToastRendererOverride = Omit<ToastData, 'onClose'|'open'|'id'>;

export type ToastRendererOptions = ToastRendererOverride & {
  id?: string;
  onClose?: () => void;
};

export type ToastDataMap = Record<string, ToastRendererOptions>;
