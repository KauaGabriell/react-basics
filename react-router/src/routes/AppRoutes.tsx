import { Route, Routes } from "react-router";

import { Layout } from "../components/Layout/Layout";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
