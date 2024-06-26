import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import { AppLayout } from 'layouts';
import { Pages, PlaceholderPage, ErrorPage, NotFoundPage } from 'pages';
import { GameSubroutes } from 'pages/Games';
import App from '../App';

const router = createBrowserRouter([
  {
    path: ROUTES.root.path,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: ROUTES.dashboard.path,
            element: <Pages.Dashboard />,
          },
          {
            path: ROUTES.widgets.path,
            element: <Pages.Widgets />,
          },
          {
            path: ROUTES.games.path,
            element: <Pages.Games />,
            children: [
              {
                index: true,
                element: <GameSubroutes.Menu />,
              },
              {
                path: ROUTES.games.subroutes.hslGame.path,
                element: <GameSubroutes.HSLGame />,
              },
              {
                path: ROUTES.games.subroutes.rgbGame.path,
                element: <GameSubroutes.RGBGame />,
              },
            ],
          },
          {
            path: ROUTES.settings.path,
            element: <Pages.Settings />,
          },
          {
            path: ROUTES.about.path,
            element: <Pages.About />,
            children: [
              {
                index: true,
                element: <PlaceholderPage isSubroute title="Mainly" />,
              },
              {
                path: ROUTES.about.subroutes.etc.path,
                element: <PlaceholderPage isSubroute title="Etc" />,
              },
              {
                path: ROUTES.about.subroutes.etc2.path,
                element: <PlaceholderPage isSubroute title="Etc 2" />,
              },
            ],
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
