import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { RiShoppingBasketLine } from "react-icons/ri";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="nav">
        <ul>
          <li onClick={() => navigate("/")}> Home</li>
          <li onClick={() => navigate("/cart")}>
            <RiShoppingBasketLine />
          </li>
        </ul>
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* react toastify ile gelen bileşen */}
      <ToastContainer className={"toast"}/>
    </div>
  );
}

export default App;
