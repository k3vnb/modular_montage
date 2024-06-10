import { Stack, styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Tile } from 'global/components/Tile/Tile';
import { Typography } from 'global/components/Typography';
import { ROUTES, type TRoute } from 'routes';
import { UnstyledList, ListItem } from 'global/components/List';

type GameMenuItemProps = {
  title: string;
  description: string;
} & TRoute;

const GAME_LIST: GameMenuItemProps[] = [
  {
    ...ROUTES.games.subroutes.hslGame,
    title: 'Hue Saturation Lightness (HSL) Game',
    description: 'Train your eye and learn to manipulate colors by their hue, saturation, and lightness values.',
  },
  {
    ...ROUTES.games.subroutes.rgbGame,
    title: 'Red Green Blue (RGB) Game',
    description: 'Similar to mixing paints, learn to match and create colors by combining value of red, green, and blue.',
  },
];

export const GameMenu = () => {
  return (
    <Tile
      showBorder
      gap={2} 
      elevation={1}
      maxWidth={500}
      sx={{ backgroundColor: theme => theme.styles.neutral[theme.styles.isDark ? 10: 5] }}
    >
      <Stack gap={0.5}>
        <Typography.H3 textAlign="center">
          Color Games
        </Typography.H3>
        <Typography.H5 component="span" textAlign="center" sx={{ fontWeight: 400 }}>
          Learn about colors and color theory with these fun games!
        </Typography.H5>
      </Stack>
      <UnstyledList
        display="flex"
        flexDirection="column"
        gap={2}
      >
        {GAME_LIST.map((game) => (
          <MenuItem key={game.path} {...game} />
        ))}
      </UnstyledList>
    </Tile>
  );
};

const MenuItem = ({ 
  path,
  title,
  description,
}: GameMenuItemProps) => {
  return (
    <ListItem minWidth="min-content" display="flex" flexDirection="column">
     <StyledMenuItem to={path} title={title}>
        <Typography.H5 component="h4" className="game-title">{title}</Typography.H5>
        <Typography.Body className="game-description">{description}</Typography.Body>
      </StyledMenuItem>
    </ListItem>
  );
};

const StyledMenuItem = styled(Link)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  border: `1px solid ${theme.styles.neutral[90]}`,
  backgroundColor: theme.styles.neutral[0],
  minWidth: '100%',
  borderRadius: theme.styles.borderRadius.sm,
  padding: theme.spacing(2),
  textDecoration: 'unset',
  boxShadow: theme.styles.shadow[1],
  '&:hover': {
    borderColor: theme.styles.primary.box.border[1],
    boxShadow: theme.styles.shadow[2],
    '& .game-title': {
      color: theme.palette.primary.main,
    },
    '& .game-description': {
      color: theme.styles.neutral[80],
    },
  },
}));
