import React from 'react';
import { useInput } from '@mui/base';
import { Stack } from '@mui/system';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import { HelpText, getAttributesForHelpText } from '../../HelpText';
import { StyledInputRoot, StyledTextAreaElement, type TTextAreaProps } from './TextInput.elements';
import { ACTIVE_LABEL_CLASS, DISABLED_CLASS, READ_ONLY_CLASS } from '../constants';
import type { TextInputProps } from './TextInput'; 

export type TextAreaProps = Omit<TextInputProps, 'iconLeft' | 'iconRight'> & TTextAreaProps;

export const TextArea = React.forwardRef(function CustomTextAreaInput(
  props: TextAreaProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    label,
    invalid = false,
    helpText = '',
    className = '',
    backgroundColor,
  } = props;

  const disabled = props.disabled || props.readOnly;

  const classNames = [
    className,
    disabled && DISABLED_CLASS,
    props.readOnly && READ_ONLY_CLASS,
  ].filter(Boolean).join(' ');

  const { getRootProps, getInputProps } = useInput({ ...props, disabled });

  const inputHasValue = !!props.value || !!props.defaultValue;
  const labelClassNames = inputHasValue ? ACTIVE_LABEL_CLASS : '';

  const inputProps = getInputProps();

  // Make sure that both the forwarded ref and the ref returned from the getInputProps are applied on the input element
  inputProps.ref = useForkRef(inputProps.ref, ref);
  
  const { helpTextId, ariaDescribedByProps } = React.useMemo(() => (
    getAttributesForHelpText(props.id, helpText)
  ), [props.id, helpText]);

  const rows =  Number(props.rows) || 3;

  return (
    <Stack gap="2px">
      <StyledInputRoot
        error={invalid}
        textArea
        className={classNames}
        backgroundColor={backgroundColor}
        {...getRootProps()}
      >
        <label className={labelClassNames} htmlFor={props.id}>{label}</label>
        <StyledTextAreaElement
          rows={rows}
          {...inputProps}
          {...ariaDescribedByProps}
          {...(props.style ? { style: props.style } : {})}
        />
      </StyledInputRoot>
      <HelpText id={helpTextId} error={invalid}>
        {helpText}
      </HelpText>
    </Stack>
  );
});
