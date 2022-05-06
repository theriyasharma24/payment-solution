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

  const [state, dispatch] = useReducer;