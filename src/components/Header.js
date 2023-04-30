import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  // const [stickheader, setStickheader] = useState(false);
  // const handleScroll = () => {
  //   setStickheader(window.scrollY > 10);
  // };
  // window.addEventListener("scroll", handleScroll);

  return (
    <header className={``}>
      <div className="header_top py-1 ">
        <div className="layout flex justify-between text-center  md:flex-row flex-col px-[20px]">
          <div className="">
            <p className="capitalize text-white text-[14px] mb-0 ">
              Free shipping over $100 & free returns
            </p>
          </div>
          <div className="hidden md:block">
            <p className="capitalize text-white text-[14px] mb-0 ">
              Helpline:{" "}
              <a className="text-white" href="tel:+019 0000 0000">
                +019 0000 0000
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="header_middle py-2">
          <div className="layout px-[20px]">
            <div className="flex items-center justify-between gap-[20px]">
              <div className="logo">
                <h2>
                  <Link className="text-white text-2xl">SqueakCart</Link>
                </h2>
              </div>
              <div className="search hidden md:block">
                <div className="form-control">
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Search product....."
                      className="w-[500px] text-black input rounded input-bordered h-[2rem] bg-white "
                    />
                    <span>
                      <BsSearch color="#fff" className="text-[20px]" />
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="header_middle_links flex justify-between md:gap-[20px] gap-[10px]">
                  <div className="">
                    <Link to="/compare" className="text-white">
                      <div className="flex items-center gap-[10px] ">
                        <img
                          className="w-[25px] h-[25px]"
                          src="/images/compare.svg"
                          alt="compare"
                        />
                        <p className="hidden md:block capitalize mb-0 text-[14px] ">
                          compare <br /> producs
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="">
                    <Link to="/wishlist" className="text-white">
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[25px] h-[25px]"
                          src="/images/wishlist.svg"
                          alt="wishlist"
                        />
                        <p className="hidden md:block capitalize mb-0 text-[14px] ">
                          Fevourite <br /> wishlist
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="">
                    <Link className=" text-white">
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[25px] h-[25px]"
                          src="/images/user.svg"
                          alt="user"
                        />
                        <p className="hidden md:block capitalize mb-0 text-[14px] ">
                          Log in <br /> my account
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="">
                    <Link className=" text-white">
                      <div className="flex relative items-center md:gap-[10px]">
                        <img
                          className="w-[25px] h-[25px]"
                          src="images/cart.svg"
                          alt="cart"
                        />
                        <div className="flex flex-col justify-center">
                          <span className="md:static absolute right-[-10px] top-[-5px] badge badge-sm text-black bg-white text-[14px]">
                            0
                          </span>
                          <p className="hidden md:block text-[14px]">$ 500</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom py-1">
          <div className="layout">
            <div className="menu_area flex items-center ">
              <div className="catagories">
                <div className="catagory_menu">
                  <div className="dropdown">
                    <label
                      tabIndex={0}
                      className="btn btn-link text-white no-underline hover:no-underline "
                    >
                      <p className="catagory_menu_btn hidden md:flex justify-center items-center gap-[10px] ">
                        <span className="">show catagories</span>{" "}
                        <BsCaretDownFill />
                      </p>
                      <p className="block md:hidden">
                        <HiMenuAlt1 />
                      </p>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-compact dropdown-content left-[20px] p-2 shadow bg-base-100 rounded w-52"
                    >
                      <li>
                        <Link to="/">Homepage</Link>
                      </li>
                      <li>
                        <Link to="/">Homepage</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mainmenu flex items-center gap-[10px]">
                <div className="flex items-center gap-[15px]">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/store">Store</NavLink>
                  <NavLink to="/contact">Contact Us</NavLink>
                  <NavLink to="/about">About Us</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
