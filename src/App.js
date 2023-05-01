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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="store" element={<Store />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare" element={<CompareProducts />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<SignIn />} />
            <Route path="forget" element={<Forget />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="register" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
