
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import { RelayRouter } from 'react-router-relay';
import {IndexRoute, Route, browserHistory } from 'react-router';

import HomeRoute from './routes';
import App from './components/App';
import ViewerQueries from './queries/ViewerQueries';

ReactDOM.render(
  <RelayRouter history={browserHistory}>
    <Route
      path="/" component={App}
      queries={ViewerQueries}
    />
  </RelayRouter>,
  document.getElementById('jurassicRoot')
);
