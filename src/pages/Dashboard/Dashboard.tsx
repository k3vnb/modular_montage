import { Box, Stack } from '@mui/system';
import DashboardIcon from '@mui/icons-material/BlurOnOutlined';
import { Tile } from 'global/components/Tile';
import { PageTitle } from 'global/components/PageTitle';
import { Typography } from 'global/components/Typography';
import {
  TileHeader,
  IntroTile,
  LayoutIcons,
  ThemeRadioButtons,
  ThemeButtonExamples,
  LayoutStyleRadioButtons,
} from './components';

export const Dashboard = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <PageTitle title="Themes & Layout" icon={DashboardIcon} description="Modular UI Systems" />
      <IntroTile />
      <LayoutSelectorSection />
      <ThemeSelectorSection />
      <ThemeColorSection />
    </Box>
  );
};

const LayoutSelectorSection = () => (
  <Box component="section" display="flex" flexDirection="row-reverse" gap={3}>
    <Tile flexShrink={0} gap={1} variant="info" elevation={1} width={{ xxs: '100%', md: '70%' }}>
      <TileHeader title="Layout Selector" description="Adjust the application's layout." />
      <Stack gap={1.5}>
        <Box display="flex" alignItems="center" justifyContent="space-between" gap={2.5} mx={2.5}>
          <LayoutStyleRadioButtons />
          <LayoutIcons.StoryboardIcon small sx={{ display: { xxs: 'flex', md: 'none' } }} />
        </Box>
        <Typography.Body>
          The <Typography.Bold>"App Shell"</Typography.Bold> layout features a site header, main content area, a navigation side bar in desktop screen widths and a navigation bottom bar in mobile screenwidths.
        </Typography.Body>
        <Typography.Body>
          The <Typography.Bold>"Classic"</Typography.Bold> layout features a site header which contains the nav menu and main content area.  The nav menu collapses into a hamburger menu in mobile screen widths.
        </Typography.Body>
      </Stack>
    </Tile>
    <LayoutIcons.StoryboardIcon sx={{ display: { xxs: 'none', md: 'flex' }}} />
  </Box>
);

const ThemeSelectorSection = () => (
  <Box component="section" display="flex" flexDirection="row" gap={3}>
    <Tile gap={1} variant="info" elevation={1} width={{ xxs: '100%', md: '70%' }} flexShrink={0}>
      <TileHeader title="Theme Selector" description="Adjust the application's color scheme." />
      <Stack gap={1.5}>
        <Box display="flex" alignItems="center" justifyContent="space-between" gap={2.5} mx={2.5}>
          <ThemeRadioButtons />
          <LayoutIcons.IdeaIcon small sx={{ display: { xxs: 'flex', md: 'none' } }} />
        </Box>
        <Typography.Body>
          Color schemes are comprised of semantic colors (ie, Primary, Secondary, Special, Danger, Warning, Info, Success) and neutral colors (ie, Black, White, Gray).
        </Typography.Body>
      </Stack>
    </Tile>
    <LayoutIcons.IdeaIcon sx={{ display: { xxs: 'none', md: 'flex' }}} />
  </Box>
);

const ThemeColorSection = () => (
  <Box display="flex" component="section" gap={3}>
    <Tile showBorder gap={1} elevation={1} maxWidth="max-content">
      <TileHeader
        title="Theme Colors"
        description="Themed buttons show the semantic color system in action - including hover and active states."
      />
      <ThemeButtonExamples />
    </Tile>
  </Box>
);
