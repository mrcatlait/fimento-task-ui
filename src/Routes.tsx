import React, { FC } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routes } from '@constants';
import { Page } from '@common/components';

const BookView = React.lazy(() => {
  return import('./components/BookView');
});

const ErrorScreen = React.lazy(() => {
  return import('./components/ErrorScreen');
});

const Login = React.lazy(() => {
  return import('./components/Login');
});

const BookViewPage = () => (
  <Page title={routes.home.label}>
    <BookView />
  </Page>
);

const LoginPage = () => (
  <Page title={routes.login.label}>
    <Login />
  </Page>
);

const ErrorPage = () => (
  <Page title={routes.error.label}>
    <ErrorScreen type="internal" />
  </Page>
);

const AccessDeniedPage = () => (
  <Page title={routes.access_denied.label}>
    <ErrorScreen type="access" />
  </Page>
);

const Routes: FC = () => (
  <Switch>
    <Route path={routes.login.route} exact render={LoginPage} />
    <Route path={routes.error.route} exact render={ErrorPage} />
    <Route path={routes.access_denied.route} exact render={AccessDeniedPage} />
    <Route path={routes.home.route} render={BookViewPage} />
  </Switch>
);

export default withRouter(Routes);
