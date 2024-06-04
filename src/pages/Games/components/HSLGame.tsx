import React from 'react';
import { Box, type BoxProps, Stack, useTheme, styled } from '@mui/system';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import { getRandomHSLVals } from './utils';
import { ThemeButton } from 'global/components/Buttons';
import { ColorDisplay } from './ColorDisplay';

export const HSLGame = () => {
  const { styles } = useTheme();
  const [hslMasterVals, setHslMasterVals] = React.useState<number[]>([]);
  const [hslGuessVals, setHslGuessVals] = React.useState<number[]>([]);
  const [hue = 1, saturation = 1, light = 1] = hslGuessVals;

  React.useEffect(() => {
    setHslMasterVals(getRandomHSLVals());
  }, []);

  const onClickReset = () => setHslMasterVals(getRandomHSLVals());

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Tile showBorder gap={4}  elevation={1}>
        <Typography.H4 textAlign="center" mb={1}>HSL - Hue, saturation, light</Typography.H4>
        <Tile showBorder justifyContent="center" alignItems="center" gap={2} sx={{ background: theme => theme.styles.neutral[0] }}>
          <Typography.Body textAlign="center">
            Try to guess the HSL values.
          </Typography.Body>
          <Box display="flex" flexDirection="row" gap={3}>
            <ColorDisplay backgroundColor={`hsl(${hslMasterVals[0]}, ${hslMasterVals[1]}%, ${hslMasterVals[2]}%)`} label="Match this color" />
            <ColorDisplay backgroundColor={`hsl(${hue}, ${saturation}%, ${light}%)`} label="Your Guess" />
          </Box>
          <Box display="flex" width="100%" justifyContent="end" mt={2}>
            <ThemeButton showBorder={false} shadow={false} onClick={onClickReset} text="Get a new color to match" size="small" />
          </Box>
        </Tile>
        <Stack gap={4} maxWidth="50%">
          <RangeInputSection
            label="Hue"
            value={hue} 
            onChange={(e) => setHslGuessVals([e.target.valueAsNumber, saturation, light])}
            min={0}
            max={360}
            symbol="°"
            background="linear-gradient(90deg, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))"
          />
          <RangeInputSection
            label="Saturation"
            value={saturation}
            onChange={(e) => setHslGuessVals([hue, e.target.valueAsNumber, light])}
            min={0}
            max={100}
            symbol='%'
          />
          <RangeInputSection
            label="Light"
            value={light}
            onChange={(e) => setHslGuessVals([hue, saturation, e.target.valueAsNumber])}
            min={0}
            max={100}
            symbol='%'
          />
        </Stack>
      </Tile>
    </Box>
  );
};

type RangeInputSectionProps = {
  label: string;
  value: number;
  symbol?: string;
  background?: string; 
  min: number;
  max: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RangeInputSection = ({
  label,
  value,
  symbol,
  background = '',
  min,
  max,
  onChange,
}: RangeInputSectionProps) => {
  // const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <RangeInputLabel label={label} value={value} symbol={symbol} />
      <RangeInput value={value} onChange={onChange} min={min} max={max} sx={{...(background && { background })}} />
      <RangeInputHelpText min={min} max={max} />
    </Box>
  );
};

type RangeInputLabelProps = Pick<RangeInputSectionProps, 'label' | 'value' | 'symbol'>;

const RangeInputLabel = ({ label, value, symbol }: RangeInputLabelProps) => {
  const displayValue = [value, symbol].filter(Boolean).join(' ');
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography.Body>{label}</Typography.Body>
      <Typography.Body>{displayValue}</Typography.Body>
    </Box>
  );
};

const RangeInputHelpText = ({ min, max }: { min: number; max: number }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography.Body>Enter a number between</Typography.Body>
      <Typography.Body>{min} and {max}</Typography.Body>
    </Box>
  );
};

type RangeInputProps = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
} & BoxProps;

const RangeInput = ({
  value,
  onChange,
  min,
  max,
  ...boxProps
}: RangeInputProps) => {
  return (
    <Box
      component={StyledRangeInput}
      type="range"
      value={value}
      onChange={onChange}
      min={min}
      max={max}
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
    width: '10px',
    height: '10px',
    background: theme.styles.neutral[90],
    borderRadius: '50%',
  },
  '&::-moz-range-thumb': {
    width: '10px',
    height: '10px',
    background: 'black',
    borderRadius: '50%',
  },
}));
