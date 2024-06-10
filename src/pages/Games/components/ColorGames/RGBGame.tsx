import React from 'react';
import { Box, Stack } from '@mui/system';
import { ThemeButton } from 'global/components/Buttons';
import { RangeInput } from 'global/components/Form/Inputs/RangeInput';
import { ColorDisplay } from './ColorDisplay';
import { ResultsDisplay } from './ResultsDisplay';
import { GameContainerOuter } from './GameContainer';

import {
  RGB_VAL_KEYS,
  INIT_RGB_GUESS_VALS,
  INIT_RGB_HINTS
} from './constants';

import {
  getHint,
  getRGBString,
  getRandomRGBVals,
  getIsWithinThreshold,
} from './utils';

import type { RGBVals, RGBValsKey } from './types';

const RGB_RANGE_INPUT_LIST = [
  { key: 'red', label: 'Red' },
  { key: 'green', label: 'Green' },
  { key: 'blue', label: 'Blue' },
] as const;

export const RGBGame = () => {
  const [targetVals, setTargetVals] = React.useState<RGBVals>(getRandomRGBVals());
  const [guessVals, setGuessVals] = React.useState<RGBVals>(INIT_RGB_GUESS_VALS);
  const [hints, setHints] = React.useState<Record<RGBValsKey, string>>(INIT_RGB_HINTS);
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  const targetColor = React.useMemo(() => getRGBString(targetVals), [targetVals]);
  const guessColor = React.useMemo(() => getRGBString(guessVals), [guessVals]);

  const updateGuessVals = (key: keyof RGBVals, value: number) => {
    setHints((prev) => ({ ...prev, [key]: '' }));
    setGuessVals((prev) => ({ ...prev, [key]: value }));
  };

  const targetGuessList = React.useMemo(() => (
    RGB_VAL_KEYS.map((key) => ({ target: targetVals[key], guess: guessVals[key], key }) as const)
  ), [targetVals, guessVals]);

  const handleReset = () => {
    setHints(INIT_RGB_HINTS);
    setGuessVals(INIT_RGB_GUESS_VALS);
    setSubmitted(false);
    setTargetVals(getRandomRGBVals());
  };
  
  const onClickHint = React.useCallback(() => {
    const newHints = Object.fromEntries(
      targetGuessList.map(({ key, target, guess }) => [key, getHint(target, guess)] as const)
    ) as Record<RGBValsKey, string>;
    
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
      title="RGB - Red, Green, Blue"
      description="Move the sliders to guess the RGB values and match the color."
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
            {RGB_RANGE_INPUT_LIST.map(({ key, label }) => (
              <RangeInput
                key={key}
                id={key}
                label={label}
                value={guessVals[key]}
                onChange={(e) => updateGuessVals(key as RGBValsKey, e.target.valueAsNumber)}
                min={0}
                max={255}
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
