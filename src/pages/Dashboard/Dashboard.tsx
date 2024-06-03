import { Box, Stack } from '@mui/system';
import DashboardIcon from '@mui/icons-material/BlurOnOutlined';
import { Tile } from 'global/components/Tile/Tile';
import { PageTitle } from 'global/components/PageTitle';
import { Typography } from 'global/components/Typography';
import {
  LayoutIcons,
  ThemeRadioButtons,
  ThemeButtonExamples,
  LayoutStyleRadioButtons,
} from './components';

export const Dashboard = () => {
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
        <Tile gap={1} variant="info" elevation={1} width={{ xxs: '100%', md: '70%' }} flexShrink={0}>
          <Typography.H4 textAlign="center">Theme Selector</Typography.H4>
          <Stack gap={1.5}>
            <Typography.Body textAlign="center">
              Adjust the application's color scheme.
            </Typography.Body>
            <Box display="flex" alignItems="center" justifyContent={{ xxs: 'space-between', sm: 'start' }} gap={2.5}>
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
      {/* LAYOUT SELECTOR */}
      <Box display="flex" flexDirection="row-reverse" gap={3}>
        <Tile flexShrink={0} gap={1} variant="info" elevation={1} width={{ xxs: '100%', md: '70%' }}>
          <Typography.H4 textAlign="center">Layout Selector</Typography.H4>
          <Stack gap={1.5}>
            <Typography.Body textAlign="center">
              Adjust the application's layout.
            </Typography.Body>
            <Box display="flex" alignItems="center" justifyContent={{ xxs: 'space-between', sm: 'start' }} gap={2.5}>
              <LayoutStyleRadioButtons />
              <LayoutIcons.StoryboardIcon small sx={{ display: { xxs: 'flex', md: 'none' } }} />
            </Box>
            <Typography.Body>
              The 'App Shell' layout features a site header, main content area, a navigation side bar in desktop screen widths and a navigation bottom bar in mobile screenwidths.
            </Typography.Body>
            <Typography.Body>
              The 'Classic' layout features a site header which contains the nav menu and main content area.  The nav menu collapses into a hamburger menu in mobile screen widths.
            </Typography.Body>
          </Stack>
        </Tile>
        <LayoutIcons.StoryboardIcon sx={{ display: { xxs: 'none', md: 'flex' }}} />
      </Box>
      <Tile showBorder gap={1} variant="info" elevation={1} maxWidth="max-content">
        <Typography.H4 textAlign="center">Theme Buttons</Typography.H4>
        <ThemeButtonExamples />
      </Tile>
    </Box>
  );
};
