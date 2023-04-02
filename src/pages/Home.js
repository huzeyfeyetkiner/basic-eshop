import { useProduct } from "../context/ProductContext";
import Product from "../components/Product.js";
function Home() {
  const { products } = useProduct();

  return (
    <div className="home">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
export default Home;
