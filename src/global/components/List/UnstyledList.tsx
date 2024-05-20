import { Box, type BoxProps, styled } from '@mui/system';

export const UnstyledList = (props: ListStyleResetProps) => <ListStyleReset component="ul" {...props} />;
export const DividedList = (props: BoxProps) => <UnstyledList divided {...props} />;
export const ListItem = (props: BoxProps) => <Box component="li" {...props} />;

type ListStyleResetProps = BoxProps & {
  divided?: boolean; 
}

const ListStyleReset = styled(Box, {
  shouldForwardProp: (prop: string) => !['divided'].includes(prop)
})<ListStyleResetProps>(({ theme, divided }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  ...(divided && {
    '& > li': {
      borderBottom: `1px solid ${theme.styles.neutral[30]}`,
      paddingBottom: '15px',
      marginBottom: '15px',
      '&:last-child': {
        borderBottom: 'none',
        paddingBottom: 0,
        marginBottom: 0,
      },
    },
  }),
}));
