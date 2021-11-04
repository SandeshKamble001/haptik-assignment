import React from 'react';

import ListItem from './ListItem';

const renderFriends = (friends) =>
  friends.map((friend) => <ListItem key={friend.name} friend={friend} />);

const List = ({ friends }) => {
  return <div>{renderFriends(friends)}</div>;
};

export default List;
