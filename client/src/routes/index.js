
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Grid from '../components/grid/Grid';
import GeologicQueries from '../queries/GeologicQueries';

import JurrasicApp from '../containers/App';

/* eslint-disable react/jsx-no-bind */
export default (
  <Route
    path="/"
    component={JurrasicApp}
  >
    <IndexRoute
      component={Grid}
      queries={GeologicQueries}
      prepareParams={() => ({ period: 1 })}
    />
  </Route>
);
