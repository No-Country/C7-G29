import { deletePhoto } from "../../redux/actions/photosActions";
import { useDispatch } from "react-redux";

export default function Home({ x }) {
  const dispatch = useDispatch();

  const download = (e) => {
    fetch(x.url, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      {x.pay ? null : (
        <button onClick={() => download()}>Click to download</button>
      )}
    </div>
  );
}
