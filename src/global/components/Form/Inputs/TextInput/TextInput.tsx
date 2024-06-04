import React from 'react';
import { useInput } from '@mui/base';
import { Stack } from '@mui/system';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import type { SvgIconComponent } from '@mui/icons-material';

import { HelpText, getAttributesForHelpText } from '../../HelpText';
import { StyledInputRoot, StyledInputElement } from './TextInput.elements';
import {
  ACTIVE_LABEL_CLASS, DISABLED_CLASS, READ_ONLY_CLASS, ICON_LEFT_CLASS, ICON_LEFT_LABEL_CLASS,
} from '../constants';
import type { TInputFieldProps } from '../types';
// import type { TileVariants } from 'global/components/Tile';

export type TextInputProps = {
  backgroundColor?: string; // transparent backgrounds will not correctly hide border behind label (:sad-face)
  animated?: boolean;
  iconLeft?: SvgIconComponent;
  iconRight?: SvgIconComponent;
} & TInputFieldProps;

export const TextInput = React.forwardRef(function CustomInput(
  props: TextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    label,
    invalid = false,
    iconLeft,
    iconRight,
    helpText = '',
    className = '',
    animated = false,
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
  const labelClassNames = [(!animated || inputHasValue) ? ACTIVE_LABEL_CLASS : '', iconLeft ? ICON_LEFT_LABEL_CLASS : ''].filter(Boolean).join(' ');

  const inputProps = getInputProps();

  // Make sure that both the forwarded ref and the ref returned from the getInputProps are applied on the input element
  inputProps.ref = useForkRef(inputProps.ref, ref);
  
  const { helpTextId, ariaDescribedByProps } = React.useMemo(() => (
    getAttributesForHelpText(props.id, helpText)
  ), [props.id, helpText]);

  const [IconLeft, IconRight] = React.useMemo(() => ([
    iconLeft || null,
    iconRight || null,
  ]), [iconLeft, iconRight]);

  return (
    <Stack gap="2px">
      <StyledInputRoot
        error={invalid}
        className={classNames}
        backgroundColor={backgroundColor}
        {...getRootProps()}
      >
        {IconLeft && <IconLeft className={ICON_LEFT_CLASS} />}
        <label className={labelClassNames} htmlFor={props.id}>{label}</label>
        <StyledInputElement
          {...props}
          {...inputProps}
          {...ariaDescribedByProps}
        />
        {IconRight && <IconRight />}
      </StyledInputRoot>
      <HelpText id={helpTextId} error={invalid}>
        {helpText}
      </HelpText>
    </Stack>
  );
});
