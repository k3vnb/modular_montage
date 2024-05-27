import { styled } from '@mui/system';
import { visuallyHidden } from '@mui/utils';

export const Fieldset = styled('fieldset')(() => ({
  border: 'none',
  padding: 0,
  margin: 0,
}));

type LegendProps = {
  srOnly?: boolean;
};

const options = {
  shouldForwardProp: (prop: string) => !['srOnly'].includes(prop),
};

export const Legend = styled('legend', options)<LegendProps>(({ theme, srOnly }) => {
  if (srOnly) return { ...visuallyHidden };

  return {
    color: theme.styles.neutral[100],
    ...theme.styles.textLg,
  };
});
