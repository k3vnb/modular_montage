import React from 'react';
import BackArrowIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Link } from 'react-router-dom';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import { ROUTES } from 'routes';
import { Box } from '@mui/system';

type Props = {
  title: string;
  description: string;
};

export const GameContainerOuter = ({ title, description, children }: React.PropsWithChildren<Props>) => {
  return (
    <Tile
      showBorder
      gap={1} 
      elevation={1}
      maxWidth={500}
    >
      <GoBackLink />
      <Typography.H4 component="h3" textAlign="center">{title}</Typography.H4>
      <Typography.Body textAlign="center">
        {description}
      </Typography.Body>
      <Tile
        showBorder
        justifyContent="center"
        alignItems="center"
        gap={2}
        sx={{ background: theme => theme.styles.neutral[0] }}
      >
        {children}
      </Tile>
    </Tile>
  );
};

const GoBackLink = () => (
  <Box
    component={Link}
    to={ROUTES.games.path}
    mt={-1}
    sx={{
      display: 'flex',
      gap: 1,
      fontSize: 14,
      alignItems: 'center',
      textDecoration: 'unset',
      color: theme => theme.styles.hyperlink[0],
      '&:hover': {
        color: theme => theme.styles.hyperlink[1],
      },
    }}
  >
    <Box component={BackArrowIcon} fontSize={18} /> Go back to Game Menu
  </Box>
);
