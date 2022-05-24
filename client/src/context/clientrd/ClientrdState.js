import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import ClientrdContext from './clientrdContext';
import clientrdReducer from './clientrdReducer';
import AuthContext from '../auth/authContext';

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

const ClientrdState = (props) => {
    const initialState = {
        clientrds: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(clientrdReducer, initialState);
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    const getClientrds = async () => {
        try {
            const res = await axios.get('/api/clientrd');

            dispatch({
                type: GET_CLIENTRDS,
                payload: res.data
            });
            // return res.data;
        } catch (err) {
            // dispatch({
            //     type: CLIENTRD_ERROR,
            //     payload: err.response.msg
            // });
            return err;
        }
    };

    // Add Contact
    const addClientrd = async (clientrd) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post(
                `/api/clientrd/${user?._id}`,
                clientrd,
                config
            );
            dispatch({
                type: ADD_CLIENTRD,
                payload: ress?.data
            });
        } catch (err) {
            dispatch({
                type: CLIENTRD_ERROR,
                payload: err?.response?.msg
            });
        }
    };

    // Delete Contact
    const deleteClientrd = async (id) => {
        try {
            await axios.delete(`/api/clientrd/${id}`);

            dispatch({
                type: DELETE_CLIENTRD,
                payload: id
            });
        } catch (err) {
            dispatch({
                type: CLIENTRD_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Update Contact
    const updateClientrd = async (clientrd) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.put(
                `/api/clientrd/${clientrd._id}`,
                clientrd,
                config
            );

            dispatch({
                type: UPDATE_CLIENTRD,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CLIENTRD_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Clear Contacts
    const clearClientrds = () => {
        dispatch({ type: CLEAR_CLIENTRDS });
    };

    // Set Current Contact
    const setCurrent = (clientrd) => {
        dispatch({ type: SET_CURRENT, payload: clientrd });
    };

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Filter Contacts
    const filterClientrds = (text) => {
        dispatch({ type: FILTER_CLIENTRDS, payload: text });
    };

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <ClientrdContext.Provider
            value={{
                clientrds: state.clientrds,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                addClientrd,
                deleteClientrd,
                setCurrent,
                clearCurrent,
                updateClientrd,
                filterClientrds,
                clearFilter,
                getClientrds,
                clearClientrds
            }}
        >
            {props.children}
        </ClientrdContext.Provider>
    );
};

export default ClientrdState;
