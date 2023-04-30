import React from "react";
import Head from "../components/Head";
import BreadCrumb from "../components/BreadCrumb";

const ChangePassword = () => {
  return (
    <>
      <Head title="Change Password ||" />
      <BreadCrumb title="Change Password" />
      <div className="body_wrapper layout p-[20px]">
        <div className="user_form rounded-lg bg-white md:w-[400px] md:my-[50px] p-[20px] mx-auto">
          <h3 className="login text-center capitalize mb-[15px] text-xl font-bold">
            Change Your Password
          </h3>
          <form action="">
            <input
              className="w-full p-2 mb-3"
              type="password"
              placeholder="Old Password"
              name="oldPassword"
              id="oldPassword"
            />
            <input
              className="w-full p-2 mb-3"
              type="password"
              placeholder="New Password"
              name="newPassword"
              id="newPassword"
            />
            <div className="flex flex-col justify-center items-center gap-[10px] mt-[10px]">
              <button
                type="submit"
                className="first_button w-24 duration-300 rounded-full py-[8px] px-[20px] font-medium "
              >
                Submit
              </button>
              <p className="cursor-pointer w-24 duration-300 rounded-full py-[8px] px-[20px] font-medium ">
                Cancel
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
