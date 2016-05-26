
import Relay from 'react-relay';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
    const { isActive } = this.state;

    return (
      <div className={style.appMain}>
      {isActive ?
        <div className={style.heading}>
          <h2><Link to="/">Jurassic Waves</Link></h2>
        </div> : null}
        {isActive ? this.props.children :
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
