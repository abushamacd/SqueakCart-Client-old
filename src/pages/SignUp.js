import React from "react";
import Head from "../components/Head";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Head title="Sign Up ||" />
      <BreadCrumb title="Sign Up" />
      <div className="body_wrapper p-[20px]">
        <div className="user_form rounded-lg bg-white md:w-[400px] md:my-[50px] p-[20px] mx-auto layout">
          <h3 className="login text-center capitalize mb-[20px] text-xl font-bold">
            create new account
          </h3>
          <form action="">
            <input
              className="w-full p-2 mb-3"
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
            />
            <input
              className="w-full p-2 mb-3"
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
            />
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
            <Link to="/login">
              <p className="text-sm font-bold">Already have an account?</p>
            </Link>
            <div className="flex justify-center gap-[30px] mt-[20px]">
              <button className="first_button duration-300 rounded-full py-[8px] px-[20px] font-medium ">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
