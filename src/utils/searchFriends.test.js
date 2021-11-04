import searchFriends from './searchFriends';

it('returns filtered list of friends', () => {
  const friends = [
    {
      name: 'Rahul Gupta',
      isFavorite: false,
    },
    {
      name: 'Shivangi Sharma',
      isFavorite: true,
    },
    {
      name: 'Akash Singh',
      isFavorite: true,
    },
  ];

  const expectedResult = [
    {
      name: 'Akash Singh',
      isFavorite: true,
    },
  ];

  const filteredList = searchFriends('akash', friends);

  expect(filteredList).toEqual(expectedResult);
});
