import React from 'react';
import { StyledInput, StyledLabel, DISABLED_CLASS } from './RadioInput.elements';
import type { TOptions } from '../../types';

type RadioInputProps = TOptions & {
  name: string;
  checked?: boolean;
  required?: boolean;
  onChange: (value: string) => void;
};

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  onChange,
  ...inputProps
}) => {
  const className = inputProps.disabled ? DISABLED_CLASS : '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledLabel className={className}>
      <StyledInput
        {...inputProps}
        type="radio"
        onChange={handleChange}
      />
      {label}
    </StyledLabel>
  );
};
