import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Blogs = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <section className="blogs_section rounded-xl section_gap">
      <div className="section_heading">
        <h4 className="section_title">Our Latest News</h4>
      </div>
      <div className="text-gray-600 body-font">
        <div className="mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            {numbers.map((blog) => (
              <div blog={blog} className="py-4 px-4 md:w-1/4">
                <div className="blog box_shadow rounded-xl">
                  <img
                    className="rounded-xl mb-[10px] w-full"
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="blog images"
                  />
                  <div className="h-full flex items-start">
                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                        Jul
                      </span>
                      <span className="font-medium text-lg text-gray-800 title-font leading-none">
                        18
                      </span>
                    </div>
                    <div className="flex-grow pl-6">
                      <h2 className="tracking-widest text-xs title-font mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                        Neptune
                      </h1>
                      <p className="leading-relaxed mb-3 text-sm">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <Link
                        to="/"
                        className="inline-flex items-center mb-2 capitalize text-sm text-indigo-500 hover:underline duration-200 "
                      >
                        read More <HiOutlineArrowNarrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
