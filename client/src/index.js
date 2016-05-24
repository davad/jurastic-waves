
import React from 'react';
import ReactDOM from 'react-dom';
import useRelay from 'react-router-relay';
import Relay from 'react-relay';
import {
  Router,
  browserHistory,
  applyRouterMiddleware
} from 'react-router';

import routes from './routes/index';

ReactDOM.render(
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useRelay)}
    routes={routes}
    environment={Relay.Store}
  />,
  document.getElementById('jurassicRoot')
);
