//cart içeriği için useReducer kullanılabilir
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem.js";
function Cart() {
  const { cart } = useCart();

  if (cart.length < 1) {
    return <h1>There is no item in the bag.</h1>;
  }
  return (
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
}
export default Cart;
