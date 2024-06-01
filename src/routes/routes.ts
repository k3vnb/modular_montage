import DashboardIcon from '@mui/icons-material/AppsOutlined';
import YardIcon from '@mui/icons-material/YardOutlined';
import AltEmail from '@mui/icons-material/AlternateEmailOutlined';
import RobotIcon from '@mui/icons-material/SmartToyOutlined';
import InterestsIcon from '@mui/icons-material/InterestsOutlined';

import type { TNavRoute } from './types';

const PATHS = {
  root: '/',
  dashboard: '/dashboard',
  widgets: '/widgets',
  games: '/games',
  about: '/about',
  etc: '/about/etc',
  etc2: '/about/etc2',
  contact: '/contact',
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
  contact: {
    path: PATHS.contact,
    label: 'Contact',
    icon: AltEmail,
  },
} as const;

export const NAV_ROUTES_LIST: TNavRoute[] = [
  ROUTES.dashboard,
  ROUTES.widgets,
  ROUTES.games,
  ROUTES.about,
  ROUTES.contact,
];

export const NAV_ROUTES_LIST_MOBILE: TNavRoute[] = [
  ...NAV_ROUTES_LIST,
];
