import {
  ADD_FRIEND,
  REMOVE_FRIEND,
  SET_AS_FAVORITE,
  UNFAVORITE,
} from '../actions/types';

const friendsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FRIEND:
      if (state.findIndex((s) => s.name === action.payload) > 0) return state;
      return [
        ...state,
        {
          name: action.payload,
          isFavorite: false,
        },
      ];
    case REMOVE_FRIEND:
      return state.filter((s) => s.name !== action.payload);
    case SET_AS_FAVORITE:
      const index = state.findIndex((s) => s.name === action.payload);

      if (index < 0) return state;

      return [
        ...state.slice(0, index),
        {
          ...state[index],
          isFavorite: true,
        },
        ...state.slice(index + 1),
      ];
    case UNFAVORITE:
      const indexToUnfavrite = state.findIndex(
        (s) => s.name === action.payload
      );

      if (indexToUnfavrite < 0) return state;

      return [
        ...state.slice(0, indexToUnfavrite),
        {
          ...state[indexToUnfavrite],
          isFavorite: false,
        },
        ...state.slice(indexToUnfavrite + 1),
      ];
    default:
      return state;
  }
};

export default friendsReducer;
