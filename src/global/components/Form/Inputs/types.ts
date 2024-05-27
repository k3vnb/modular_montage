type TFormFieldExtProps = {
  id: string;
  invalid?: boolean;
  helpText?: string;
};

type TInputFieldExtProps = {
  label: string | React.ReactNode;
} & TFormFieldExtProps;

type TFieldsetExtProps = {
  legend: string | React.ReactNode;
  hideLegend?: boolean;
} & TFormFieldExtProps;

type TFieldsetFieldProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & TFieldsetExtProps;
type TOptionValue = string;

export type TOptions = {
  label: string | React.ReactNode;
  value: TOptionValue;
  disabled?: boolean;
};

export type TRadioGroupFieldsetProps = Omit<TFieldsetFieldProps, 'onChange'> & {
  required?: boolean;
  options: TOptions[];
  value: TOptionValue;
  onChange: (value: TOptionValue) => void;
};

export type TInputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & TInputFieldExtProps;

export type TToggleSwitchFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> & TInputFieldExtProps;
