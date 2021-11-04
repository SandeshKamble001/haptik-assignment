import {
  ADD_FRIEND,
  REMOVE_FRIEND,
  SET_AS_FAVORITE,
  UNFAVORITE,
} from './types';

export const addFriend = (name) => ({
  type: ADD_FRIEND,
  payload: name,
});

export const removeFriend = (name) => ({
  type: REMOVE_FRIEND,
  payload: name,
});

export const setAsFavorite = (name) => ({
  type: SET_AS_FAVORITE,
  payload: name,
});

export const unfavorite = (name) => ({
  type: UNFAVORITE,
  payload: name,
});
