import {
  ADD_FRIEND,
  REMOVE_FRIEND,
  SET_AS_FAVORITE,
  UNFAVORITE,
} from './types';
import { addFriend, removeFriend, setAsFavorite, unfavorite } from './index';

describe('addFriend', () => {
  let action;

  beforeEach(() => {
    action = addFriend('Rahul Sharma');
  });

  it('has correct action type', () => {
    expect(action.type).toEqual(ADD_FRIEND);
  });

  it('has correct payload', () => {
    expect(action.payload).toEqual('Rahul Sharma');
  });
});

describe('removeFriend', () => {
  let action;

  beforeEach(() => {
    action = removeFriend('Rahul Sharma');
  });

  it('has correct action type', () => {
    expect(action.type).toEqual(REMOVE_FRIEND);
  });

  it('has correct payload', () => {
    expect(action.payload).toEqual('Rahul Sharma');
  });
});

describe('setAsFavorite', () => {
  let action;

  beforeEach(() => {
    action = setAsFavorite('Rahul Sharma');
  });

  it('has correct action type', () => {
    expect(action.type).toEqual(SET_AS_FAVORITE);
  });

  it('has correct payload', () => {
    expect(action.payload).toEqual('Rahul Sharma');
  });
});

describe('unfavorite', () => {
  let action;

  beforeEach(() => {
    action = unfavorite('Rahul Sharma');
  });

  it('has correct action type', () => {
    expect(action.type).toEqual(UNFAVORITE);
  });

  it('has correct payload', () => {
    expect(action.payload).toEqual('Rahul Sharma');
  });
});
