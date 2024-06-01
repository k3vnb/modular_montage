import { Box, Stack, useTheme } from '@mui/system';
import DashboardIcon from '@mui/icons-material/BlurOnOutlined';

import { Tile } from 'global/components/Tile/Tile';
import { PageTitle } from 'global/components/PageTitle';
import { Typography } from 'global/components/Typography';
import { RadioGroup } from 'global/components/Form/Inputs/RadioGroup';
import { ReactComponent as IdeaIcon } from 'global/assets/idea.svg';
import { ReactComponent as StoryboardIcon } from 'global/assets/storyboard.svg';
import { ThemeButtonExamples } from './components';

import { useGlobalContext } from 'contexts/GlobalContext';
import { THEME_IDS, type ThemeId } from 'theme';
import { LAYOUT_STYLES, type LayoutStyle } from 'layouts/types';

export const Dashboard = () => {
  const { styles } = useTheme();
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Themes & Layout" icon={DashboardIcon} description="Modular UI Systems" />
      {/* INTRO TILE */}
      <Tile showBorder gap={2} elevation={1}>
        <Typography.H3 textAlign="center" mb={1} sx={{ fontWeight: 500, fontSize: '1.5rem' }}>
          Welcome to Modular Montage
        </Typography.H3>
        <Stack gap={1}>
          <Typography.Body>
            This app is dedicated to the exploration of themes, layout, and components in a clientside rendered environment.
          </Typography.Body>
          <Typography.Body>
            This is a dashboard page. It is a place where you can see the themes & layout design in action.
          </Typography.Body>
          <Typography.Body>
            The 'Widgets page' will explore assortments of popups, modals, toasts and other components.
          </Typography.Body>
          <Typography.Body>
            The 'Forms page' will explore form state, styling and validation.
          </Typography.Body>
        </Stack>
      </Tile>
      {/* THEME SELECTOR */}
      <Box display="flex" flexDirection="row" gap={3}>
        <Tile gap={1} variant="info" elevation={1} width="70%" flexShrink={0}>
          <Typography.H4>Theme Selector</Typography.H4>
          <Stack gap={1.5}>
            <Typography.Body>
              Adjust the application's color scheme.
            </Typography.Body>
            <ThemeRadioButtons />
            <Typography.Body>
              Color schemes are comprised of semantic colors (ie, Primary, Secondary, Special, Danger, Warning, Info, Success) and neutral colors (ie, Black, White, Gray).
            </Typography.Body>
          </Stack>
        </Tile>
        <Box p={6} flexGrow={1} flexWrap="wrap" justifyContent="center" alignItems="center" sx={{ backgroundColor: 'transparent' }}>
          <Box component={IdeaIcon} maxHeight={300} maxWidth="100%" color={styles.neutral[70]} />
        </Box>
      </Box>
      {/* LAYOUT SELECTOR */}
      <Box display="flex" flexDirection="row" gap={3}>
        <Box p={6} flexGrow={1} flexWrap="wrap" justifyContent="center" alignItems="center" sx={{ backgroundColor: 'transparent' }}>
          <Box component={StoryboardIcon} maxHeight={300} maxWidth="100%" color={styles.neutral[70]} />
        </Box>
        <Tile flexShrink={0} gap={1} variant="info" elevation={1} width="70%">
          <Typography.H4>Layout Selector</Typography.H4>
          <Stack gap={1.5}>
            <Typography.Body>
              Adjust the application's layout.
            </Typography.Body>
            <LayoutStyleRadioButtons />
            <Typography.Body>
              The 'App Shell' layout features a site header, main content area, a navigation side bar in desktop screen widths and a navigation bottom bar in mobile screenwidths.
            </Typography.Body>
            <Typography.Body>
              The 'Classic' layout features a site header which contains the nav menu and main content area.  The nav menu collapses into a hamburger menu in mobile screen widths.
            </Typography.Body>
            </Stack>
        </Tile>
      </Box>
      <Tile showBorder gap={1} variant="info" elevation={1} maxWidth="max-content">
        <Typography.H4>Theme Buttons</Typography.H4>
        <ThemeButtonExamples />
      </Tile>
    </Box>
  );
};

const ThemeRadioButtons = () => {
  const { themeId, updateTheme } = useGlobalContext();
  return (
    <Stack my={1}>
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

const LayoutStyleRadioButtons = () => {
  const { layoutStyle, updateLayoutStyle } = useGlobalContext();
  return (
    <Stack my={1}>
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
