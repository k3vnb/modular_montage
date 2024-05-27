type TFormFieldExtProps = {
  id: string;
  invalid?: boolean;
  helpText?: string;
};

type TInputFieldExtProps = {
  label: string | React.ReactNode;
} & TFormFieldExtProps;


export type TInputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & TInputFieldExtProps;

