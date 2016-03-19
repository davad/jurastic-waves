
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import HomeRoute from './routes';
import App from './components/App';

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new HomeRoute()}
  />,
  document.getElementById('jurassicRoot')
);
