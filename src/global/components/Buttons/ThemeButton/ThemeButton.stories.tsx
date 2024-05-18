import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ThemeButton as Button, type TButtonSize } from 'global/components/Buttons';
import type { ThemedTemplateVariants } from 'global/types';

const variantOptions: ThemedTemplateVariants[] = [
  'primary',
  'secondary',
  'special',
  'success',
  'danger',
  'warning',
  'info',
];

type ButtonListProps = {
  showBorder: boolean;
  size: TButtonSize;
  filled: boolean;
};

const ButtonList = (props: ButtonListProps) => {
  const buttonProps = {
    ...props,
    icon: NotificationsIcon,
    onClick: () => undefined,
  };

  return (
    <Stack gap="20px" maxWidth="290px">
      {variantOptions.map((variant) => (
        <Button
          key={variant}
          text={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`}
          variant={variant}
          style={{ minWidth: 'max-content'}}
          {...buttonProps}
        />
      ))}
      <Button
        text="Disabled Button"
        variant="primary"
        disabled
        {...buttonProps}
      />
    </Stack>
  );
};

const ColorModeButtonLists = (props: Omit<ButtonListProps, 'filled'>) => {
  return (
    <Stack display="inline-flex" flexWrap="wrap" gap="20px">
      {['filled', 'unfilled'].map((colorMode) => (
        <Stack key={colorMode} gap="20px">
          <Box sx={{ fontVariant: 'all-small-caps', color: '#323233', letterSpacing: '0.5px', textAlign: 'center' }}>
            {colorMode}
          </Box>
          <ButtonList {...props} filled={colorMode === 'filled'} />
        </Stack>
      ))}
    </Stack>
  );
};

const ThemeButtonExamples: React.FC = () => {
  return (
    <Stack gap="40px">
      {['large', 'medium', 'small'].map((size) => (
        <Stack key={size} flexDirection="row" gap="40px">
          {['with border', 'no border'].map((borderType) => (
            <Stack key={borderType} gap="20px" alignItems="center">
              <Box sx={{ fontSize: '18px', color: '#626262', fontVariant: 'all-small-caps', textTransform: 'capitalize', fontWeight: 'bolder', letterSpacing: '0.5px', }}>
                {`${size} - ${borderType}`}
              </Box>
              <ColorModeButtonLists size={size as TButtonSize} showBorder={borderType === 'with border'} />
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

const meta = {
  title: 'Core Components/Buttons/Button Themes',
  component: ThemeButtonExamples,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeButtonExamples>;

export default meta;
type Story = StoryObj<typeof ThemeButtonExamples>;

export const ThemeButtonVariations: Story = {
  render: () => <ThemeButtonExamples />,
};
