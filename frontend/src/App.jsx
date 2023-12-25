import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage, Login, Main } from './components';

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

const App = () => (
  <RouterProvider router={router} />
);

export default App;
