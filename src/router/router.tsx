import { Routes, Route, useLocation } from "react-router-dom";
import {
  HomePage,
  PageNotFound,
  LatestNewsPage,
  PopularNewsPage,
} from "../pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateLocation } from "../redux/router/router.actions";

export const Router = () => {
  let location = useLocation();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLocation(location));
  }, [dispatch, location]);

  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/news/latest"} element={<LatestNewsPage />} />
      <Route path={"/news/popular"} element={<PopularNewsPage />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
};
