import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function CartItem({ item }) {
  // cart item içerisindeki amount miktarını arttırabilmek için kullanılan state
  const [tempAmount, setTempAmount] = useState(item.amount);

  useEffect(() => {
    console.log(tempAmount * item.price);
  }, [tempAmount, item.price]);

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
        <button
          onClick={() => {
            item.amount += 1;
            setTempAmount(item.amount);
          }}
        >
          <AiFillCaretUp />
        </button>
        <span>{tempAmount}</span>
        <button
          onClick={() => {
            // 0 altı amoun için düzenleme yapılacak
            item.amount -= 1;
            setTempAmount(item.amount);
          }}
        >
          <AiFillCaretDown />{" "}
        </button>
      </div>
    </div>
  );
}
export default CartItem;
