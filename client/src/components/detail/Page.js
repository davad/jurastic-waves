
import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';

import style from './style';

class DinosaurDetails extends Component {

  render() {
    const { dinosaur } = this.props;
    return (
      <div className={style.detailPage}>
        <div>
          <h2>
          {dinosaur.name} <sup style={{ fontSize: 'small' }}>(Kingdom): {dinosaur.kingdom}</sup>
          </h2>
        </div>
        <div className={style.cardImgContainer}>
          <img src={dinosaur.imageUrl} role="presentation" />
        </div>
        <div className={style.description}>
          <p>{dinosaur.longDescription}</p>
        </div>
      </div>
    );
  }
}

DinosaurDetails.propTypes = {
  dinosaur: PropTypes.object
};

export default Relay.createContainer(DinosaurDetails, {
  fragments: {
    dinosaur: () => Relay.QL`
      fragment on Dinosaur {
        name,
        order,
        kingdom,
        imageUrl,
        longDescription
      }
    `
  },
});

