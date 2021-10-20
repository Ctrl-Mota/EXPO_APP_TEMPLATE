import React from "react";
import { DECREASE, INCREASE } from "./types";

export const initialState = {
  coin: 0
}
export const coinReducer = (state, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, coin: state.coin + action.payload };
    case DECREASE:
      if (state.coin === 0) return state;
      return { ...state, coin: state.coin - action.payload };
    default:
      return state
  }
};
export const StateContext = React.createContext();
export const DispatchContext = React.createContext();


