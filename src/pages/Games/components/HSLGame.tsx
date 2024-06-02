import React from 'react';
import { Box } from '@mui/system';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import { getRandomHSLVals } from './utils';
import { ThemeButton } from 'global/components/Buttons';

export const HSLGame = () => {
  const [hslVals, setHslVals] = React.useState<number[]>([]);
  const [hue, saturation, light] = hslVals;

  React.useEffect(() => {
    setHslVals(getRandomHSLVals());
  }, []);

  const onClickReset = () => {
    setHslVals(getRandomHSLVals());
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Tile showBorder gap={1}  elevation={1}>
        <Typography.H4 textAlign="center" mb={1}>HSL</Typography.H4>
        <Typography.H5 textAlign="center" mb={1}>Hue, saturation, light</Typography.H5>
        <Box
          display="flex"
          justifyContent="center"
          borderRadius="50%"
          sx={{
            width: 200,
            height: 200,
            backgroundColor: `hsl(${hue}, ${saturation}%, ${light}%)`,
          }}
        />
        <Typography.H6 textAlign="center" mt={2}>{`Hue: ${hue}`}</Typography.H6>
        <Typography.H6 textAlign="center">{`Saturation: ${saturation}%`}</Typography.H6>
        <Typography.H6 textAlign="center">{`Light: ${light}%`}</Typography.H6>
        <Box display="flex" justifyContent="center" mt={2}>
          <ThemeButton onClick={onClickReset} text="Get New Color" />
        </Box>
        <Tile showBorder gap={1} mt={2}>
          <Typography.H6 textAlign="center" mb={1}>Instructions</Typography.H6>
          <Typography.Body textAlign="center">
            Try to guess the HSL values of the color above.
          </Typography.Body>
        </Tile>
      </Tile>
    </Box>
  );
};
