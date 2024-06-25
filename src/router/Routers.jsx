import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import App from "../App";
import Basket from "../media/Basket";
import Chosen from "../media/Chosen";
import Account from "../media/Account";
import Category from "../kotigoriya/Brand";
import Products from "../pages/products";
import Checkout from "../pages/Checkout";
import ProductList from "../pages/Category";
import Brand from "../kotigoriya/Brand";

const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/chosen" element={<Chosen />} />
        <Route path="/account" element={<Account />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/products/:id" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default Routers;
