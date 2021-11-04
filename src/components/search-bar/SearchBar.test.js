import React from 'react';
import { mount } from 'enzyme';

import SearchBar from './SearchBar';

let wrapped;

beforeEach(() => {
  wrapped = mount(<SearchBar />);
});

afterAll(() => {
  wrapped.unmount();
});

it('has a form with input field', () => {
  expect(wrapped.find('form').length).toEqual(1);
  expect(wrapped.find('form').find('input').length).toEqual(1);
});

describe('input field', () => {
  const testText = 'test text';
  beforeEach(() => {
    wrapped
      .find('form')
      .find('input')
      .simulate('change', { target: { value: testText } });
  });

  it('allows user to fill in text in input field', () => {
    wrapped.update();

    expect(wrapped.find('form').find('input').prop('value')).toEqual(testText);
  });
});
