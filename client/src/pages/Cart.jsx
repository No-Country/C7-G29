import { useDispatch, useSelector } from "react-redux";
import { cleanCart, cleanItem } from "../redux/slices/cartSlice";
import { buyItems } from "../redux/actions/photosActions";
import { useEffect, useState } from "react";
export default function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const [state, setState] = useState("");
  useEffect(() => {
    async function t() {
      const a = await buyItems(cart);
      setState(a);
    }
    t();
  }, [cart]);
  console.log(state);

  return (
    <div>
      {cart.length > 0
        ? cart.map((x) => (
            <div key={x._id}>
              {x.title}: Aca irian el resto de items{" "}
              <button onClick={() => dispatch(cleanItem(x._id))}>
                Borrar Item
              </button>
            </div>
          ))
        : "Carro vacio"}
      <button onClick={() => dispatch(cleanCart())}>Borrar Carro</button>
      <a href={state}>Comprar</a>
    </div>
  );
}
