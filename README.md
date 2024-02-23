# useFormState -- useful hooks and form elements in React / TypeScript

# `useFormState` Hook

The `useFormState` React hook generates a dynamic, type safe, consistent form state.  It handles validation, error messages, tracks initial values and current values, allows for resets and can be used to completely manage a form's state or as part of a composable data structure.
## Usage

### Form Config

A `FormConfig` defines the structure and shape of the form, it is parsed internally by the `useFormState` hook to generate a form state.
  - A FormConfig is an array of `FieldConfig<FieldValueType>` objects, each of which defines the type and values of a form field.
  - A `FieldConfig` object has the following properties:
    - `id`: A unique string identifier for the field.
    - `initialValue`: The initial value of the field.
    - `validations`: An array of validation functions that accept the field's value and return a string error message if the value is invalid. It returns the first invalid message, so priority of messages is determined by the order of the array.
      - validation functions should match the signature of the ValidationFn, and return an error message (string) if invalid or an empty string if field is valid: `type ValidationFn<FieldValueType> = (value: FieldValueType) => string`
    - `getIsDirty`: An optional function that accepts the field's initial value and current value and returns a boolean indicating whether the field has been modified from its initial state. If not provided, the hook will use a default function that checks for strict equality between the initial and current values.
      - it must match the signature of the CompareFn: `type CompareFn<FieldValueType> = (prevValue: FieldValueType, nextValue: FieldValueType) => boolean;`
      - Provide a custom `getIsDirty` function for custom field values which will not properly evaluate in a strict equal comparison (ie, any object or array).
#### Example FormConfig
   ```tsx
   type TComplexField = {
      shouldEmail: boolean;
      email: string;
    };
   
   const formConfig = [
     {
       id: 'name',
       initialValue: user?.name || '',
       validations: [(value: string) => isBlank(value) ? 'Name is required.' : ''],
     } as FieldConfig<string>,
     {
      id: 'quantity',
      initialValue: user?.quantity || 0,
      validations: [
        (value: number) => value < 1 ? 'Must have at least one thing.' : '',
        (value: number) => value > 100 ? 'Too many things!.' : '',
      ],
     } as FieldConfig<number>,
     {
      id: 'complexField',
      initialValue: {
        shouldEmail: false,
        email: user?.email || '',
      },
      validations: [
        (value: TComplexField) => value.shouldEmail && isBlank(value.email) ? 'Email is required.' : '',
      ],
      getIsDirty: (initVal: TComplexField, currVal: TComplexField): boolean => (
        initVal.enabled !== currVal.enabled || initVal.val !== currVal.val
      ),
     } as FieldConfig<TComplexField>,
   ] as FormConfig;
   ```

###  Example Instantiation the `useFormState` hook with the `FormConfig` and FormType

   ```tsx
   type MyFormType = {
     name: string;
     quantity: number;
     complexField: TComplexField;
  };
  
   const {
     values,
     errors,
     isDirty,
     isInvalid,
     handleBlur,
     handleChange,
   } = useFormState<UpdateUserMyFormType>(formConfig);
   ```

Use the returned state and functions in your component to interact with the form state.

## State and Functions

- `values`: An object representing the current values of the form fields.

- `errors`: An object that holds validation error messages for each field.

- `isDirty`: A boolean indicating whether the form has been modified from its initial state.

- `isInvalid`: A boolean indicating whether the form has validation errors.

- `initialValues`: An object representing the initial values of the form fields. 

- `handleBlur(fieldName: keyof TFormValuesTypes)`: A function to handle the `onBlur` event for a specific field. It marks the field as "touched."  Error messages remain invisible until the field recieves an 'onBlur' event, so as not to prematurely render error UI.

- `handleChange(fieldName: keyof TFormValuesTypes, value: TFormValuesTypes[keyof TFormValuesTypes])`: A function to handle changes to a specific field's value.

- `resetForm()`: Resets the form to its initial state, clearing any changes and touched states.

- `resetField(fieldName: keyof TFormValuesTypes)`: Resets a specific field to its initial value and clears its touched state.
