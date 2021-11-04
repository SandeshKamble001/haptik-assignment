import React from 'react';

import './ListItem.scss';

const ListItem = ({ friend }) => {
  return (
    <div className="list-item">
      <div className="name">{friend.name}</div>
      <div className="description">is your friend</div>
    </div>
  );
};

export default ListItem;
