import React from 'react';
import { connect } from 'react-redux';

import { removeFriend, setAsFavorite, unfavorite } from '../../state/actions';

import starIcon from '../../assets/icons/star.svg';
import starFilledIcon from '../../assets/icons/star-filled.svg';
import trashIcon from '../../assets/icons/trash.svg';
import './ListItem.scss';

const ListItem = ({ friend, removeFriend, setAsFavorite, unfavorite }) => {
  const onFavoriteButtonClick = () => {
    if (friend.isFavorite) return unfavorite(friend.name);
    return setAsFavorite(friend.name);
  };

  return (
    <div className="list-item">
      <div className="info">
        <div className="name">{friend.name}</div>
        <div className="description">is your friend</div>
      </div>
      <div className="controls">
        <button className="btn-fav btn" onClick={onFavoriteButtonClick}>
          {friend.isFavorite ? (
            <img src={starFilledIcon} className="btn-icon" alt="favorite" />
          ) : (
            <img src={starIcon} className="btn-icon" alt="favorite" />
          )}
        </button>
        <button
          className="btn-delete btn"
          onClick={() => removeFriend(friend.name)}
        >
          <img src={trashIcon} className="btn-icon" alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default connect(null, { removeFriend, setAsFavorite, unfavorite })(
  ListItem
);
