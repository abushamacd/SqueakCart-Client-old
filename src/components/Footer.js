import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_bg">
        <div className="layout px-[20px]">
          <div className="footer_top py-2">
            <div className="flex items-center justify-between gap-[20px]">
              <div className="flex items-center gap-[15px]">
                <img src="/images/newsletter.png" alt="newsletter" />
                <h3 className="uppercase text-white text-2xl">
                  Sign up for newsletter
                </h3>
              </div>
              <div className="newsletter hidden md:block">
                <div className="form-control">
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Type your email ....."
                      className="w-[500px] text-black input rounded input-bordered h-[2rem] bg-white "
                    />
                    <span>Subscribe</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_middle py-2"></div>
          <div className="footer_bottom py-2 w-full">
            <p className="text-center">
              &copy; {new Date().getFullYear()}; Designed and Developed by{" "}
              <Link
                target="_blank"
                className="underline"
                to="https://www.imshama.com/"
              >
                Abu Shama
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
