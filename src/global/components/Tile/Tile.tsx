import React from 'react';
import { Box, type BoxProps, styled } from '@mui/system';
import { type ThemedTemplateVariants } from 'global/types';

export type TTileVariants = ThemedTemplateVariants | 'neutral';

type TileProps = BoxProps & {
  showBorder?: boolean;
  variant?: TTileVariants;
  elevation: 0 | 1 | 2;
};

export const Tile = styled(Box, {
  shouldForwardProp: (prop: string) => ![ 'showBorder', 'variant', 'elevation' ].includes(prop),
})<TileProps>(({ theme, showBorder, elevation, variant = 'neutral' }) => {

  const [borderColor, backgroundColor] = React.useMemo(() => {
    if (variant === 'neutral') return [theme.styles.neutral[40], theme.styles.neutral[10]];
    return [theme.styles[variant].box.border[2], theme.styles.neutral[5]];
  }, [variant, theme]);

  return {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    padding: theme.spacing(3,4),
    backgroundColor,
    borderRadius: theme.shape.borderRadius * 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: showBorder ? borderColor : 'transparent',
    boxShadow: theme.styles.shadow[elevation],
    transition: 'background-color .15s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3,2),
    },
  };
});
