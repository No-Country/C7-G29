import { useEffect } from "react";
import { getAllPhotosData } from "../redux/actions/photosActions";
import { useDispatch, useSelector } from "react-redux";
import HomeCards from "../components/HomeCards/HomeCards";
import Header from "../components/Header/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.filterPhotosData);
  useEffect(() => {
    dispatch(getAllPhotosData());
  }, [dispatch]);
  const { logout } = useAuth0();
  return (
    <div>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      <Link to="/publish">Publicar</Link>
      <Header />
      {photos.length > 0
        ? photos.map((x) => <HomeCards x={x} key={x._id} />)
        : null}
    </div>
  );
}
