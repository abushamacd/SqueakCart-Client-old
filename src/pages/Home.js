import React from "react";
import Banner from "../sections/Banner";
import Services from "../sections/Services";
import Catagories from "../sections/Catagories";
import Brands from "../sections/Brands";
import Blogs from "../sections/Blogs";
import FeaturedCollection from "../sections/FeaturedCollection";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="body_wrapper md:px-[50px] p-[20px]">
        <Services />
        <Catagories />
        <Brands />
        <FeaturedCollection />
        <Blogs />
      </div>
    </>
  );
};

export default Home;
