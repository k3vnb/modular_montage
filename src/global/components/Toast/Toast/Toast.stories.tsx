import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/system';
import type { SvgIconComponent } from '@mui/icons-material';
import {
  Delete,
  BeachAccessOutlined,
  ElectricBikeOutlined,
} from '@mui/icons-material';

import { Toast } from './Toast';
import type { ToastVariants } from '../types';

const variantOptions: ToastVariants[] = [
  'info',
  'special',
  'success',
  'danger',
  'warning',
];

type ToastExampleArgs = {
  variants: ToastVariants[];
  message?: string;
  dismissable: boolean;
  showAction: boolean;
  customIcon: string;
};

type IconOptions = Record<string, SvgIconComponent>;

const icons: IconOptions = {
  'Delete': Delete,
  'Beach': BeachAccessOutlined,
  'Bike': ElectricBikeOutlined,
};

const iconKeys = ['default', ...(Object.keys(icons))];

const ToastExamples: React.FC<ToastExampleArgs> = ({
  variants,
  message,
  customIcon,
  dismissable,
  showAction,
}) => {
  const variantList = React.useMemo(() => (
    variants.length ? variants : variantOptions
  ), [variants]);

  const icon = React.useMemo(() => {
    if (customIcon === 'default') return undefined;
    return icons[customIcon];
  }, [customIcon]);

  const actionProps = React.useMemo(() => {
    if (!showAction) return undefined;
    return {
      label: 'Action',
      onClick: () => undefined,
    };
  }, [showAction]);

  return (
    <Stack gap="20px">
      {variantList.map((variant) => {
        const _message = message || `${variant.charAt(0).toUpperCase() + variant.slice(1)} message`;
        return (
          <Toast
            id={variant}
            key={variant}
            open
            animated={false}
            isStaticPosition
            icon={icon}
            dismissable={dismissable}
            action={actionProps}
            variant={variant}
            message={_message}
            onClose={() => undefined}
          />
        );
      })}
    </Stack>
  );
};

const meta = {
  title: 'Core Components/Toast',
  component: ToastExamples,
  tags: ['autodocs'],
  argTypes: {
    variants: {
      control: { type: 'check' },
      options: variantOptions,
    },
    customIcon: {
      control: { type: 'radio' },
      options: iconKeys,
    },
  },
} satisfies Meta<typeof ToastExamples>;

export default meta;
type Story = StoryObj<typeof ToastExamples>;

export const ToastVariations: Story = {
  args: {
    variants: variantOptions,
    dismissable: true,
    showAction: true,
    message: '',
    customIcon: 'default',
  },
};

export const ToastExample: Story = {
  args: {
    ...ToastVariations.args,
    variants: ['success'],
  },
};


export const ToastExampleWithLongMessage: Story = {
  args: {
    ...ToastExample.args,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};
