import { deletePhoto } from "../../redux/actions/photosActions";
import { useDispatch } from "react-redux";

export default function Home({ x }) {
  const dispatch = useDispatch();
  return (
    <div>
      <img
        id={x._id}
        src={x.url}
        style={{ width: "250px", height: "250px" }}
        alt="one of the photos"
      ></img>
      <button onClick={() => dispatch(deletePhoto(x._id))}>Delete</button>
      <div>
        <h3>{x.title}</h3> {x.pay ? <p>{x.price} $</p> : null}
      </div>
    </div>
  );
}
