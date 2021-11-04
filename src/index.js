import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

import './styles.scss';

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

ReactDOM.render(
  <Root initialState={{ friends }} />,
  document.querySelector('#root')
);
