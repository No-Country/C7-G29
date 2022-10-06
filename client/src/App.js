import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Publish from "./pages/Publish/Publish"
import Cart from "./pages/Cart";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { localStorageCart } from "./redux/slices/cartSlice";
import LogIn from "./pages/LogIn/LogIn";
import Users from "./pages/Users/Users";
import Details from "./pages/Details/Details";
import Profile from "./pages/Profile/Profile";
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
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
