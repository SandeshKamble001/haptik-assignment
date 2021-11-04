import React from 'react';
import { shallow } from 'enzyme';

import List from './List';
import ListItem from './ListItem';

const friends = [
  {
    name: 'Akash Gupta',
    isFavorite: false,
  },
  {
    name: 'Shivangi Sharma',
    isFavorite: true,
  },
];

let wrapped;

beforeEach(() => {
  wrapped = shallow(<List friends={friends} />);
});

it('renders one ListItem per friend', () => {
  expect(wrapped.find(ListItem).length).toEqual(friends.length);
});
