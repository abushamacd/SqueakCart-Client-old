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
            <div className="w-64">
              <StoreSidebar />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
