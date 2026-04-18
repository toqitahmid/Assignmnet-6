import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar w-10/12 mx-auto">
          {/*navbar start */}

          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-30 p-2 shadow space-y-2 "
              >
                <li>Products</li>
                <hr />
                <li>Fetures</li>
                <hr />
                <li>Pricing</li>
                <hr />
                <li>Testimonials</li>
                <hr />
                <li>FQA</li>
              </ul>
            </div>
            <h2 className="text-3xl font-bold text-purple-700">DigiTools</h2>
          </div>

          {/*navbar-center*/}

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-4 font-bold">
              <li>Products</li>
              <li>Fetures</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FQA</li>
            </ul>
          </div>

          {/*navbar-end*/}

          <div className="navbar-end space-x-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-7"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item bg-purple-500 rounded-full text-white">69</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-x-4">
              <button className="btn btn-ghost">Log in</button>
              <button className="btn space-x-5 rounded-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
