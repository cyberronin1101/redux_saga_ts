import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, PageNotFound } from "../pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);
