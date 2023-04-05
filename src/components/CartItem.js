import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { deleteItem, increase, decrease } = useCart();

  return (
    <div className="cart-item">
      <div className="left-side">
        <img src={item.img} alt="" />
        <div className="info">
          <h4>{item.title}</h4>
          <span>${item.price}</span>
          <button className="remove-btn" onClick={() => deleteItem(item.id)}>
            remove
          </button>
        </div>
      </div>
      <div className="right-side">
        <button onClick={() => increase(item.id)}>
          <AiFillCaretUp />
        </button>
        <span>{item.amount}</span>
        <button onClick={() => decrease(item.id)}>
          <AiFillCaretDown />{" "}
        </button>
      </div>
    </div>
  );
}
export default CartItem;
