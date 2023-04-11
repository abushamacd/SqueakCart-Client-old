import React from "react";

const StoreSidebar = () => {
  return (
    <div>
      <div className="bycatagory filter_card bg-white p-[20px] rounded-xl box_shadow ">
        <h4 className="filter_title capitalize">Shop By Categories</h4>
        <div className="">
          <ul className="filte_menu">
            <li className="filter_menu_item text-sm leading-[28px] capitalize ">
              Watch
            </li>
            <li className="filter_menu_item text-sm leading-[28px] capitalize ">
              Phone
            </li>
          </ul>
        </div>
      </div>
      <div className="byfilter filter_card bg-white p-[20px] rounded-xl box_shadow ">
        <h4 className="filter_title capitalize">Filter By</h4>
      </div>
      <div className="bytag filter_card bg-white p-[20px] rounded-xl box_shadow ">
        <h4 className="filter_title capitalize">Product Tag</h4>
      </div>
      <div className="random_products filter_card bg-white p-[20px] rounded-xl box_shadow ">
        <h4 className="filter_title capitalize">Random Products</h4>
      </div>
    </div>
  );
};

export default StoreSidebar;
