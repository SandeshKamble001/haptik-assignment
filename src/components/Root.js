import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import { getStoreWithInitialState } from '../state/store';

const Root = ({ initialState }) => (
  <Provider store={getStoreWithInitialState(initialState)}>
    <App />
  </Provider>
);

export default Root;
