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
import DBLayout from "./components/DBLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Enquery from "./pages/dashboard/Enquery";
import BlogList from "./pages/dashboard/BlogList";
import BlogCat from "./pages/dashboard/BlogCat";
import OrderList from "./pages/dashboard/OrderList";
import CatList from "./pages/dashboard/CatList";
import BrandList from "./pages/dashboard/BrandList";
import Customer from "./pages/dashboard/Customer";
import ProductList from "./pages/dashboard/ProductList";
import AddProduct from "./pages/dashboard/AddProduct";
import AddBlog from "./pages/dashboard/AddBlog";
import Color from "./pages/dashboard/Color";
import User from "./pages/dashboard/User";

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
            <Route path="register" element={<SignUp />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="forget" element={<Forget />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<Faqs />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-condition" element={<TermAndCondition />} />
          </Route>
          <Route path="/admin" element={<DBLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="enquery" element={<Enquery />} />
            <Route path="blog-list" element={<BlogList />} />
            <Route path="blog-cat" element={<BlogCat />} />
            <Route path="order" element={<OrderList />} />
            <Route path="category" element={<CatList />} />
            <Route path="color" element={<Color />} />
            <Route path="brand" element={<BrandList />} />
            <Route path="user-list" element={<User />} />
            <Route path="customer" element={<Customer />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="add-blog" element={<AddBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
