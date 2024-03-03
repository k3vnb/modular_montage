export type ThemedTemplateVariants =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'danger'
  | 'warning'
  | 'success'
  | 'special';

  export type TContainerProps<P = unknown> = P & {
    children?: React.ReactNode;
  };
  