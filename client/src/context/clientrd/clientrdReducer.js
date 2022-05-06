<<<<<<< HEAD
import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload];
        case REMOVE_ALERT:
            return state.filter((alert) => alert.id !== action.payload);
=======
import {
    GET_CLIENTRDS,
    ADD_CLIENTRD,
    DELETE_CLIENTRD,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CLIENTRD,
    FILTER_CLIENTRDS,
    CLEAR_FILTER,
    CLIENTRD_ERROR,
    CLEAR_CLIENTRDS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_CLIENTRDS:
            return {
                ...state,
                clientrds: action.payload,
                loading: false
            };
        case ADD_CLIENTRD:
            return {
                ...state,
                clientrds: [action.payload, ...state.clientrds],
                loading: false
            };
        case UPDATE_CLIENTRD:
            return {
                ...state,
                clientrds: state.clientrds.map((clientrd) =>
                    clientrd._id === action.payload._id
                        ? action.payload
                        : clientrd
                ),
                loading: false
            };
        case DELETE_CLIENTRD:
            return {
                ...state,
                clientrds: state.clientrds.filter(
                    (clientrd) => clientrd._id !== action.payload
                ),
                loading: false
            };
        case CLEAR_CLIENTRDS:
            return {
                ...state,
                clientrds: null,
                filtered: null,
                error: null,
                current: null
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case FILTER_CLIENTRDS:
            return {
                ...state,
                filtered: state.clientrds.filter((clientrd) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return (
                        clientrd.address.match(regex) ||
                        clientrd.pincode.match(regex)
                    );
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case CLIENTRD_ERROR:
            return {
                ...state,
                error: action.payload
            };
>>>>>>> 2e659d31ddfde8c64f50c2e80ca7dbe9e68575af
        default:
            return state;
    }
};
