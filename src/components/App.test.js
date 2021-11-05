import React from 'react';
import { mount } from 'enzyme';

import Root from './Root';
import App from './App';
import TitleBar from './title-bar/TitleBar';
import AddFriendForm from './add-friend-form/AddFriendForm';
import List from './list/List';
import SearchBar from './search-bar/SearchBar';
import SortOptions from './sort-options/SortOptions';
import Paginator from './paginator/Paginator';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
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

describe('Menu button', () => {
  beforeEach(() => {
    wrapped.find('button.btn-menu').simulate('click');
    wrapped.update();
  });

  it('shows menu after open menu button click', () => {
    expect(wrapped.find(SearchBar).length).toEqual(1);
    expect(wrapped.find(SortOptions).length).toEqual(1);
  });

  it('changes open menu button to close menu on enabling menu', () => {
    expect(wrapped.find('button.btn-menu').find('img').prop('src')).toEqual(
      'cross.svg'
    );
  });

  it('hides menu bar after close menu button click', () => {
    wrapped.find('button.btn-menu').simulate('click');
    wrapped.update();
    expect(wrapped.find(SearchBar).length).toEqual(0);
    expect(wrapped.find(SortOptions).length).toEqual(0);
  });

  it('does not show paginator for less than 5 items', () => {
    expect(wrapped.find(Paginator).length).toEqual(0);
  });

  it('shows paginator for more than 4 items', () => {
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
      {
        name: 'Alex Ross',
        isFavorite: true,
      },
      {
        name: 'Chandler Bing',
        isFavorite: true,
      },
    ];
    const wrappedForPageinator = mount(
      <Root initialState={{ friends }}>
        <App />
      </Root>
    );
    expect(wrappedForPageinator.find(Paginator).length).toEqual(1);
    wrappedForPageinator.unmount();
  });
});
