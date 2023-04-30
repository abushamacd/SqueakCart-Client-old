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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="store" element={<Store />} />
            <Route path="compare" element={<CompareProducts />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
