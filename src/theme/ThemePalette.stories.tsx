import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UnstyledList, ListItem } from 'global/components/List';
import { Box, useTheme, styled } from '@mui/system';
import { getThemeColorPaletteDisplay } from './utils';

const PaletteExamples = (): JSX.Element => {
  const theme = useTheme();
  const paletteList = React.useMemo(() => getThemeColorPaletteDisplay(theme), [theme]);

  return (
    <UnstyledList>
      {paletteList.map(({ name, spectrum, shades }) => {
        return (
          <ListItem key={name} marginY="15px">
            <h2>{name}</h2>
            <UnstyledList display="flex" gap="10px">
              {spectrum.map((hex) => (
                <ColorBox component={ListItem} key={hex} sx={{ backgroundColor: hex }} />
              ))}
            </UnstyledList>
            {shades && (
              <Box display="inline-flex" alignItems="center" gap="24px" marginTop="10px">
                <Box display="inline-flex" alignItems="center" gap="8px">
                  <h4>Neutral</h4>
                  <UnstyledList display="flex" gap="10px">
                    {shades.neutral.map((hex) => (
                      <ColorBox component={ListItem} key={hex} sx={{ backgroundColor: hex }} />
                    ))}
                  </UnstyledList>
                </Box>
                <Box display="inline-flex" alignItems="center" gap="8px">
                  <h4>Dark</h4>
                  <ColorBox sx={{ backgroundColor: shades.dark }} />
                </Box>
                <Box display="inline-flex" alignItems="center" gap="8px">
                  <h4>Accent</h4>
                  <ColorBox sx={{ backgroundColor: shades.accent }} />
                </Box>
              </Box>
            )}
          </ListItem>
        );
      })}
    </UnstyledList>
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
  height: 48px;
  width: 48px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;
