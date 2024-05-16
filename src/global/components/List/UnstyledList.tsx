import { Box, type BoxProps, styled } from '@mui/system';

export const UnstyledList = (props: BoxProps) => <ListStyleReset component="ul" {...props} />;
export const ListItem = (props: BoxProps) => <Box component="li" {...props} />;

const ListStyleReset = styled(Box)(() => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
}));
