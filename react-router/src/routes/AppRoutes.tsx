import { Route, Routes } from "react-router";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Products } from "../pages/Products";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
