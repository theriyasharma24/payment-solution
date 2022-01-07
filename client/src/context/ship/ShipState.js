import React, { useReducer } from "react";
import axios from "axios";
import ShipContext from "./shipContext";
import shipReducer from "./shipReducer";
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

const ShipState = (props) => {
  const initialState = {
    ships: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(shipReducer, initialState);

  // Get Contacts
  const getShips = async () => {
    try {
      const res = await axios.get("/api/ship");

      dispatch({
        type: GET_SHIPS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SHIP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Add Contact
  const addShip = async (ship) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/ship", ship, config);

      dispatch({
        type: ADD_SHIP,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SHIP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Delete Contact
  const deleteShip = async (id) => {
    try {
      await axios.delete(`/api/ship/${id}`);

      dispatch({
        type: DELETE_SHIP,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: SHIP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Update Contact
  const updateShip = async (ship) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/ship/${ship._id}`, ship, config);

      dispatch({
        type: UPDATE_SHIP,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SHIP_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Clear Contacts
  const clearShips = () => {
    dispatch({ type: CLEAR_SHIPS });
  };

  // Set Current Contact
  const setCurrent = (ship) => {
    dispatch({ type: SET_CURRENT, payload: ship });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Contacts
  const filterShips = (text) => {
    dispatch({ type: FILTER_SHIPS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ShipContext.Provider
      value={{
        ships: state.ships,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addShip,
        deleteShip,
        setCurrent,
        clearCurrent,
        updateShip,
        filterShips,
        clearFilter,
        getShips,
        clearShips,
      }}
    >
      {props.children}
    </ShipContext.Provider>
  );
};

export default ShipState;
