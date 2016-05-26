
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Grid from '../components/grid/Grid';
import GeologicQueries, { DinosaurQuery } from '../queries/GeologicQueries';
import DinosaurDetails from '../components/detail/Page';
import JurrasicApp from '../containers/App';

export default (
  <Route
    path="/"
    component={JurrasicApp}
  >
    <IndexRoute
      component={Grid}
      queries={GeologicQueries}
    />
    <Route
      path=":id" component={DinosaurDetails}
      queries={DinosaurQuery}
    />
  </Route>
);
