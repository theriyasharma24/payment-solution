import {
  GET_SHIPS,
  ADD_SHIP,
  DELETE_SHIP,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_SHIP,
  FILTER_SHIPS,
  CLEAR_FILTER,
  SHIP_ERROR,
  CLEAR_SHIPS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SHIPS:
      return {
        ...state,
        ships: action.payload,
        loading: false,
      };
    case ADD_SHIP:
      return {
        ...state,
        ships: [action.payload, ...state.ships],
        loading: false,
      };
    case UPDATE_SHIP:
      return {
        ...state,
        ships: state.ships.map((ship) =>
          ship._id === action.payload._id ? action.payload : ship
        ),
        loading: false,
      };
    case DELETE_SHIP:
      return {
        ...state,
        ships: state.ships.filter((ship) => ship._id !== action.payload),
        loading: false,
      };
    case CLEAR_SHIPS:
      return {
        ...state,
        ships: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_SHIPS:
      return {
        ...state,
        filtered: state.ships.filter((ship) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return ship.address.match(regex) || ship.pincode.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case SHIP_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
