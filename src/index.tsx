import 'core-js/stable';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { Navigation } from '@services';
import Routes from './Routes';
import App from './App';

(async () => {
  ReactDOM.render(
    <Router history={Navigation.history}>
      <App>
        <Suspense fallback={<p />}>
          <Routes />
        </Suspense>
      </App>
    </Router>,
    document.getElementById('root'),
  );
})();
