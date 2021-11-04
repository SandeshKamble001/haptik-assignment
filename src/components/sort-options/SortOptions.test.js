import React from 'react';
import { mount } from 'enzyme';

import SortOptions from './SortOptions';

let wrapped;

const options = [
  { label: 'testLabel', value: 'testValue' },
  { label: 'testLabel1', value: 'testValue1' },
];

beforeEach(() => {
  wrapped = mount(
    <SortOptions options={options} onChange={() => {}} sortField="name" />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('renders options as radio buttons', () => {
  expect(wrapped.find('input').length).toEqual(options.length);
});

it('selects option on radio button click', () => {
  wrapped
    .find('input[type="radio"][value="testValue1"]')
    .simulate('change', { currentTarget: { value: 'testValue1' } });

  expect(
    wrapped.find('input[type="radio"][value="testValue1"]').prop('checked')
  ).toEqual(true);

  expect(
    wrapped.find('input[type="radio"][value="testValue"]').prop('checked')
  ).toEqual(false);
});
