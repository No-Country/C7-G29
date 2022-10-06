import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions/photosActions";
import { cleanPhotos } from "../../redux/slices/photosSlice";

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.photos.photoDetails);
  useEffect(() => {
    dispatch(getDetails(id));
    return () => dispatch(cleanPhotos());
  }, [dispatch, id]);
  return <div>{details.title}</div>;
}
