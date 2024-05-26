import { type ModalProps as BaseModalProps } from '@mui/base';

export type ModalProps = Omit<BaseModalProps, 'children'> & {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  size?: 'small' | 'medium' | 'large';
};
