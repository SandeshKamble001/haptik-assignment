import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './ListItem';

const friend = { name: 'Rahul Gupta', isFavorite: false };
const favFriend = { name: 'Akash Singh', isFavorite: true };

let wrapped;

beforeEach(() => {
  wrapped = shallow(<ListItem friend={friend} />);
});

it('shows name passed from property.', () => {
  expect(wrapped.find('.name').length).toEqual(1);
  expect(wrapped.find('.name').text()).toEqual(friend.name);
});

it('has favorite and delete buttons', () => {
  expect(wrapped.find('button.btn-fav').length).toEqual(1);
  expect(wrapped.find('button.btn-delete').length).toEqual(1);
});

it('changes favorite icon to filled according to isFavorite value', () => {
  expect(wrapped.find('button.btn-fav').find('img').prop('src')).toEqual(
    'star.svg'
  );

  const favWrapped = shallow(<ListItem friend={favFriend} />);
  expect(favWrapped.find('button.btn-fav').find('img').prop('src')).toEqual(
    'star-filled.svg'
  );
});
