import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
const CartContext = createContext();

const initialState = {
  cart: [],
  total: 0,
  amount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const addCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  const values = {
    ...state,
    clearCart,
    addCart,
    deleteItem,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
