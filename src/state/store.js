import { createStore } from 'redux';
import reducer from './reducers';

export const store = createStore(reducer, {});
export const getStoreWithInitialState = (initialState) =>
  createStore(reducer, initialState);
