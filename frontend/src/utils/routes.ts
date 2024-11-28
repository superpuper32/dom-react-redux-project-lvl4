const apiPath = '/api/v1';

type Routes = {
  [index: string]: () => string
}

const routes: Routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  dataPath: () => [apiPath, 'data'].join('/'),
  createPath: () => [apiPath, 'signup'].join('/'),
  channels: () => [apiPath, 'channels'].join('/'),
};

export default routes;
