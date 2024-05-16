import { Box, styled } from '@mui/system';
import { BOTTOM_BAR_HEIGHT } from './constants';

type ContainerProps = {
  isDrawerVisible: boolean;
};

const options = {
  shouldForwardProp: (prop: string) => !['isDrawerVisible'].includes(prop),
};

export const BottomBarContainer = styled(Box, options)<ContainerProps>(({ theme, isDrawerVisible }) => ({
  position: 'relative',
  width: '100vw',
  maxWidth: '100%',
  height: BOTTOM_BAR_HEIGHT,
  backgroundColor: theme.palette.secondary.surface,
  zIndex: isDrawerVisible ? 50 : 'auto',
  '& > ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 0,
    height: '100%',
    width: '100%',
  },
}));
