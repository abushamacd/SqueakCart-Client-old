import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { Navigation, Thumbs } from "swiper";

const SpecialProducts = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var image_settings = {
    arrows: false,
  };
  var product_settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 1,
          slidesPerRow: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  // const [activeThumb, setActiveThumb] = useState();

  return (
    <section className="special_products_section section_gap">
      <div className="section_heading">
        <h4 className="section_title">Special Products</h4>
      </div>
      <Slider {...product_settings}>
        {numbers.map((image, index) => (
          <div key={index} className="py-[10px] ">
            <div className="special_product md:pr-[20px] md:px-0 px-[10px] ">
              <div className="special_product_inner rounded-xl bg-white box_shadow flex md:flex-row flex-col gap-[20px] p-[20px]">
                <div className="product_photo md:w-1/2 relative">
                  <Slider
                    {...image_settings}
                    asNavFor={nav2}
                    ref={(slider1) => setNav1(slider1)}
                  >
                    {numbers.map((image, index) => (
                      <div key={index} className="">
                        <div className="product_image h-[300px] flex justify-center items-center overflow-hidden rounded-xl">
                          <img
                            className="rounded-xl bg-center  "
                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                            alt="product"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                  <Slider
                    className="mt-[20px]"
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    {numbers.map((image, index) => (
                      <div key={index} className="p-[10px]">
                        <img
                          className="rounded-xl border"
                          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                          alt=""
                        />
                      </div>
                    ))}
                  </Slider>
                  {/* <div className="">
                  <Swiper
                    className="swiper_img"
                    loop={true}
                    spaceBetween={10}
                    grabCursor={true}
                    modules={[Navigation, Thumbs]}
                    thumbs={{ swiper: activeThumb }}
                  >
                    {numbers.map((image, index) => (
                      <SwiperSlide>
                        <div key={index} className="">
                          <div className="product_image h-[300px] flex justify-center items-center overflow-hidden rounded-xl">
                            <img
                              className="rounded-xl bg-center  "
                              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                              alt="product"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    className="swiper_thumbs"
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    grabCursor={true}
                    slidesPerView={4}
                    modules={[Navigation, Thumbs]}
                    onSwiper={setActiveThumb}
                  >
                    {numbers.map((image, index) => (
                      <SwiperSlide>
                        <div key={index} className="pt-[20px]">
                          <img
                            className="rounded-xl border"
                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div> */}
                  <div className="wishlist absolute md:right-[-3%] right-[-2%] top-[3%] ">
                    <img
                      className=" bg-white h-[25px] duration-300 w-[25px] rounded-full p-[5px] "
                      src="/images/wish.svg"
                      alt=""
                    />
                  </div>
                  <div className="action_bar absolute top-[11%] flex flex-col gap-[5px]">
                    <Link to="/">
                      <img
                        className="duration-300 bg-white h-[25px] w-[25px] rounded-full p-[5px] "
                        src="/images/prodcompare.svg"
                        alt=""
                      />
                    </Link>
                    <Link to="/">
                      <img
                        className="duration-300 bg-white h-[25px] w-[25px] rounded-full p-[5px] "
                        src="/images/view.svg"
                        alt=""
                      />
                    </Link>
                    <Link to="/">
                      <img
                        className="duration-300 bg-white h-[25px] w-[25px] rounded-full p-[5px] "
                        src="/images/add-cart.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="product_info md:w-1/2">
                  <h6 className="product_brand capitalize my-[12px] text-xs font-medium">
                    Hp
                  </h6>
                  <Link to="/">
                    <h2 className="product_title capitalize font-medium text-[15px] leading-[22px] tracking-[.3px] ">
                      Lorem, ipsum dolor sit amet consectetur
                    </h2>
                  </Link>
                  <div className="md:flex  justify-between items-center my-[10px]">
                    <ReactStars
                      count={5}
                      className=""
                      size={20}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <div className="flex">
                      <p className="offer_price">
                        $
                        <span>
                          <del>
                            {10.45 + parseInt(((130 / 100) * 12).toFixed(2))}
                          </del>
                        </span>{" "}
                      </p>
                      <p className="product_price">
                        $ <span>10.45</span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="stock">
                    <h4 className="stock_item text-sm">Items in stock: 4</h4>
                    <progress
                      className="progress progress-primary w-full"
                      value="10"
                      max="100"
                    ></progress>
                  </div>
                  <button className="btn btn-sm product_option rounded-full mt-[20px] ">
                    Small
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SpecialProducts;
