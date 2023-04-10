import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero_area layout md:px-[50px] p-[20px] md:py-[30px] flex md:flex-row flex-col md:gap-[30px] gap-[10px] ">
      <div className="left_banner md:w-1/2 w-full">
        <div className="slider relative">
          <img
            className="w-full rounded-xl"
            src="/images/main-banner-1.jpg"
            alt="banner"
          />
          <div className="silder_info h-full w-full rounded-xl absolute top-0 bottom-0 pt-[10%] pl-[5%] ">
            <h4 className="banner_subtitle capitalize text-[16px] leading-[24px] tracking-[.3px] md:mb-[12px] mb-[6px] ">
              Subtitle
            </h4>
            <h4 className="capitalize text-[42px] md:leading-[54px] leading-[35px] tracking-[.2px] font-medium ">
              Title
            </h4>
            <p className="text-[18px] leading-[28px] tracking-[.4px]">
              Lorem ipsum dolor sit amet.
            </p>
            <Link>Buy Now</Link>
          </div>
        </div>
      </div>
      <div className="right_banner md:gap-[30px] gap-[10px] md:w-1/2 w-full flex flex-wrap">
        {[1, 2, 3, 4].map((single) => (
          <div key={single} className="side_banner md:w-[46%] w-[48%] relative">
            <img
              className="w-full h-full rounded-xl"
              src="/images/catbanner-01.jpg"
              alt="banner"
            />
            <div className="silder_info h-full w-full rounded-xl absolute top-0 bottom-0  pt-[5%] pl-[5%] ">
              <h4 className="banner_subtitle capitalize text-[14px] leading-[24px] tracking-[.3px] md:mb-[8px] ">
                Subtiele
              </h4>
              <h4 className="capitalize text-[22px] md:leading-[34px] leading-[30px] tracking-[.2px] font-medium ">
                Title
              </h4>
              <p className="hidden md:block text-[14px] leading-[22px] tracking-[.4px]">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
