
import Relay from 'react-relay';
import React, { Component, PropTypes } from 'react';

import style from './style';

export default class JurrasicApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
    this.clickJurrasicWaves = this.clickJurrasicWaves.bind(this);
  }

  clickJurrasicWaves() {
    this.setState({ isActive: true });
  }

  render() {
    return (
      <div className={style.appMain}>
        {this.state.isActive ? this.props.children :
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

JurrasicApp.propTypes = {
  children: PropTypes.object
};
