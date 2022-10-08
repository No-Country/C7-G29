import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Publish from "./pages/Publish/Publish";
import Cart from "./pages/Cart";
import Register from "./pages/Register/Register";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { localStorageCart } from "./redux/slices/cartSlice";
import LogIn from "./pages/LogIn/LogIn";
import Details from "./pages/Details/Details";
import Profile from "./pages/Profile/Profile";
import PostBuy from "./pages/PostBuy/PostBuy";
import { userCurrentAction } from "./redux/actions/photosActions";
import { logout, login } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(localStorageCart(JSON.parse(window.localStorage.getItem("cart"))));
  }, [dispatch]);

  const isLogged = useSelector((state) => state.authSlice.isLogged);

  useEffect(() => {
    async function t() {
      const a = await dispatch(userCurrentAction());
      if (a.payload.message === "No token provided") {
        dispatch(logout());
      } else {
        dispatch(login());
      }
    }
    t();
  }, [isLogged, dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>

        {isLogged ? (
          <>
            <Route path="/publish" element={<Publish />}></Route>
            <Route path="/postBuy" element={<PostBuy />}></Route>
          </>
        ) : (
          <>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/publish" element={<LogIn />}></Route>
          </>
        )}
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
