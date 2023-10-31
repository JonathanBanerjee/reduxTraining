import {
  DELETE_CHARACTER,
  LIKE_CHARACTER,
  SET_SEARCH_INPUT,
  SET_SIMPSONS,
} from "./types";

const initialState = { search: "" };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SIMPSONS: {
      const _state = { ...state };
      _state.simpsons = action.payload;
      return _state;
    }

    // case DELETE_CHARACTER: {
    //   const simpsons = [...state.simpsons];

    //   const index = simpsons.findIndex((item) => item.id === action.payload);

    //   simpsons.splice(index, 1);

    //   return { ...state, simpsons };
    // }

    case SET_SEARCH_INPUT: {
      return { ...state, search: action.payload };
    }

    case LIKE_CHARACTER: {
      const simpsons = [...state.simpsons];
      const index = simpsons.findIndex((item) => item.id === action.payload);
      simpsons[index].liked = !simpsons[index].liked;
      return { ...state, simpsons };
    }

    default:
      console.log(
        "Either the program just began, or you made a typo in the type"
      );
      return state;
  }
}
