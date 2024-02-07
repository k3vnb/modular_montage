type ValidationFn<T> = (value: T) => string;
type CompareFn<T> = (prevValue: T, nextValue: T) => boolean;

export type IsDirtyComparators<T> = Record<keyof T, CompareFn<T[keyof T]>>;
export type FieldValidations<T> = Record<keyof T, ValidationFn<T[keyof T]>[]>;
export type ErrorMessageMap<TFormValuesTypes> = Record<keyof TFormValuesTypes, string>;
export type TouchedMap<TFormValuesTypes> = Record<keyof TFormValuesTypes, boolean>;

export interface FormStateCore<TFormValuesTypes> {
  initialFormValues: TFormValuesTypes;
  fieldIsDirtyComparators: IsDirtyComparators<TFormValuesTypes>;
  fieldValidations: FieldValidations<TFormValuesTypes>;
};

export interface FieldConfig<T> {
  id: string;
  initialValue: T;
  validations: ValidationFn<T>[];
  getIsDirty?: CompareFn<T>;
};

export type FormConfig = Array<FieldConfig<unknown>>;

export type UseFormStateReturnType<TFormValuesTypes> = {
  values: TFormValuesTypes;
  touched: TouchedMap<TFormValuesTypes>;
  isDirty: boolean;
  errors: ErrorMessageMap<TFormValuesTypes>;
  isInvalid: boolean;
  initialValues: TFormValuesTypes;
  resetForm: () => void;
  resetField: (fieldName: keyof TFormValuesTypes) => void;
  handleBlur: (fieldName: keyof TFormValuesTypes) => void;
  handleChange: (
    fieldName: keyof TFormValuesTypes,
    value: TFormValuesTypes[keyof TFormValuesTypes]
  ) => void;
};
