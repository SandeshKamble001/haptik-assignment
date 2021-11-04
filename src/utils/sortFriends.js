const compareNames = (friend1, friend2) => {
  const nameA = friend1.name.toUpperCase();
  const nameB = friend2.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

const sortFriends = (sortField, friends) => {
  switch (sortField) {
    case 'name':
      return friends.sort(compareNames);
    case 'isFavorite':
      const favorites = friends.filter((friend) => friend.isFavorite);
      const nonFavorites = friends.filter((friend) => !friend.isFavorite);
      return [
        ...favorites.sort(compareNames),
        ...nonFavorites.sort(compareNames),
      ];
    default:
      return friends;
  }
};

export default sortFriends;
