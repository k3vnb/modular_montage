import NoteIcon from '@mui/icons-material/NoteAltOutlined';
import AppsIcon from '@mui/icons-material/AppsOutlined';
import YardIcon from '@mui/icons-material/YardOutlined';
import RockingHorseIcon from '@mui/icons-material/BedroomBabyOutlined';
import type { TNavRoute } from './types';

const PATHS = {
  root: '/',
  dashboard: '/dashboard',
  widgets: '/widgets',
  forms: '/forms',
  about: '/about',
  etc: '/about/etc',
  etc2: '/about/etc2',
} as const;

export const ROUTES = {
  root: {
    path: PATHS.root,
  },
  dashboard: {
    path: PATHS.dashboard,
    label: 'Home',
    icon: AppsIcon,
  },
  widgets: {
    path: PATHS.widgets,
    label: 'Widgets',
    icon: RockingHorseIcon,
  },
  forms: {
    path: PATHS.forms,
    label: 'Forms',
    icon: NoteIcon,
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
} as const;

export const NAV_ROUTES_LIST: TNavRoute[] = [
  ROUTES.dashboard,
  ROUTES.widgets,
  ROUTES.forms,
  ROUTES.about,
];

export const NAV_ROUTES_LIST_MOBILE: TNavRoute[] = [
  ...NAV_ROUTES_LIST,
];
