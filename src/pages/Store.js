import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Head from "../components/Head";
import StoreSidebar from "../sections/StoreSidebar";

const Store = () => {
  return (
    <>
      <Head title="Store ||" />
      <div className="">
        <BreadCrumb title="Our Store" />
        <div className="body_wrapper ">
          <div className="flex justify-between layout p-[20px]">
            <div className="filter_options hidden md:block w-[275px]">
              <StoreSidebar />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      <div
        id="sidebar_overlay"
        className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 hidden"
      ></div>
    </>
  );
};

export default Store;
