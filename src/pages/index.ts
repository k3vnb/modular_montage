import { Dashboard } from './Dashboard';
import { Widgets } from './Widgets';
import { Games } from './Games';
import { About } from './About';
export { ErrorPage } from './ErrorPage';
export { NotFoundPage } from './NotFoundPage';
export { PlaceholderPage } from './PlaceholderPage';

export const Pages = {
  Dashboard,
  Widgets,
  Games,
  About,
} as const;
