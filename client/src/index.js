'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import Route from '/routes';
import App from './components/App';

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new Route()}
  />,
  document.getElementById('jurassicRoot')
);
