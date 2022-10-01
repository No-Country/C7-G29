import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Publish from "./pages/Publish";
import Cart from "./pages/Cart";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { localStorageCart } from "./redux/slices/cartSlice";
import { fillUserData } from "./redux/slices/userSlice";
import LogIn from "./pages/LogIn/LogIn";
import { useAuth0 } from "@auth0/auth0-react";
import Users from "./pages/Users/Users";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(localStorageCart(JSON.parse(window.localStorage.getItem("cart"))));
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        dispatch(fillUserData(user));
      }
    }
  }, [isLoading, user, isAuthenticated, dispatch]);

  return (
    <div>
    {/*{isLoading ? "Cargando" : isAuthenticated ? "Logeado" : "Guest"}*/}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/publish" element={<Publish />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
