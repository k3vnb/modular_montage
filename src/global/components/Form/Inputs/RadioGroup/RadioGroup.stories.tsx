import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/system';
import { RadioGroup } from './RadioGroup';
import { v4 as uuidv4 } from 'uuid';

type RadioGroupStoryArgs = {
  legend: string;
  disabled: boolean;
  options: { value: string, label: string }[];
  direction?: 'row' | 'column';
  helpText?: string;
  invalid?: boolean;
};

const defaultOptions = [
  { value: 'a', label: 'Option 1' },
  { value: 'b', label: 'Option 2' },
  { value: 'c', label: 'Option 3' },
];

const RadioGroupStory: React.FC<RadioGroupStoryArgs> = (props) => {
  const [value, setValue] = React.useState<string>(props.options[0].value);
  const id = React.useRef(uuidv4()).current;

  return (
    <Box sx={{ maxWidth: '400px' }}>
      <RadioGroup
        {...props}
        id={id}
        value={value}
        onChange={setValue}
      />
    </Box>
  );
};

const meta = {
  title: 'Core Components/Inputs/Radio Group',
  component: RadioGroupStory,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      options: ['row', 'column'],
    },
  },
} satisfies Meta<typeof RadioGroupStory>;

export default meta;

type Story = StoryObj<typeof RadioGroupStory>;

export const _RadioGroup: Story = {
  args: {
    legend: 'Radio Group',
    disabled: false,
    options: [...defaultOptions],
    direction: 'column',
    invalid: false,
    helpText: '',
  },
};

const optionsWithLongLabels = [
  { value: 'a', label: 'Option 1 with a long label.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { value: 'b', label: 'Option 2 with a long label.  Donec auctor, nisl eu ultricies ultricies, nisl nisl ultricies nisl.' },
  { value: 'c', label: 'Option 3 with a long label.  Euismod ultricies nisl nisl euismod.' },
];

export const RadioGroupWithLongLabels: Story = {
  args: {
    ..._RadioGroup.args,
    legend: 'Radio Group with long labels',
    options: optionsWithLongLabels,
  },
};

const optionsWithDisabledOption = defaultOptions.map((option, i) => ({
  ...option,
  disabled: i === 0,
}));

export const RadioGroupWithDisabledOption: Story = {
  args: {
    ..._RadioGroup.args,
    legend: 'Radio Group with disabled option',
    options: optionsWithDisabledOption,
  },
};
