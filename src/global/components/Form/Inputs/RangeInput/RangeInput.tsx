import React from 'react';
import { Box, type BoxProps, styled } from '@mui/system';
import { Typography } from 'global/components/Typography';

type RangeInputProps = {
  id: string;
  label: string;
  value: number;
  symbol?: string;
  background?: string; 
  min: number;
  max: number;
  hint?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RangeInput = ({
  label,
  id,
  value,
  symbol,
  background = '',
  min,
  max,
  hint,
  disabled = false,
  onChange,
}: RangeInputProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <RangeInputLabel id={id} label={label} value={value} symbol={symbol} />
      <RangeInputCore
        id={id}
        aria-labelledby={`${id}-label`}
        aria-describedby={`${id}-help-1 ${id}-help-2`}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        disabled={disabled}
        sx={{...(background && { background })}}
      />
      <RangeInputHelpText id={id} min={min} max={max} hint={hint} />
    </Box>
  );
};

type RangeInputLabelProps = Pick<RangeInputProps, 'id' | 'label' | 'value' | 'symbol'>;

const RangeInputLabel = ({ label, value, symbol, id }: RangeInputLabelProps) => {
  const displayValue = [value, symbol].filter(Boolean).join(' ');
  return (
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" gap={3}>
      <Typography.H6 id={`${id}-label`} component="label">{label}</Typography.H6>
      <Typography.Body id={`${id}-help-1`}>
        <Box component="span" fontStyle="italic" letterSpacing={-0.25}>Your value: </Box>
        <Box display="inline-flex" justifyContent="end" component="div" minWidth={30} ml={1}>{displayValue}</Box>
      </Typography.Body>
    </Box>
  );
};

const RangeInputHelpText = ({ min, max, id, hint = '' }: Pick<RangeInputProps, 'min' | 'max' | 'hint' | 'id'>) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={0.5} id={`${id}-help-2`}>
      <Typography.Body>Select a value between {min} and {max}</Typography.Body>
      <Typography.Body
        component="span"
        display="inline-flex"
        alignItems="center"
        gap={1}
        minHeight={24}
    >
      {!!hint && <Typography.H6 component="span" sx={{ color: theme => theme.styles.info.main }}>Hint: </Typography.H6>}
      {hint}
    </Typography.Body>
    </Box>
  );
};

type RangeInputCoreProps = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  disabled?: boolean;
} & BoxProps;

const RangeInputCore = ({
  value,
  onChange,
  min,
  max,
  disabled,
  ...boxProps
}: RangeInputCoreProps) => {
  return (
    <Box
      component={StyledRangeInput}
      type="range"
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      disabled={disabled}
      {...boxProps}
    />
  );
};

const StyledRangeInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '6px',
  borderRadius: 4,
  background: theme.styles.neutral[40],
  appearance: 'none',
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    width: 14,
    height: 14,
    background: theme.styles.neutral[70],
    borderRadius: '50%',
  },
  '&::-moz-range-thumb': {
    background: theme.styles.neutral[70],
  },
}));
