import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps, useTheme } from '@mui/system';

import { UnstyledList, DividedList, ListItem } from 'global/components/List';
import { ColorBox } from 'elements/Palette/ColorBox';
import { PaletteYantra } from 'elements/Palette/PaletteYantra';
import { Typography } from 'global/components/Typography';
import { getThemeColorPaletteDisplay, type TPaletteDisplay } from './utils';

const PaletteExamples = (): JSX.Element => {
  const theme = useTheme();
  const paletteList = React.useMemo(() => getThemeColorPaletteDisplay(theme), [theme]);

  return (
    <DividedList>
      {paletteList.map((palette) => <PaletteExample key={palette.name} {...palette } /> )}
    </DividedList>
  );
};

const meta = {
  title: 'Theme/Palette',
  component: PaletteExamples,
  tags: ['autodocs'],
} satisfies Meta<typeof PaletteExamples>;

export default meta;
type Story = StoryObj<typeof PaletteExamples>;

export const Examples: Story = {
  render: () => <PaletteExamples />,
};

const PaletteExample = (props: TPaletteDisplay): JSX.Element => {
  const { name, spectrum, shades } = props;
  return (
    <ListItem key={name} marginY={2}>
      <Typography.H2>{name}</Typography.H2>
      <Box display="inline-flex" alignItems="center" gap={20}>
        <Box display="inline-flex" alignItems="center" gap={2}>
          <PaletteYantra {...props} />
          <PaletteYantra reverse {...props} />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <ColorBoxList hexes={spectrum} />
          {shades && (
            <Box display="inline-flex" alignItems="center" gap={2}>
              <ShadeSection name="neutral" hexes={shades.neutral} />
              <ShadeSection name="dark" hexes={shades.dark} />
              <ShadeSection name="accent" hexes={[shades.accent]} />
            </Box>
          )}        
        </Box>
      </Box>
    </ListItem>
  );
};

const ShadeSection = ({ name, hexes }: { name: string; hexes: string[] }): JSX.Element => (
  <Box display="inline-flex" alignItems="center" gap={1}>
    <Typography.H5 component="div">{name}</Typography.H5>
    <ColorBoxList hexes={hexes} />
  </Box>
);

const ColorBoxList = ({ hexes, ...props }: BoxProps & { hexes: string[] }): JSX.Element => (
  <UnstyledList display="flex" gap={1.25} {...props}>
    {hexes.map((hex) => (
      <ColorBox component={ListItem} key={hex} hex={hex} title={hex} />
    ))}
  </UnstyledList>
);
