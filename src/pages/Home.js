import { useProduct } from "../context/ProductContext";
import Product from "../components/Product.js";
function Home() {
  const { products, setCartItems } = useProduct();

  if (products.length < 1) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    // banner eklenebilir
    <div className="home">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            setCartItems={setCartItems}
          />
        );
      })}
    </div>
  );
}
export default Home;
