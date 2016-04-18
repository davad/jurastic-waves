
import Relay from 'react-relay';
import React, { Component, PropTypes } from 'react';

import style from './style';

/**
 * #1 - Your React components
 * This will look familiar to React developers.
 *
 * To learn more about React, visit:
 *  https://facebook.github.io/react
 */
class JurrasicApp extends Component {

  static propTypes = {
    children: PropTypes.array
  }

  constructor() {
    super();

    this.state = {
      isPlay: false
    };
    this.clickJurrasicWaves = this.clickJurrasicWaves.bind(this);
  }

  clickJurrasicWaves() {
    this.setState({isPlay: true});
  }

  render() {
    // Relay will materialize this prop based on the
    // result of the query in the next component.
    console.log(this.props);
    return (
      <div className={style.appMain}>
        {this.state.isPlay ? this.props.children :
          <div className={style.appEnter}>
            <button onClick={this.clickJurrasicWaves}>
            ENTER
            </button>
          </div>
        }
      </div>
    );
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
export default Relay.createContainer(JurrasicApp, {
  fragments: {
    // This GraphQL query executes against
    // the schema in the 'schema' tab above.
    //
    // To learn more about Relay.QL, visit:
    //   https://facebook.github.io/relay/docs/api-reference-relay-ql.html
    dinosaurs: () => Relay.QL`
      fragment on GeologicPeriod {
       id
      }
    `
  }
});
