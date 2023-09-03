import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  tempUnit: "celcius",
  city: "mumbai",
  data: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        tempUnit: action.tempUnit,
        city: action.city,
        data: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        ...state,
        error: "*Please enter valid place",
      };
    default:
      return state;
  }
};

function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=eeb723d55d594056a3a165917232508&q=${state.city}&days=8&aqi=yes`
      )
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.data,
          city: "mumbai",
          tempUnit: "celcius",
        });
      });
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
