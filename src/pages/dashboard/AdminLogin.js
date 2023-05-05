import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <>
      <div
        className={`flex admin justify-evenly items-center h-screen bg-main-dark-bg text-custom_color`}
      >
        <div className="logo">
          <img width={200} height={200} alt="logo" src="df" />
        </div>
        <div
          className={`box bg-secondary-dark-bg h-[420px] before:h-[420px] after:h-[420px]`}
        >
          <div className={`content bg-secondary-dark-bg`}>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-center">Sign In</h3>
              <div className="form flex flex-col">
                <form className="space-y-6 flex flex-col">
                  <div className={`inputBox`}>
                    <input
                      className={``}
                      type="email"
                      name="email"
                      id="email"
                      required="required"
                      // value={inputData.email}
                      // onChange={inputHandle}
                    />
                    <span className={``}>Email</span>
                    <i className="bg-custom_bg"></i>
                  </div>
                  <div className={`inputBox`}>
                    <input
                      className={``}
                      type="text"
                      name="password"
                      id="password"
                      required="required"
                      // value={inputData.password}
                      // onChange={inputHandle}
                    />
                    <span className={``}>Password</span>
                    <i className="bg-custom_bg"></i>
                  </div>
                  <div className="links flex justify-between">
                    <Link href={`/auth/reset`}>Forgot Password ?</Link>
                    <Link href={`/auth/registration`}>Sign Up</Link>
                  </div>
                  <button
                    className={`text-[#1D2434] px-4 py-2 rounded-lg mx-auto bg-custom_bg`}
                    type="submit"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
