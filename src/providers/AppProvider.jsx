/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [basket, setBasket] = useState([]);

  return (
    <AppContext.Provider value={{ basket, setBasket }}>
      {children}
    </AppContext.Provider>
  );
}
