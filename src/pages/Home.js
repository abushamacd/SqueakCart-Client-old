import React from "react";
import Banner from "../sections/Banner";
import Services from "../sections/Services";
import Catagories from "../sections/Catagories";
import Brands from "../sections/Brands";
import Blogs from "../sections/Blogs";
import FeaturedCollection from "../sections/FeaturedCollection";
import SpecialProducts from "../sections/SpecialProducts";
import PopularCollection from "../sections/PopularCollection";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="body_wrapper md:px-[50px] p-[20px]">
        <Services />
        <Catagories />
        <Brands />
        <FeaturedCollection />
        <SpecialProducts />
        <PopularCollection />
        <Blogs />
      </div>
    </>
  );
};

export default Home;
