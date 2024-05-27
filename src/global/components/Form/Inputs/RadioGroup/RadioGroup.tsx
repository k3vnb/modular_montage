import React from 'react';
import { Stack } from '@mui/system';
import { HelpText, getAttributesForHelpText } from '../../HelpText';
import { Fieldset, Legend } from './RadioGroup.elements';
import { RadioInput } from './RadioInput/RadioInput';
import { type TRadioGroupFieldsetProps } from '../types';

type Props = {
  direction?: 'row' | 'column';
} & TRadioGroupFieldsetProps;

export const RadioGroup = (props: Props) => {
  const {
    id,
    options,
    value,
    name,
    legend,
    invalid = false,
    required = false,
    hideLegend = false, 
    direction = 'column',
    disabled = false,
    onChange,
  } = props;
  const groupName = name || id;

  const helpText = React.useMemo(() => {
    if (props.helpText) return props.helpText;
    const defaultInvalidText = 'Invalid field.';
    return invalid ? defaultInvalidText : '';
  }, [props.helpText, invalid]);

  const { helpTextId, ariaDescribedByProps } = React.useMemo(() => (
    getAttributesForHelpText(id, helpText)
  ), [id, helpText]);

  return (
    <Fieldset
      disabled={disabled}
      {...ariaDescribedByProps}
    >
      <Stack gap={3}>
        <Legend srOnly={hideLegend}>{legend}</Legend>
        <Stack gap={3} direction={direction}>
          {options.map((option) => (
            <RadioInput
              key={option.value}
              required={required}
              name={groupName}
              value={option.value}
              label={option.label}
              checked={value === option.value}
              disabled={disabled || option.disabled}
              onChange={onChange}
            />
          ))}
        </Stack>
        {!!helpText && (
          <HelpText id={helpTextId} error={invalid}>
            {helpText}
          </HelpText>
        )}
      </Stack>
    </Fieldset>
  );
};
