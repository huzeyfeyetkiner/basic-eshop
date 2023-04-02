import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="nav">
        <ul>
          <li onClick={() => navigate("/")}> Home</li>
          <li onClick={() => navigate("/cart")}>Cart</li>
        </ul>
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
