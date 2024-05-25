import React from 'react';
import { Box } from '@mui/system';

// Basic component template

type Props = {
  text?: string;
};

export const __Component = (props: Props): JSX.Element => {
  return (
    <Box>{props.text}</Box>
  );
};
