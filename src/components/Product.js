import { useCart } from "../context/CartContext";
import { toast } from 'react-toastify';

function Product({ product }) {
  const { addCart } = useCart();

  const showToastMessage = () => {
    toast.info('Added to cart!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
};

  return (
    <div className="product">
      <div className="product-img">
        <img src={product.img} alt="" />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="bottom">
          <span className="price">${product.price}</span>
          <button
            onClick={() => {
              showToastMessage();
              addCart(product, product.id);
            }}
          >
            Add to cart
          </button>

           
        </div>
      </div>
    </div>
    
  );
}
export default Product;
