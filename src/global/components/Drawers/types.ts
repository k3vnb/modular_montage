import { type StackProps } from '@mui/system';

export type DrawerCommonProps = StackProps & {
  open: boolean;
  bottom?: string | number;
  maxHeight?: string;
  zIndex?: string | number;
  onClose: () => void;
}; 

export type RightDrawerModalProps = DrawerCommonProps & {
  title: string;
  hideTitle?: boolean;
};

export type DrawerTransitionChildProps<T> = T & {
  isClosing?: boolean;
};

export type BottomDrawerModalProps = DrawerCommonProps;
