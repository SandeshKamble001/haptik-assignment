const searchFriends = (searchTerm, friends) => {
  return friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default searchFriends;
