import React from 'react';
import { shallow } from 'enzyme';

import TitleBar from './TitleBar';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<TitleBar />);
});

it('contains title', () => {
  expect(wrapped.find('.title-text').length).toEqual(1);
});

it('shows correct title', () => {
  expect(wrapped.find('.title-text').text()).toEqual('Friends List');
});
