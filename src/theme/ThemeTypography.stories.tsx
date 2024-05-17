import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box } from '@mui/system';
import { THEME_FONTS } from './typography';

const formatTitle = (title: string) => {
  const [type, size, variation] = title
    .split(/(?=[A-Z])/)
    .map((word) => word[0].toUpperCase() + word.slice(1));
  
  return [[type, size].join(' '), variation].filter(Boolean).join(' / ');

};

const Divider = () => (
  <Box
    sx={{
      width: '100%',
      height: '1px',
      minWidth: '20px',
      backgroundColor: theme => theme.palette.neutral[50],
    }}
  />
);

const TypographyExamples: React.FC = () => {
  return (
    <Stack gap="30px" divider={<Divider />}>
      {Object.entries(THEME_FONTS).map(([key, fontStyles]) => {
        return (
          <Box key={key} sx={{ ...fontStyles }}>
            {formatTitle(key)}
          </Box>
        );
      })}
    </Stack>
  );
};

const meta = {
  title: 'Theme/Typography',
  component: TypographyExamples,
  tags: ['autodocs'],
} satisfies Meta<typeof TypographyExamples>;

export default meta;
type Story = StoryObj<typeof TypographyExamples>;

export const Examples: Story = {
  render: () => <TypographyExamples />,
};
