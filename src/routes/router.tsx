import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import { AppLayout } from 'layouts';
import { Pages, PlaceholderPage, ErrorPage, NotFoundPage } from 'pages';
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
          },
          {
            path: ROUTES.contact.path,
            element: <PlaceholderPage title="Contact" icon={ROUTES.contact.icon} />,
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
