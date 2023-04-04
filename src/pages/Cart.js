//cart içeriği için useReducer kullanılabilir
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem.js";
function Cart() {
  const { clearCart, cart } = useCart();

  if (cart.length < 1) {
    return (
      <div className="cart-page">
        <h1>Your Cart is Empty</h1>
      </div>
    );
  }
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <h3>Total Price: $555</h3>
      <button className="btn-clear" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}
export default Cart;
