import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Publish from "./pages/Publish";
import Cart from "./pages/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { localStorageCart } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(localStorageCart(JSON.parse(window.localStorage.getItem("cart"))));
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/publish" element={<Publish />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
