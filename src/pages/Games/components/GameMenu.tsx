// import React from 'react';
// import { Box, Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import { ROUTES } from 'routes';

export const GameMenu = () => {
  return (
    <Tile
      showBorder
      gap={1} 
      elevation={1}
      maxWidth={500}
    >
      <Typography.H4 component="h3" textAlign="center">Color Games</Typography.H4>
      <Link to={ROUTES.games.subroutes.hslGame.path}>
        Go to HSL Game
      </Link>
      <Link to={ROUTES.games.subroutes.rgbGame.path}>
        Go to RGB Game
      </Link>
    </Tile>
  );
};
