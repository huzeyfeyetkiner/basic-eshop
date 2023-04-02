function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="left-side">
        <img src={item.img} alt="" />
        <div className="info">
          <h4>{item.title}</h4>
          <span>{item.price}</span>
          <button className="remove-btn">remove</button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
