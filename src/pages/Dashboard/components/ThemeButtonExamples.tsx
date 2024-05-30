import { Box, Stack } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ThemeButton as Button } from 'global/components/Buttons';
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
  filled: boolean;
};

const ButtonList = (props: ButtonListProps) => {
  const buttonProps = {
    ...props,
    icon: NotificationsIcon,
    onClick: () => undefined,
  };

  return (
    <Stack gap={2.5} maxWidth="290px">
      {variantOptions.map((variant) => (
        <Button
          key={variant}
          text={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`}
          variant={variant}
          size="medium"
          style={{ minWidth: 'max-content'}}
          {...buttonProps}
        />
      ))}
      <Button
        text="Disabled Button"
        variant="primary"
        disabled
        size="medium"
        style={{ minWidth: 'max-content'}}
        {...buttonProps}
      />
    </Stack>
  );
};

export const ThemeButtonExamples = () => {
  return (
    <Box display="flex" flexWrap="wrap" gap={4}>
      {['filled', 'unfilled'].map((colorMode) => (
        <Stack key={colorMode} alignItems="center" gap={2}>
          <Box
            sx={theme => ({
              ...theme.styles.textLgMedium,
              fontVariant: 'all-small-caps',
              color: theme.styles.neutral[90],
            })}
            >
            {colorMode}
          </Box>
          <ButtonList filled={colorMode === 'filled'} />
        </Stack>
      ))}
    </Box>
  );
};
