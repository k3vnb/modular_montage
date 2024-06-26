import React from 'react';
import { Box, Stack } from '@mui/system';
import { ThemeButton } from 'global/components/Buttons';
import { RangeInput } from 'global/components/Form/Inputs/RangeInput';
import { ColorDisplay } from './ColorDisplay';
import { ResultsDisplay } from './ResultsDisplay';
import { GameContainerOuter } from './GameContainer';

import {
  HUE_GRADIENT,
  LIGHT_GRADIENT,
  HSL_VAL_KEYS,
  INIT_HSL_GUESS_VALS,
  INIT_HSL_HINTS
} from './constants';

import {
  getHint,
  getHSLString,
  getRandomHSLVals,
  getIsWithinThreshold,
  getSaturationGradient,
} from './utils';

import type { HSLVals, HSLValsKey } from './types';

const HSL_RANGE_INPUT_LIST = [
  { key: 'hue', label: 'Hue °', min: 0, max: 360, symbol: '°', getBackground: () => HUE_GRADIENT },
  { key: 'saturation', label: 'Saturation %', min: 0, max: 100, symbol: '%', getBackground: (hue: number) => getSaturationGradient(hue) },
  { key: 'light', label: 'Light %', min: 0, max: 100, symbol: '%', getBackground: () => LIGHT_GRADIENT},
] as const;

export const HSLGame = () => {
  const [targetVals, setTargetVals] = React.useState<HSLVals>(getRandomHSLVals());
  const [guessVals, setGuessVals] = React.useState<HSLVals>(INIT_HSL_GUESS_VALS);
  const [hints, setHints] = React.useState<Record<HSLValsKey, string>>(INIT_HSL_HINTS);
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  const targetColor = React.useMemo(() => getHSLString(targetVals), [targetVals]);
  const guessColor = React.useMemo(() => getHSLString(guessVals), [guessVals]);

  const updateGuessVals = (key: keyof HSLVals, value: number) => {
    setHints((prev) => ({ ...prev, [key]: '' }));
    setGuessVals((prev) => ({ ...prev, [key]: value }));
  };

  const targetGuessList = React.useMemo(() => (
    HSL_VAL_KEYS.map((key) => ({ target: targetVals[key], guess: guessVals[key], key }) as const)
  ), [targetVals, guessVals]);

  const handleReset = () => {
    setHints(INIT_HSL_HINTS);
    setGuessVals(INIT_HSL_GUESS_VALS);
    setSubmitted(false);
    setTargetVals(getRandomHSLVals());
  };
  
  const onClickHint = React.useCallback(() => {
    const newHints = Object.fromEntries(
      targetGuessList.map(({ key, target, guess }) => [key, getHint(target, guess)] as const)
    ) as Record<HSLValsKey, string>;
    
    setHints(newHints);
  }, [targetGuessList]);

  const isCorrect = React.useMemo(() => (
    targetGuessList.every(({ target, guess }) => target === guess)
  ), [targetGuessList]);

  const isAlmostCorrect = React.useMemo(() => (
    !isCorrect && targetGuessList.map(({ target, guess }) => getIsWithinThreshold(target, guess, 15)).filter(Boolean).length > 1
  ), [isCorrect, targetGuessList]);

  return (
    <GameContainerOuter
      title="HSL - Hue, Saturation, Lightness"
      description="Move the sliders to guess the HSL values and match the color."
    >
      {!submitted && (
        <Box display="flex" flexDirection={{ xxs: 'column', sm: 'row' }} width="100%" gap={2} justifyContent="space-between" mt={2}>
          <ThemeButton showBorder={false} shadow={false} onClick={onClickHint} text="Get a hint" size="small" />
          <ThemeButton showBorder={false} shadow={false} onClick={handleReset} text="Get a new color to match" size="small" />
        </Box>
      )}
      <Box display="flex" flexDirection="row" gap={3}>
        <ColorDisplay backgroundColor={targetColor} label="Match this color" />
        <ColorDisplay backgroundColor={guessColor} label="Your Guess" />
      </Box>
      {!submitted && (
        <>
          <Stack gap={4} width="100%">
            {HSL_RANGE_INPUT_LIST.map(({ key, label, min, max, symbol, getBackground }) => (
              <RangeInput
                key={key}
                id={key}
                label={label}
                value={guessVals[key]}
                onChange={(e) => updateGuessVals(key as HSLValsKey, e.target.valueAsNumber)}
                min={min}
                max={max}
                symbol={symbol}
                background={getBackground(guessVals.hue)}
                hint={hints[key]}
              />
            ))}
          </Stack>
          <ThemeButton filled onClick={() => setSubmitted(true)} text="Submit!" sx={{ maxWidth: 250 }}  />
        </>
      )}
      {submitted && (
        <ResultsDisplay
          isCorrect={isCorrect}
          isAlmostCorrect={isAlmostCorrect}
          guessDisplay={guessColor}
          targetDisplay={targetColor}
          handleReset={handleReset}
        />
      )}
    </GameContainerOuter>
  );
};
