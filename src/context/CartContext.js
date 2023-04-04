import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
const CartContext = createContext();

const initialState = {
  cart: [],
  total: 0,
  amount: 0,
};

export const CartProvider = ({ children }) => {
  // cart için ucereducer kullanılabilir.

  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const addCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const values = {
    ...state,
    clearCart,
    addCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
