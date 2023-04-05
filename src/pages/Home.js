import React from "react";
import Banner from "../sections/Banner";
import Services from "../sections/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="body_wrapper md:px-[50px] p-[20px]">
        <Services />
      </div>
    </>
  );
};

export default Home;
