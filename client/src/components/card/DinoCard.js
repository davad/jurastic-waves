
import React, { Component, PropTypes } from 'react';
import Relay from 'react-relay';
import { Link } from 'react-router';

import AddStarRatingMutation from './mutations/AddStarRatingMutation';
import style from './style';

class DinoCard extends Component {
  constructor(props) {
    super(props);

    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleStarClick() {
    const { dinosaur, viewer } = this.props;

    Relay.Store.commitUpdate(
      new AddStarRatingMutation({
        viewer,
        id: dinosaur.id,
        dinosaur,
        stars: dinosaur.stars
      })
    );
  }

  render() {
    const { dinosaur } = this.props;
    const { stars } = dinosaur;
    let starColor = { color: 'black' };

    if (stars === 0) {
      starColor.color = '#103498';
    } else if (stars > 0 && stars < 5) {
      starColor.color = '#3C6F40';
    } else if (stars > 6 && stars < 11) {
      starColor.color = 'orange';
    } else if (stars > 12) {
      starColor.color = '#8B3300';
    }

    return (
      <div className={style.card}>
        <div>
          <Link to={`/${dinosaur.id}`}>{dinosaur.name}</Link>
        </div>
        <div className={style.cardImgContainer}>
          <img src={dinosaur.imageUrl} role="presentation" />
        </div>
        <div className={style.toolbelt}>
          <span>
            <i className="material-icons">settings</i>
          </span>
          <span onClick={this.handleStarClick}>
            <i className="material-icons" style={starColor}>grade</i>
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
  dinosaur: PropTypes.object,
  viewer: PropTypes.object
};

// <i class="material-icons">star</i>
export default Relay.createContainer(DinoCard, {
  fragments: {
    dinosaur: () => Relay.QL`
      fragment on Dinosaur {
        id,
        name,
        stars,
        imageUrl,
        ${AddStarRatingMutation.getFragment('dinosaur')}
      }
    `
  },
});
