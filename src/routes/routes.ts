import DashboardIcon from '@mui/icons-material/AppsOutlined';
import YardIcon from '@mui/icons-material/YardOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import RobotIcon from '@mui/icons-material/SmartToyOutlined';
import InterestsIcon from '@mui/icons-material/InterestsOutlined';

import type { TNavRoute } from './types';

const PATHS = {
  root: '/',
  dashboard: '/dashboard',
  widgets: '/widgets',
  games: '/games',
  hslGame: '/games/hsl-game',
  rgbGame: '/games/rgb-game',
  about: '/about',
  etc: '/about/etc',
  etc2: '/about/etc2',
  settings: '/settings',
} as const;

export const ROUTES = {
  root: {
    path: PATHS.root,
  },
  dashboard: {
    path: PATHS.dashboard,
    label: 'Home',
    icon: DashboardIcon,
  },
  widgets: {
    path: PATHS.widgets,
    label: 'Widgets',
    icon: InterestsIcon,
  },
  games: {
    path: PATHS.games,
    label: 'Games',
    icon: RobotIcon,
    subroutes: {
      hslGame: {
        path: PATHS.hslGame,
      },
      rgbGame: {
        path: PATHS.rgbGame,
      },
    },
  },
  about: {
    path: PATHS.about,
    label: 'About',
    icon: YardIcon,
    subroutes: {
      etc: {
        path: PATHS.etc,
      },
      etc2: {
        path: PATHS.etc2,
      },
    },
  },
  settings: {
    path: PATHS.settings,
    label: 'Settings',
    icon: SettingsIcon,
  },
} as const;

export const NAV_ROUTES_LIST: TNavRoute[] = [
  ROUTES.dashboard,
  ROUTES.games,
  ROUTES.widgets,
  ROUTES.about,
  ROUTES.settings,
];

export const NAV_ROUTES_LIST_MOBILE: TNavRoute[] = [
  ...NAV_ROUTES_LIST,
];
