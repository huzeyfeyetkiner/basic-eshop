import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const ProductContext = createContext();
// cart provider oluşturulacak
export const ProductProvider = ({ children }) => {
  const URL = "https://course-api.com/react-useReducer-cart-project ";

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios(URL);
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
