
import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

import style from './style';

class DinoCard extends Component {
  constructor(props) {
    super(props);

    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleStarClick() {
    return 'test';
  }

  render() {
    const { dinosaur } = this.props;
    return (
      <div className={style.card}>
        <div>
          <Link to={`dinosaur/${dinosaur.id}`}>{dinosaur.name}</Link>
        </div>
        <div className={style.cardImgContainer}>
          <img src={dinosaur.imageUrl} role="presentation" />
        </div>
        <div className={style.toolbelt}>
          <span>
            <i className="material-icons">settings</i>
          </span>
          <span onClick={this.handleStarClick}>
            <i className="material-icons">star_border</i>
          </span>
          <span>
            <i className="material-icons">edit</i>
          </span>
          <span>
            <i className="material-icons">audiotrack</i>
          </span>
        </div>
      </div>
    );
  }
}

DinoCard.propTypes = {
  dinosaur: PropTypes.object
};

// <i class="material-icons">star</i>
export default Relay.createContainer(DinoCard, {
  fragments: {
    dinosaur: () => Relay.QL`
      fragment on Dinosaur {
        id,
        name,
        order,
        imageUrl,
        shortDescription
      }
    `
  },
});
