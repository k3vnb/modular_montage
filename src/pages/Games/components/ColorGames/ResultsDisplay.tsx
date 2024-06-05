import React from 'react';
import { Stack, Box, styled } from '@mui/system';
import { ThemeButton } from 'global/components/Buttons';

type Props = {
  guessDisplay: string | React.ReactNode;
  targetDisplay: string | React.ReactNode;
  isCorrect: boolean;
  isAlmostCorrect: boolean;
  handleReset: () => void;
};

export const ResultsDisplay = ({
  guessDisplay,
  targetDisplay,
  isCorrect,
  isAlmostCorrect,
  handleReset,
}: Props) => {
  return (
    <Stack gap={2} alignItems="center">
      <DisplayText>{`Your Guess - ${guessDisplay}`}</DisplayText>
      <DisplayText>{`Correct Answer - ${targetDisplay}`}</DisplayText>
      {isCorrect ? (
        <DisplayText sx={{ color: theme => theme.styles.success.main }}>
          🎉🎉🎉 You got it right! 🎉🎉🎉
        </DisplayText>
      ) : (
        <DisplayText sx={{ color: theme => theme.styles.danger.main }}>
          {isAlmostCorrect ? 'You were close!' : 'Try again!'}
        </DisplayText>
      )}
      <ThemeButton onClick={handleReset} text="Play again" />
    </Stack>
  );
};

const DisplayText = styled(Box)(({ theme }) => ({
  ...theme.styles.headingH6,
  color: theme.styles.neutral[90],
  textAlign: 'center',
}));
