
import React from 'react';

import style from './style';

const Card = (props) => (
  <div className={style.card}>
    <div>DINO</div>
    <div className={style.cardImg}>
      <img src="http://images.nationalgeographic.com/wpf/media-live/photos/000/007/cache/tyrannosaurus_791_600x450.jpg" />
    </div>
    <div className={style.toolbelt}>
      <span><i className="material-icons">settings</i></span>
      <span><i className="material-icons">star_border</i></span>
      <span><i className="material-icons">edit</i></span>
      <span><i className="material-icons">audiotrack</i></span>
    </div>
  </div>
);

// <i class="material-icons">star</i>

export default Card;
