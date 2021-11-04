import sortFriends from './sortFriends';

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

it('sorts frinds by name for sortfield name', () => {
  const expectedResult = [
    {
      name: 'Akash Singh',
      isFavorite: true,
    },
    {
      name: 'Rahul Gupta',
      isFavorite: false,
    },
    {
      name: 'Shivangi Sharma',
      isFavorite: true,
    },
  ];

  const result = sortFriends('name', friends);

  expect(result).toEqual(expectedResult);
});

it('sorts frinds by favorite and then name for sortfield isFavorite', () => {
  const expectedResult = [
    {
      name: 'Akash Singh',
      isFavorite: true,
    },
    {
      name: 'Shivangi Sharma',
      isFavorite: true,
    },
    {
      name: 'Rahul Gupta',
      isFavorite: false,
    },
  ];

  const result = sortFriends('isFavorite', friends);

  expect(result).toEqual(expectedResult);
});
