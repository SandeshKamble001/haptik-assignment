import React from 'react';
import { shallow } from 'enzyme';

import TitleBar from './TitleBar';

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <TitleBar>
      <button>Search</button>
    </TitleBar>
  );
});

it('contains title', () => {
  expect(wrapped.find('.title-text').length).toEqual(1);
});

it('shows correct title', () => {
  expect(wrapped.find('.title-text').text()).toEqual('Friends List');
});

it('shows button passed as chiild', () => {
  expect(wrapped.find('button').length).toEqual(1);
});
