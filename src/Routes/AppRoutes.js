import { Route, Routes } from "react-router";

import { Suspense } from "react";
import Home from "../Screens/Home/Home";
import Main from "../Screens/Home/Main/Main";
import Login from "../Screens/Login/Login";
import Shop from "../Screens/Shop/Shop";
import Checkout from "../Screens/Checkout/Checkout";
import Cart from "../Screens/Cart/Cart";
import Contact from "../Screens/Contact/Contact";
import SingleProduct from "../SingleProduct/SingleProduct";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route element={<PublicRoute />}> */}
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop/single-product/:id" element={<SingleProduct />} />
          {/* </Route> */}

          <Route element={<PrivateRoute />}>
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
