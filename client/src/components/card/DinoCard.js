
import React from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

import style from './style';

class DinoCard extends React.Component {

  render () {

    const { dinosaur } = this.props;
    console.log(dinosaur)
    return (
      <div className={style.card}>
        <div><Link to={`dinosaur/${dinosaur.id}`}>{dinosaur.name}</Link></div>
        <div className={style.cardImgContainer}>
          <img src={dinosaur.imageUrl} role="presentation" />
        </div>
        <div className={style.toolbelt}>
          <span><i className="material-icons">settings</i></span>
          <span><i className="material-icons">star_border</i></span>
          <span><i className="material-icons">edit</i></span>
          <span><i className="material-icons">audiotrack</i></span>
        </div>
      </div>
    );
  }
}

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
