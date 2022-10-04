import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfileDetails } from "../../redux/actions/photosActions";
import { cleanProfileDetails } from "../../redux/slices/profileSlice";

export default function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.profile.userData);

  useEffect(() => {
    dispatch(getProfileDetails(id));
    return () => dispatch(cleanProfileDetails());
  }, [dispatch, id]);
  return <div>{details.name}</div>;
}
