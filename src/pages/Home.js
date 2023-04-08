import React from "react";
import Banner from "../sections/Banner";
import Services from "../sections/Services";
import Catagories from "../sections/Catagories";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="body_wrapper md:px-[50px] p-[20px]">
        <Services />
        <Catagories/>
      </div>
    </>
  );
};

export default Home;
