import { Dashboard } from './Dashboard';
import { Widgets } from './Widgets';
import { Forms } from './Forms';
export { ErrorPage } from './ErrorPage';
export { NotFoundPage } from './NotFoundPage';
export { PlaceholderPage } from './PlaceholderPage';

export const Pages = {
  Dashboard,
  Widgets,
  Forms,
} as const;
