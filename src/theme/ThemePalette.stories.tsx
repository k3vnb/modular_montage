import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, useTheme, styled } from '@mui/system';
import { UnstyledList, DividedList, ListItem } from 'global/components/List';
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

const ColorBox = styled(Box)`
  height: 36px;
  width: 36px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

const SIZE = 44;
const PaletteBox = ({ spectrum, shades, concentric }: TPaletteDisplay & { concentric?: boolean }): JSX.Element => {
  const list = concentric ? [...spectrum].reverse() : spectrum;
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap="10px" position="relative" height={SIZE} width={SIZE} >
      
      {list.map((hex, i, arr) => (
        <ColorBox
          key={hex}
          position="absolute"
          sx={{
            top: '50%',
            left: '50%',
            zIndex: i,
            transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
            backgroundColor: hex,
            width: SIZE - (i * (SIZE / arr.length)),
            height: SIZE - (i * (SIZE / arr.length)),
          }}
        />
      ))}
      {shades && (
        <>
          {[...shades.neutral, shades.dark, shades.accent].map((hex, i, arr) => (
            <ColorBox
              key={hex}
              position="absolute"
              bottom={`${(i) * (100 / arr.length)}%`}
              left="100%"
              sx={{
                backgroundColor: hex,
                zIndex: 1,
                height: SIZE / 8,
                width: SIZE / 8,
                transformOrigin: 'top', transform: `translate(100%, -50%) rotate(${45}deg)`
            }} />
          ))}
        </>
      )}
    </Box>
  );
};

const PaletteExample = (props: TPaletteDisplay): JSX.Element => {
  const { name, spectrum, shades } = props;
  return (
    <ListItem key={name} marginY="15px">
      <Typography.H2>{name}</Typography.H2>
      <Box display="inline-flex" alignItems="center" gap={20}>
        <Box display="inline-flex" alignItems="center" gap={2}>
          <PaletteBox {...props} />
          <PaletteBox concentric {...props} />
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          <UnstyledList display="flex" gap="10px">
            {spectrum.map((hex) => (
              <ColorBox
              component={ListItem}
              title={hex} 
              key={hex}
              sx={{ backgroundColor: hex }}
              />
            ))}
          </UnstyledList>
      {shades && (
        <Box display="inline-flex" alignItems="center" gap="24px">
          <ShadesDisplay name="neutral" hexes={shades.neutral} />
          <ShadesDisplay name="dark" hexes={[shades.dark]} />
          <ShadesDisplay name="accent" hexes={[shades.accent]} />
        </Box>
      )}
      </Box>
    </Box>
    </ListItem>
  );
};

const ShadesDisplay = ({ name, hexes }: { name: string; hexes: string[] }): JSX.Element => (
  <Box display="inline-flex" alignItems="center" gap={1}>
    <Typography.H5>{name}</Typography.H5>
    <UnstyledList display="flex" gap="10px">
      {hexes.map((hex) => (
        <ColorBox component={ListItem} key={hex} sx={{ backgroundColor: hex }} />
      ))}
    </UnstyledList>
  </Box>
);
