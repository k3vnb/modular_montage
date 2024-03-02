import * as React from 'react';
import { getFormStateFromConfig } from './utils';

import type {
  FormStateCore,
  FormConfig,
  TouchedMap,
  ErrorMessageMap,
  UseFormStateReturnType,
} from './types';

export function useFormState<TFormValuesTypes>(
  formConfig: FormConfig
): UseFormStateReturnType<TFormValuesTypes> {
  // Create form state core object from form config
  const formStateCore: FormStateCore<TFormValuesTypes> = React.useMemo(() => (
    getFormStateFromConfig<TFormValuesTypes>(formConfig)
  ), [formConfig]);

  const {
    initialFormValues,
    fieldIsDirtyComparators,
    fieldValidations,
  } = formStateCore;

  // Track form values
  const [formValues, setFormValues] = React.useState(initialFormValues);

  // Track form touched state (ie, if a field has triggered an onBlur event)
  const [touched, setTouched] = React.useState<TouchedMap<TFormValuesTypes>>(
    {} as TouchedMap<TFormValuesTypes>
  );

  // Track if form has been changed from initial values
  const isDirty = React.useMemo(() => {
    for (const key in formValues) {
      // perform either a default shallow compare or a custom comparator function defined on the field
      const getFieldIsDirty = fieldIsDirtyComparators[key];

      // if any field is dirty, return true to indicate form is dirty
      if (getFieldIsDirty(initialFormValues[key], formValues[key])) {
        return true;
      }
    }
    return false;
  }, [fieldIsDirtyComparators, formValues, initialFormValues]);

  const handleFieldChange = (
    fieldName: keyof TFormValuesTypes,
    value: TFormValuesTypes[keyof TFormValuesTypes]
  ) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleFieldBlur = (fieldName: keyof TFormValuesTypes) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [fieldName]: true,
    }));
  };

  const handleReset = () => {
    setFormValues(initialFormValues);
    setTouched({} as TouchedMap<TFormValuesTypes>);
  };

  const handleResetField = (fieldName: keyof TFormValuesTypes) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: initialFormValues[fieldName],
    }));
    setTouched((prevTouched) => ({
      ...prevTouched,
      [fieldName]: false,
    }));
  };

  // Reset form values and touched state when initialFormValues changes, ie, when upstream API data changes
  React.useEffect(() => {
    handleReset();
  }, [initialFormValues]);

  // Track form errors by looping through field.validations[] and returning the first error
  const errorMessages: ErrorMessageMap<TFormValuesTypes> = React.useMemo(() => {
    const messages = {} as ErrorMessageMap<TFormValuesTypes>;

    for (const key in fieldValidations) {
      const value = formValues[key];
      const validations = fieldValidations[key] || [];
      const errorMessage = validations
        .map((validation) => validation(value))
        .find((error) => !!error);
      messages[key] = errorMessage || '';
    }

    return messages;
  }, [fieldValidations, formValues]);

  // Track if form is invalid by checking if any invalid fields exist (for disabling submit button, etc)
  const isFormInvalid = React.useMemo(() => {
    return Object.values(errorMessages).some((error) => !!error);
  }, [errorMessages]);

  // Only show errors for fields that have been "touched", ie, onBlur has been triggered
  const visibleErrors: ErrorMessageMap<TFormValuesTypes> = React.useMemo(() => {
    const errors = {} as ErrorMessageMap<TFormValuesTypes>;

    for (const key in errorMessages) {
      if (touched[key] && !!errorMessages[key]) {
        errors[key] = errorMessages[key];
      }
    }

    return errors;
  }, [errorMessages, touched]);

  return {
    values: formValues,
    touched,
    isDirty,
    errors: visibleErrors,
    isInvalid: isFormInvalid,
    initialValues: initialFormValues,
    resetForm: handleReset,
    resetField: handleResetField,
    handleBlur: handleFieldBlur,
    handleChange: handleFieldChange,
  };
}
