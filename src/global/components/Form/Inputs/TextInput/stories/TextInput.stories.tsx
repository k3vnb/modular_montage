import * as React from 'react';
import { Box } from '@mui/system';
import type { Meta, StoryObj } from '@storybook/react';
import { Notifications, MailOutlined, Search } from '@mui/icons-material';
import type { SvgIconComponent } from '@mui/icons-material';
import { TextInput } from '../TextInput';

type IconOptions = Record<string, SvgIconComponent>;

const icons: IconOptions = {
  'Bell': Notifications,
  'Mail': MailOutlined,
  'Search': Search,
};

const iconKeys = ['none', ...(Object.keys(icons))];

type TextInputStoryArgs = {
  icon: string;
  iconPosition: 'left' | 'right';
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  helpText?: string;
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const TextInputStory = (props: TextInputStoryArgs) => {
  const [value, setValue] = React.useState<string>(props.defaultValue || '');
  const iconProps = React.useMemo(() => {
    if (props.iconPosition === 'left') return { iconLeft: icons[props.icon] };
    if (props.iconPosition === 'right') return { iconRight: icons[props.icon] };
    return {};
  }, [props.iconPosition, props.icon]);

  const isInvalidDemo = props.defaultValue === 'johnsmith.at.gmail.com';
  
  const { invalid, helpText } = React.useMemo(() => {
    if (!isInvalidDemo) return { invalid: props.invalid, helpText: props.helpText };
    const isValid = isValidEmail(value);
    return {
      invalid: !isValid,
      helpText: isValid ? 'Looks good!' : 'Invalid email address',
    };
  }, [isInvalidDemo, props.invalid, props.helpText, value]);

  return (
    <Box sx={{ maxWidth: '350px' }}>
      <TextInput
        {...iconProps}
        id="text-input"
        label={props.label || 'First Name'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={props.disabled}
        readOnly={props.readOnly}
        invalid={invalid}
        helpText={helpText}
      />
    </Box>
  );
};

const meta = {
  title: 'Core Components/Inputs/Text Input',
  component: TextInputStory,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'radio' },
      options: iconKeys,
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    defaultValue: {
      control: { disable: true },
    },
  },
} satisfies Meta<typeof TextInputStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _TextInputInteractive: Story = {
  args: {
    icon: 'Bell',
    iconPosition: 'right',
    label: 'First Name',
    disabled: false,
    readOnly: false,
    invalid: false,
    helpText: '',
  },
};

export const _TextInputInvalid: Story = {
  argTypes: {
    icon: {
      control: { disable: true },
    },
  },
  args: {
    icon: 'Mail',
    iconPosition: 'right',
    label: 'Email',
    disabled: false,
    readOnly: false,
    invalid: true,
    defaultValue: 'johnsmith.at.gmail.com',
    helpText: 'Invalid email address',
  },
};
