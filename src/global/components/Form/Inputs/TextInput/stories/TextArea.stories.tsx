import React from 'react';
import { Box } from '@mui/system';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../TextArea';

type TextAreaStoryArgs = {
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  helpText?: string;
  rows?: number;
};

const DEFAULT_VALUE_INVALID = 'Green eggs and ha';

const TextAreaStory= (props: TextAreaStoryArgs) => {
  const [value, setValue] = React.useState<string>(props.defaultValue || '');

  const isInvalidDemo = props.defaultValue === DEFAULT_VALUE_INVALID;
  
  const { invalid, helpText } = React.useMemo(() => {
    if (!isInvalidDemo) return { invalid: props.invalid, helpText: props.helpText };
    const isValid = (value || '').includes('Green eggs and ham');
    return {
      invalid: !isValid,
      helpText: isValid ? 'Looks good!' : 'Try \'Green eggs and ham\'',
    };
  }, [isInvalidDemo, props.invalid, props.helpText, value]);

  return (
    <Box sx={{ maxWidth: '350px' }}>
      <TextArea
        id="text-area"
        label={props.label || 'Tell Us About Yourself'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={props.disabled}
        readOnly={props.readOnly}
        invalid={invalid}
        helpText={props.helpText || helpText}
        rows={props.rows}
      />
    </Box>
  );
};

const meta = {
  title: 'Core Components/Inputs/Text Area',
  component: TextAreaStory,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof TextAreaStory>;

export default meta;
type Story = StoryObj<typeof TextAreaStory>;

export const TextAreaInteractive: Story = {
  args: {
    label: 'Tell Us About Yourself',
    disabled: false,
    readOnly: false,
    invalid: false,
    helpText: '',
  },
};

export const TextAreaPopulated: Story = {
  args: {
    label: 'Tell Us About Yourself',
    disabled: false,
    readOnly: false,
    invalid: false,
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
    helpText: '',
    rows: 4,
  },
};

export const TextAreaInvalid: Story = {
  args: {
    label: 'Favorite Books',
    disabled: false,
    readOnly: false,
    invalid: true,
    defaultValue: DEFAULT_VALUE_INVALID,
    helpText: '',
  },
};
