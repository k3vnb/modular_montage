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

const BUTTON_WIDTH = 200;

const ButtonList = (props: ButtonListProps) => {
  const buttonProps = {
    ...props,
    icon: NotificationsIcon,
    onClick: () => undefined,
  };

  return (
    <Box
      gap={1}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-evenly"
      maxWidth={BUTTON_WIDTH * 5}
    >
      {variantOptions.map((variant) => (
        <Button
          key={variant}
          sx={{ maxWidth: BUTTON_WIDTH, width: BUTTON_WIDTH }}
          text={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`}
          variant={variant}
          size="medium"
          style={{ minWidth: 'max-content'}}
          {...buttonProps}
        />
      ))}
      <Button
        sx={{ maxWidth: BUTTON_WIDTH, width: BUTTON_WIDTH }}
        text="Disabled Button"
        variant="primary"
        disabled
        size="medium"
        style={{ minWidth: 'max-content'}}
        {...buttonProps}
      />
    </Box>
  );
};

export const ThemeButtonExamples = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
      {['filled', 'unfilled'].map((colorMode) => (
        <Stack key={colorMode} alignItems="start" gap={2}>
          <Box
            sx={theme => ({
              marginLeft: theme.spacing(6),
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
