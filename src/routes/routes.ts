import FireplaceIcon from '@mui/icons-material/FireplaceOutlined';
import AppsIcon from '@mui/icons-material/AppsOutlined';
import YardIcon from '@mui/icons-material/YardOutlined';
// import ChairIcon from "@mui/icons-material/ChairOutlined";
import BedroomBabyOutlinedIcon from '@mui/icons-material/BedroomBabyOutlined';
import type { SvgIconComponent } from '@mui/icons-material';


export interface Route {
  path: string;
  subroutes?: Record<string, Route>;
}

export interface NavRoute extends Route {
  shortLabel?: string;
  label: string;
  icon: SvgIconComponent | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

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
    label: 'Dashboard',
    shortLabel: 'Home',
    icon: AppsIcon,
  },
  widgets: {
    path: PATHS.widgets,
    label: 'Widgets',
    icon: BedroomBabyOutlinedIcon,
  },
  forms: {
    path: PATHS.forms,
    label: 'Forms',
    icon: FireplaceIcon,
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

export const NAV_ROUTES_LIST: NavRoute[] = [
  ROUTES.dashboard,
  ROUTES.widgets,
  ROUTES.forms,
  ROUTES.about,
];

export const NAV_ROUTES_LIST_MOBILE: NavRoute[] = [
  ...NAV_ROUTES_LIST,
];
