import type { SvgIconComponent } from '@mui/icons-material';

export type TRoute = {
  path: string;
  subroutes?: Record<string, TRoute>;
}

export type TNavRoute = TRoute & {
  shortLabel?: string;
  label: string;
  icon: SvgIconComponent | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
