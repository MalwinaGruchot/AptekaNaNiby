/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const sumPrice = basket.reduce((acc, el) => {
      return acc + el.price * el.order;
    }, 0);
    setPrice(sumPrice);
  }, [basket]);

  return (
    <AppContext.Provider value={{ basket, setBasket, price }}>
      {children}
    </AppContext.Provider>
  );
}
