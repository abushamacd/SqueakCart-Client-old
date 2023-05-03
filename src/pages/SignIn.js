import React from "react";
import Head from "../components/Head";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <Head title="Sign In ||" />
      <BreadCrumb title="Sign In" />
      <div className="body_wrapper p-[20px]">
        <div className="user_form rounded-lg bg-white md:w-[400px] md:my-[50px] p-[20px] mx-auto layout">
          <h3 className="login text-center capitalize mb-[20px] text-xl font-bold">
            Login
          </h3>
          <form action="">
            <input
              className="w-full p-2 mb-3"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
            <input
              className="w-full p-2 mb-3"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            />
            <Link to="/forget">
              <p className="text-sm font-bold">Forget Password ?</p>
            </Link>
            <div className="flex justify-center gap-[30px] mt-[20px]">
              <button className="first_button duration-300 rounded-full py-[8px] px-[20px] font-medium ">
                Sign In
              </button>
              <Link to="/register">
                <p className="second_button cursor-pointer duration-300 rounded-full py-[8px] px-[20px] font-medium ">
                  Sign Up
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
