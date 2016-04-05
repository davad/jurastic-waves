
import React from 'react';
import ReactDOM from 'react-dom';
import { RelayRouter } from 'react-router-relay';
import { IndexRoute, Route, browserHistory } from 'react-router';

import App from './components/App';
import Grid from './components/Grid';
import GeologicQueries from './queries/GeologicQueries';

ReactDOM.render(
  <RelayRouter history={browserHistory}>
    <Route path="*" component={App} queries={GeologicQueries} />
     {/* <IndexRoute
        component={Grid}
        queries={GeologicQueries}
      />*/}
  </RelayRouter>,
  document.getElementById('jurassicRoot')
);
