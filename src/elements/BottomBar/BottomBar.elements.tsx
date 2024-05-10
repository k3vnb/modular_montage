import { styled } from '@mui/system';
import { Menu, MenuItem } from '@mui/base';
import { BOTTOM_BAR_HEIGHT } from './constants';

type ContainerProps = {
  isDrawerVisible: boolean;
};

const options = {
  shouldForwardProp: (prop: string) => !['isDrawerVisible', 'zIndex'].includes(prop),
};

export const BottomBarMenu = styled(Menu, options)<ContainerProps>(({ theme, isDrawerVisible }) => ({
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


export const StyledMenuItem = styled(MenuItem, options)<{ zIndex: number | string }>(({ zIndex }) => {
  let focusZIndex = 1;

  if (typeof zIndex === 'number') {
    focusZIndex = zIndex + 1;
  }

  return {
    zIndex,
    '&:focus-within': {
      zIndex: focusZIndex, // keeps focused outline above sibling elements
    },
  };
});
