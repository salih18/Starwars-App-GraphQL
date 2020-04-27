import { FETCH_ALL_MOVIES } from "../actions/types";

const initialState = {
  films: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_MOVIES:
      return {
        films: [...state.films, payload],
        loading: false,
      };
    default:
      return state;
  }
}
