import { useEffect } from "react";
import { getAllPhotosData } from "../redux/actions/photosActions";
import { useDispatch, useSelector } from "react-redux";
import HomeCards from "../components/HomeCards/HomeCards";
import FilterCards from "../components/FilterCards/FilterCards";

export default function Home() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.allPhotosData);

  useEffect(() => {
    dispatch(getAllPhotosData());
  }, [dispatch]);

  return (
    <div>
      <FilterCards />
      {photos.map((x) => (
        <HomeCards x={x} key={x.id} />
      ))}
    </div>
  );
}
