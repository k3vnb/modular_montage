import type { Meta, StoryObj } from '@storybook/react';
import { THEME_FONTS } from './typography';
import { UnstyledList, ListItem } from 'global/components/List';

function formatTitle (title: string) {
  const [type, size, variation] = title
    .split(/(?=[A-Z])/)
    .map((word) => word[0].toUpperCase() + word.slice(1));
  
  return [[type, size].join(' '), variation].filter(Boolean).join(' / ');
}

const TypographyExamples = (): JSX.Element => {
  return (
    <UnstyledList>
      {Object.entries(THEME_FONTS).map(([key, fontStyles]) => {
        return (
          <ListItem key={key} sx={{ ...fontStyles, marginY: '15px' }}>
            {formatTitle(key)}
          </ListItem>
        );
      })}
    </UnstyledList>
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
