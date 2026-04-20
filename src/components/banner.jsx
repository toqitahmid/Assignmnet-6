import React from "react";
import playIcon from "../assets/ui/Play.png";
import bannerImg from "../assets/ui/banner.png";

const Banner = () => {
  return (
    <>
      <div className="w-10/12 mx-auto md:mt-20">
        <div className="flex md:justify-between flex-wrap-reverse items-center">
          <div className="md:space-y-5 space-y-3">
            <div className="">
            <p className="md:text-xl bg-blue-100 md:w-79 w-65 pl-3 p-1 rounded-3xl mx-auto md:mx-0 text-center md:text-left">
              New: AI-Powered Tools Available
            </p>
            </div>
            <h2 className="md:text-7xl md:text-left text-4xl text-center font-bold">
              Supercharge Your <br /> Digital Workflow
            </h2>
            <p className="text-gray-500 md:text-left text-center">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex items-center mx-auto md:mx-0 space-x-2">
              <button className=" px-5 py-2 text-white rounded-3xl bg-linear-to-bl from-violet-500 to-fuchsia-500 cursor-pointer">
                Explore Products
              </button>
              <div className="bg-linear-to-bl from-violet-500 to-fuchsia-500 rounded-3xl cursor-pointer">
                <div className="bg-white m-1 rounded-3xl px-4 py-1 ">
                  <p className="flex items-center gap-1">
                    <img className="" src={playIcon} alt="" />
                    Watch More
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hover-3d my-12 mx-2">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
      <div className="hover-3d w-full">
        <div className="flex md:justify-evenly  items-center w-10/12 mx-auto md:p-20 p-10 md:h-50 bg-linear-to-bl from-violet-500 md:mt-20 mt-10 md:mb-20 text-center rounded-2xl">
          <div>
            <h2 className="md:text-4xl text-2xl font-bold">50K</h2>
            <p>Active Users</p>
          </div>
          <div className="divider divider-horizontal"></div>
          <div>
            <h2 className="md:text-4xl text-2xl font-bold">200+</h2>
            <p>Premimum Tools</p>
          </div>
          <div className="divider divider-horizontal"></div>
          <div>
            <h2 className="md:text-4xl text-2xl font-bold">4.9</h2>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
