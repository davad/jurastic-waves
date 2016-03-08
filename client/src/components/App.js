
import Relay from 'react-relay';
import React from 'react';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Welcome to Relay.
// Allow us to introduce you to the four elements.

/**
 * #1 - Your React components
 * This will look familiar to React developers.
 *
 * To learn more about React, visit:
 *  https://facebook.github.io/react
 */
class App extends React.Component {
  render() {
    // Relay will materialize this prop based on the
    // result of the query in the next component.
    var {hello} = this.props.greetings;
    return <h1>{hello}</h1>;
  }
}

/**
 * #2 - Relay containers
 * Compose your React components with a declaration of
 * the GraphQL query fragments that fetch their data.
 *
 * To learn more about Relay containers, visit:
 *   https://facebook.github.io/relay/docs/guides-containers.html
 */
App = Relay.createContainer(App, {
  fragments: {
    // This GraphQL query executes against
    // the schema in the 'schema' tab above.
    //
    // To learn more about Relay.QL, visit:
    //   https://facebook.github.io/relay/docs/api-reference-relay-ql.html
    greetings: () => Relay.QL`
      fragment on Greetings {
        hello,
      }
    `
  }
});

export default App;
