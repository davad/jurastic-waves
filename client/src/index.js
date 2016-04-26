
import React from 'react';
import ReactDOM from 'react-dom';
import { RelayRouter } from 'react-router-relay';
import { IndexRoute, Route, browserHistory } from 'react-router';

import JurrasicApp from './containers/App';
import Grid from './components/grid/Grid';
import GeologicQueries from './queries/GeologicQueries';

ReactDOM.render(
  <RelayRouter history={browserHistory}>
    <Route path="/" component={JurrasicApp} queries={GeologicQueries}>
      <IndexRoute
        component={Grid}
        queries={GeologicQueries}
        prepareParams={() => ({ period: 'jurassic' })}
      />
    </Route>
  </RelayRouter>,
  document.getElementById('jurassicRoot')
);
