import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import TitleBar from './title-bar/TitleBar';
import AddFriendForm from './add-friend-form/AddFriendForm';
import List from './list/List';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a title bar', () => {
  expect(wrapped.find(TitleBar).length).toEqual(1);
});

it('shows add friend form', () => {
  expect(wrapped.find(AddFriendForm).length).toEqual(1);
});

it('shows friend list', () => {
  expect(wrapped.find(List).length).toEqual(1);
});
