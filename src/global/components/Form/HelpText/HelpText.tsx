import { styled } from '@mui/system';

type HelpTextProps = {
  error?: boolean;
};

const options = {
  shouldForwardProp: (prop: string) => !['error'].includes(prop),
};

export const HelpText = styled('span', options)<HelpTextProps>(({ theme, error }) => ({
  ...theme.styles.textSm,
  minHeight: theme.styles.textSm.lineHeight,
  color: error ? theme.styles.danger.main : theme.styles.neutral[70],
}));
