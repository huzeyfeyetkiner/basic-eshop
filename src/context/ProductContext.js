import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const URL = "https://course-api.com/react-useReducer-cart-project ";

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(URL);
    const data = await resp.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const values = {
    products,
    setProducts,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
