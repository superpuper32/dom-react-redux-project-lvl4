import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage, Login, Main } from './pages';

import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
