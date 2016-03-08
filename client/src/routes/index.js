
import Relay from 'react-relay';
import React from 'react';

/**
 * #3 - Relay routes
 * Define a root GraphQL query into which your
 * containers' query fragments will be composed.
 *
 * To learn more about Relay routes, visit:
 *   https://facebook.github.io/relay/docs/guides-routes.html
 */
class HelloRoute extends Relay.Route {
  static routeName = 'Hello';  // A unique name
  static queries = {
    // Here, we compose your Relay container's
    // 'greetings' fragment into the 'greetings'
    // field at the root of the GraphQL schema.
    greetings: (Component) => Relay.QL`
      query GreetingsQuery {
        greetings {
          ${Component.getFragment('greetings')},
        },
      }
    `
  };
}

HelloRoute.routeName = 'Hello';

export default HelloRoute;
