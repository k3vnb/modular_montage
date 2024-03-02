import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes';
import { AppLayout } from 'layouts';
import { PlaceholderPage, ErrorPage, NotFoundPage } from 'pages';
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
            element: <PlaceholderPage title="Dashboard" />,
          },
          {
            path: ROUTES.widgets.path,
            element: <PlaceholderPage title="Widgets" />,
          },
          {
            path: ROUTES.forms.path,
            element: <PlaceholderPage title="Forms" />,
          },
          {
            path: ROUTES.about.path,
            element: <PlaceholderPage hasSubroutes title="About" />,
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
