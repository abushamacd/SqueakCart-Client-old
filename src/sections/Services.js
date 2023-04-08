import React from "react";

const Services = () => {
  return (
    <section className="service_sections hidden md:block pb-[20px] ">
      <div className="services flex flex-wrap justify-between items-center">
        <div className="service flex items-center gap-[10px]">
          <img src="/images/service.png" alt="" className="" />
          <div className="service_info">
            <h6 className="capitalize setvice_title font-bold ">
              Free Shipping
            </h6>
            <p className="service_details capitalize text-[14px]">
              From all order over $5
            </p>
          </div>
        </div>
        <div className="service flex items-center gap-[10px]">
          <img src="/images/service-02.png" alt="" className="" />
          <div className="service_info">
            <h6 className="capitalize setvice_title font-bold ">
              Daily Surprise offer
            </h6>
            <p className="service_details capitalize text-[14px]">
              Save Upto 30%
            </p>
          </div>
        </div>
        <div className="service flex items-center gap-[10px]">
          <img src="/images/service-03.png" alt="" className="" />
          <div className="service_info">
            <h6 className="capitalize setvice_title font-bold ">
              support 24/7
            </h6>
            <p className="service_details capitalize text-[14px]">
              Shop with an expart
            </p>
          </div>
        </div>
        <div className="service flex items-center gap-[10px]">
          <img src="/images/service-04.png" alt="" className="" />
          <div className="service_info">
            <h6 className="capitalize setvice_title font-bold ">
              Afordable Price
            </h6>
            <p className="service_details capitalize text-[14px]">
              get factory default price
            </p>
          </div>
        </div>
        <div className="service flex items-center gap-[10px]">
          <img src="/images/service-05.png" alt="" className="" />
          <div className="service_info">
            <h6 className="capitalize setvice_title font-bold ">
              Secure Payment
            </h6>
            <p className="service_details capitalize text-[14px]">
              100% Protected paymet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
