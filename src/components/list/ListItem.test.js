import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './ListItem';

const friend = { name: 'Rahul Gupta' };
let wrapped;

beforeEach(() => {
  wrapped = shallow(<ListItem friend={friend} />);
});

it('shows name passed from property.', () => {
  expect(wrapped.find('.name').length).toEqual(1);
  expect(wrapped.find('.name').text()).toEqual(friend.name);
});
