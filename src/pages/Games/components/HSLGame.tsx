import React from 'react';
import { Box, type BoxProps, Stack, styled } from '@mui/system';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import { getRandomHSLVals } from './utils';
import { ThemeButton } from 'global/components/Buttons';
import { ColorDisplay } from './ColorDisplay';

const HUE_GRADIENT = 'linear-gradient(90deg, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))';
const LIGHT_GRADIENT = 'linear-gradient(90deg, hsl(0, 0%, 0%), hsl(0, 0%, 50%), hsl(0, 0%, 100%))';
const getSaturationGradient = (hue: number) => `linear-gradient(90deg, hsl(${hue}, 0%, 50%), hsl(${hue}, 100%, 50%))`;
const getHint = (correctVal: number, guessVal: number) => correctVal === guessVal ? 'Correct!' : `${guessVal} is too ${guessVal > correctVal ? 'high' : 'low'}`;

export const HSLGame = () => {
  const [hslMasterVals, setHslMasterVals] = React.useState<number[]>([]);
  const [hue, setHue] = React.useState<number>(180);
  const [saturation, setSaturation] = React.useState<number>(50);
  const [light, setLight] = React.useState<number>(50);
  const [showHints, setShowHints] = React.useState<boolean>(false);

  const hueHint = getHint(hslMasterVals[0], hue);
  const saturationHint = getHint(hslMasterVals[1], saturation);
  const lightHint = getHint(hslMasterVals[2], light);

  React.useEffect(() => {
    setHslMasterVals(getRandomHSLVals());
  }, []);

  const onClickReset = () => setHslMasterVals(getRandomHSLVals());
  const onClickHint = () => setShowHints(true);

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
          <Box display="flex" flexDirection={{ xxs: 'column', sm: 'row' }} width="100%" gap={2} justifyContent="space-between" mt={2}>
            <ThemeButton showBorder={false} shadow={false} onClick={onClickHint} text="Get a hint" size="small" />
            <ThemeButton showBorder={false} shadow={false} onClick={onClickReset} text="Get a new color to match" size="small" />
          </Box>
        </Tile>
        <Stack gap={4} maxWidth="50%">
          <RangeInputSection
            label="Hue °"
            id="hue"
            value={hue} 
            onChange={(e) => {
              setShowHints(false);
              setHue(e.target.valueAsNumber);
            }}
            min={0}
            max={360}
            symbol="°"
            background={HUE_GRADIENT}
            hint={showHints ? hueHint : ''}
          />
          <RangeInputSection
            label="Saturation %"
            value={saturation}
            id="saturation"
            onChange={(e) => {
              setShowHints(false);
              setSaturation(e.target.valueAsNumber);
            }}
            min={0}
            max={100}
            symbol='%'
            background={getSaturationGradient(hue)}
            hint={showHints ? saturationHint : ''}
          />
          <RangeInputSection
            label="Light %"
            value={light}
            id="light"
            onChange={(e) => {
              setShowHints(false);
              setLight(e.target.valueAsNumber);
            }}
            min={0}
            max={100}
            symbol='%'
            background={LIGHT_GRADIENT}
            hint={showHints ? lightHint : ''}
          />
        </Stack>
      </Tile>
    </Box>
  );
};

type RangeInputSectionProps = {
  id: string;
  label: string;
  value: number;
  symbol?: string;
  background?: string; 
  min: number;
  max: number;
  hint?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RangeInputSection = ({
  label,
  id,
  value,
  symbol,
  background = '',
  min,
  max,
  hint,
  onChange,
}: RangeInputSectionProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <RangeInputLabel id={id} label={label} value={value} symbol={symbol} />
      <RangeInput
        id={id}
        aria-labelledby={`${id}-label`}
        aria-describedby={`${id}-help-1 ${id}-help-2`}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        sx={{...(background && { background })}}
      />
      <RangeInputHelpText id={id} min={min} max={max} hint={hint} />
    </Box>
  );
};

type RangeInputLabelProps = Pick<RangeInputSectionProps, 'id' | 'label' | 'value' | 'symbol'>;

const RangeInputLabel = ({ label, value, symbol, id }: RangeInputLabelProps) => {
  const displayValue = [value, symbol].filter(Boolean).join(' ');
  return (
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" gap={3}>
      <Typography.H6 id={`${id}-label`} component="label">{label}</Typography.H6>
      <Typography.Body id={`${id}-help-1`}>
        <Box component="span" fontStyle="italic" letterSpacing={-0.25}>Your value: </Box>
        <Box component="span" minWidth="6char" ml={1}>{displayValue}</Box>
      </Typography.Body>
    </Box>
  );
};

const RangeInputHelpText = ({ min, max, id, hint = '' }: Pick<RangeInputSectionProps, 'min' | 'max' | 'hint' | 'id'>) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1} id={`${id}-help-2`}>
      <Typography.Body>Select a value between {min} and {max}</Typography.Body>
      <Typography.Body component="span" display="inline-flex" alignItems="center" gap={1} minHeight={24}>{hint && <Typography.H6>Hint: </Typography.H6>}{hint}</Typography.Body>
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
    width: 14,
    height: 14,
    background: theme.styles.neutral[70],
    borderRadius: '50%',
  },
  '&::-moz-range-thumb': {
    background: theme.styles.neutral[70],
  },
}));
