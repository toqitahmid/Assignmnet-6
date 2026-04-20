import React from "react";
import userIcon from "../assets/ui/user.png";
import qube from "../assets/ui/package.png";
import roket from "../assets/ui/rocket.png";

const Buytool = () => {
  return (
    <div className="w-10/12 mx-auto mt-30 mb-20">
      <div className="text-center space-y-3 mt-20 mb-10">
        <h2 className="text-5xl font-bold">Get Started in 3 Steps</h2>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="w-8/10 mx-auto flex justify-between gap-4 mt-20">
        <div className="hover-3d">
        <div className="bg-base-200 rounded-2xl p-5">
          <div className="flex justify-between">
            <div></div>
            <p className="bg-purple-700 p-1 text-white rounded-full">01</p>
          </div>
          <div className="flex flex-col justify-center text-center space-y-4">
            <img
              src={userIcon}
              alt=""
              className="size-20 self-center bg-purple-200 p-2 rounded-full"
            />
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="opacity-70">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        </div>

        <div className="hover-3d">
        <div className="bg-base-200 p-5">
          <div className="flex justify-between">
            <div></div>
            <p className="bg-purple-700 p-1 text-white rounded-full">02</p>
          </div>
          <div className="flex flex-col justify-center text-center space-y-4">
            <img
              src={qube}
              alt=""
              className="size-20 self-center bg-purple-200 p-2 rounded-full"
            />
            <h2 className="text-2xl font-bold">Choose Products</h2>
            <p className="opacity-70">
              Browse our catalog and select the toolsthat fit your needs.
            </p>
          </div>
        </div>
        </div>

        <div className="hover-3d">
        <div className="bg-base-200 p-5 h-full">
          <div className="flex justify-between">
            <div></div>
            <p className="bg-purple-700 p-1 text-white rounded-full">03</p>
          </div>
          <div className="flex flex-col justify-center text-center space-y-5">
            <img
              src={roket}
              alt=""
              className="size-20 self-center bg-purple-200 p-2 rounded-full"
            />
            <h2 className="text-2xl font-bold">Start Creating</h2>
            <p className="opacity-70">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Buytool;
