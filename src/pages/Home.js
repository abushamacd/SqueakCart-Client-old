import React from "react";
import Banner from "../sections/Banner";
import Services from "../sections/Services";
import Catagories from "../sections/Catagories";
import Brands from "../sections/Brands";
import Blogs from "../sections/Blogs";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="body_wrapper md:px-[50px] p-[20px]">
        <Services />
        <Catagories />
        <Brands />
        <Blogs />
      </div>
    </>
  );
};

export default Home;
