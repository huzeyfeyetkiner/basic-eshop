import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="left-side">
        <img src={item.img} alt="" />
        <div className="info">
          <h4>{item.title}</h4>
          <span>${item.price}</span>
          <button className="remove-btn">remove</button>
        </div>
      </div>
      <div className="right-side">
        <button>
          <AiFillCaretUp />
        </button>
        <span>1</span>
        <button>
          <AiFillCaretDown />{" "}
        </button>
      </div>
    </div>
  );
}
export default CartItem;
