import {
  ADD_FRIEND,
  REMOVE_FRIEND,
  SET_AS_FAVORITE,
  UNFAVORITE,
} from '../actions/types';
import friendsReducer from './friendsReducer';

const initialState = [
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

it('adds friend on action add_friend', () => {
  const action = {
    type: ADD_FRIEND,
    payload: 'Alex Ross',
  };
  const newState = friendsReducer(initialState, action);

  expect(newState).toEqual([
    ...initialState,
    {
      name: 'Alex Ross',
      isFavorite: false,
    },
  ]);
});

it('returns same state for action add_friend with existing friend', () => {
  const action = {
    type: ADD_FRIEND,
    payload: 'Akash Singh',
  };
  const newState = friendsReducer(initialState, action);

  expect(newState).toEqual(initialState);
});

it('removes friend on action remove_friend', () => {
  const action = {
    type: REMOVE_FRIEND,
    payload: 'Akash Singh',
  };

  const expectedState = [
    {
      name: 'Rahul Gupta',
      isFavorite: false,
    },
    {
      name: 'Shivangi Sharma',
      isFavorite: true,
    },
  ];

  const newState = friendsReducer(initialState, action);

  expect(newState).toEqual(expectedState);
});

it('returns same state for action remove_friend with non-existing friend', () => {
  const action = {
    type: REMOVE_FRIEND,
    payload: 'Alex Ross',
  };
  const newState = friendsReducer(initialState, action);

  expect(newState).toEqual(initialState);
});

it('sets frind as favourite on action set_as_favorite', () => {
  const action = {
    type: SET_AS_FAVORITE,
    payload: 'Rahul Gupta',
  };

  const expectedState = [
    {
      name: 'Rahul Gupta',
      isFavorite: true,
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

  const newState = friendsReducer(initialState, action);

  expect(newState).toEqual(expectedState);
});

it('unfavorites a frind on action unfavorite', () => {
  const action = {
    type: UNFAVORITE,
    payload: 'Shivangi Sharma',
  };

  const expectedState = [
    {
      name: 'Rahul Gupta',
      isFavorite: false,
    },
    {
      name: 'Shivangi Sharma',
      isFavorite: false,
    },
    {
      name: 'Akash Singh',
      isFavorite: true,
    },
  ];

  const newState = friendsReducer(initialState, action);

  expect(newState).toEqual(expectedState);
});

it('returns default state on unknown action', () => {
  const action = {
    type: 'unknown type',
    payload: 'Akash Singh',
  };
  const newState = friendsReducer(initialState, action);

  expect(newState).toEqual(initialState);
});
