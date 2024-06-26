import { Stack } from '@mui/system';
import { RadioGroup } from 'global/components/Form/Inputs/RadioGroup';
import { useGlobalContext } from 'contexts/GlobalContext';
import { THEME_IDS, type ThemeId } from 'theme';
import { LAYOUT_STYLES, type LayoutStyle } from 'layouts/types';
import { Typography } from 'global/components/Typography';

const MIN_WIDTH = 130;

export const ThemeRadioButtons = () => {
  const { themeId, updateTheme } = useGlobalContext();
  return (
    <Stack my={2} gap={1.5} minWidth={MIN_WIDTH}>
      <Typography.Body fontStyle="italic">Select a theme:</Typography.Body>
      <RadioGroup
        hideLegend
        legend="Theme Selector"
        id="theme-selector"
        name="theme-selector"
        value={themeId}
        options={Object.values(THEME_IDS).map((key) => ({ value: key, label: key}))}
        onChange={(val: string) => updateTheme(val as ThemeId)}
      />
    </Stack>
  );
};

export const LayoutStyleRadioButtons = () => {
  const { layoutStyle, updateLayoutStyle } = useGlobalContext();
  return (
    <Stack mb={2} gap={1.5} alignSelf="start" minWidth={MIN_WIDTH}>
      <Typography.Body fontStyle="italic">Select a layout:</Typography.Body>
      <RadioGroup
        hideLegend
        legend="Layout Selector"
        id="layout-selector"
        name="layout-selector"
        value={layoutStyle}
        options={Object.values(LAYOUT_STYLES).map((key) => ({ value: key, label: key}))}
        onChange={(val: string) => updateLayoutStyle(val as LayoutStyle)}
      />
    </Stack>
  );
};
