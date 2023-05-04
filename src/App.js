import React from "react";
import "./App.css";
import "./Responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Forget from "./pages/Forget";
import ChangePassword from "./pages/ChangePassword";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivecyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndCondition from "./pages/TermAndCondition";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Store />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare" element={<CompareProducts />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<SignIn />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="forget" element={<Forget />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="register" element={<SignUp />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faqs />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-condition" element={<TermAndCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
