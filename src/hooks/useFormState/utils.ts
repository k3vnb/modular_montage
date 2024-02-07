import type {
  FormStateCore,
  FormConfig,
  FieldValidations,
  IsDirtyComparators,
  TouchedMap,
  ErrorMessageMap,
  UseFormStateReturnType,
} from "./types";

// default compare function, will not work for objects/arrays (use custom 'getIsDirty' function for deep comparison)
function shallowCompareIsDirty<T>(prevValue: T, nextValue: T) {
  return prevValue !== nextValue;
};

export function getFormStateFromConfig<R>(fields: FormConfig){
  const formConfig = {
    initialFormValues: {} as R,
    fieldIsDirtyComparators: {} as IsDirtyComparators<R>,
    fieldValidations: {} as FieldValidations<R>,
  };

  fields.forEach((field) => {
    formConfig.initialFormValues = {
      ...formConfig.initialFormValues,
      [field.id]: field.initialValue,
    };
    formConfig.fieldIsDirtyComparators = {
      ...formConfig.fieldIsDirtyComparators,
      [field.id]: field.getIsDirty ?? shallowCompareIsDirty,
    };
    formConfig.fieldValidations = {
      ...formConfig.fieldValidations,
      [field.id]: field.validations,
    };
  });

  return formConfig as FormStateCore<R>;
};

export function getEmptyFormState<T>(): UseFormStateReturnType<T> {
  return {
    values: {} as T,
    touched: {} as TouchedMap<T>,
    isDirty: false,
    errors: {} as ErrorMessageMap<T>,
    isInvalid: false,
    initialValues: {} as T,
    resetForm: () => undefined,
    resetField: () => undefined,
    handleBlur: () => undefined,
    handleChange: () => undefined,
  };
};
