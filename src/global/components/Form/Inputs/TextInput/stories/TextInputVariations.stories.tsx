import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Notifications, MailOutlined, Search } from '@mui/icons-material';
import { Box, Stack } from '@mui/system';
import type { SvgIconComponent } from '@mui/icons-material';

import { TextInput } from '../TextInput';
import { Typography } from 'global/components/Typography';

type IconOptions = Record<string, SvgIconComponent>;

const icons: IconOptions = {
  'Bell': Notifications,
  'Mail': MailOutlined,
  'Search': Search,
};

type TextInputVariationsStoryArgs = {
  label: string;
  icon: string;
  helpText?: string;
  defaultValue?: string;
};

const TextInputVariations: React.FC<TextInputVariationsStoryArgs> = (props) => {
  const stateVariations = [
    { description: 'Default' },
    { description: 'Disabled', disabled: true },
    { description: 'Read Only', readOnly: true },
    { description: 'Invalid', invalid: true },
  ];

  const iconVariations = [
    { title: 'Icon Right / Unpopulated', key: 'ir', iconRight: icons[props.icon] },
    { title: 'Icon Right / Populated', key: 'irp', iconRight: icons[props.icon], populated: true },
    { title: 'Icon Left  / Unpopulated', key: 'il', iconLeft: icons[props.icon] },
    { title: 'Icon Left / Populated', key: 'ilp', iconLeft: icons[props.icon], populated: true },
    { title: 'No Icon  / Unpopulated', key: 'ni' },
    { title: 'No Icon / Populated', key: 'nip', populated: true },
  ];

  const [formValues, setFormValues] = React.useState<Record<string, string>>({});

  return (
    <Box display="flex" flexWrap="wrap" gap="40px" maxWidth="800px">
      {iconVariations.map(({ key: inputKey, title, populated, ...variationProps }) => {
        return (
          <Stack key={inputKey} gap="20px">
            <Typography.H4>
              {title}
            </Typography.H4>
            <Box display="flex" flexWrap="wrap" gap="20px" maxWidth="800px">
              {stateVariations.map(({ description, ...stateProps }) => {
                const formKey = `${inputKey}-${description.toLowerCase().split(' ').join('_')}`;
                const defaultValue = populated ? props.defaultValue : '';
                const value = formValues[formKey] ?? defaultValue;
                return (
                  <Stack key={formKey} width="40%" minWidth="350px" maxWidth="400px" gap="20px">
                    <Box
                      sx={{
                        fontVariant: 'all-small-caps',
                        color: '#323233',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {description}
                    </Box>
                    <TextInput
                      id={formKey}
                      label={props.label || 'Label'}
                      {...variationProps}
                      {...stateProps}
                      value={value}
                      onChange={(e) => setFormValues({ ...formValues, [formKey]: e.target.value })}
                      helpText={props.helpText || 'Input help text'}
                    />
                  </Stack>
                );
              })}
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
};


const meta = {
  title: 'Core Components/Inputs/Text Input Variations',
  component: TextInputVariations,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'inline-radio' },
      options: Object.keys(icons),
    },
  },
} satisfies Meta<typeof TextInputVariations>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _TextInputVariations: Story = {
  args: {
    icon: 'Bell',
    label: 'Label',
    helpText: 'Input help text',
    defaultValue: 'John Doe'
  },
};
