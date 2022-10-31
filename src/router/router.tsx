import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  PageNotFound,
  LatestNewsPage,
  PopularNewsPage,
} from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/news/latest"} element={<LatestNewsPage />} />
        <Route path={"/news/popular"} element={<PopularNewsPage />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
