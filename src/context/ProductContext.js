import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const URL = "https://course-api.com/react-useReducer-cart-project ";
  // dummyjson üzerinden api alinabilir

  const [products, setProducts] = useState([]);

  // fetch işlemi axios kütüphanesi ile yapılabilir.
  const fetchData = async () => {
    const resp = await fetch(URL);
    const data = await resp.json();
    setProducts(data);
  };

  // fetch işlemi esnasında kullanıcıya yükleme ekranı göstermek için state oluşturulabilir.
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
