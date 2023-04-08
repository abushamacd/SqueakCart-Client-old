import React from "react";

const Catagories = () => {
  return (
    <section className="catagories bg-white rounded-xl p-[15px] box_shadow flex flex-wrap ">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((catarory) => (
        <div
          key={catarory}
          className="catagory md:w-[25%] w-[50%] flex justify-between items-center gap-[10px] px-[15px] py-[10px] "
        >
          <div className="catagory_info hidden md:block">
            <h6 className="catagory_title capitalize font-bold">
              Catagoru title
            </h6>
            <p className="catagory_desc text-sm">info</p>
          </div>
          <img
            className="md:w-[100px] md:h-[100px] w-full "
            src="/images/camera.jpg"
            alt="catagory"
          />
        </div>
      ))}
    </section>
  );
};

export default Catagories;
