import { useProduct } from "../context/ProductContext";
import Product from "../components/Product.js";
import { useCart } from "../context/CartContext";

function Home() {
  const { products } = useProduct();
  const { cart, setCart } = useCart();
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
            cart={cart}
            setCart={setCart}
          />
        );
      })}
    </div>
  );
}
export default Home;
