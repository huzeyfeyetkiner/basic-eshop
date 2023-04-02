function Product({ product, cart, setCart }) {
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.img} alt="" />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="bottom">
          <span className="price">${product.price}</span>
          <button onClick={() => setCart([...cart, product])}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;
