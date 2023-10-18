import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Homesvg } from "../img/Icon.svg";

const Home = () => {
  return (
    <div className="lg:min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center">
          <Homesvg className="w-3/4 h-fit md:h-screen" />
        </div>
        <div className="h-48 md:h-screen text-center md:text-left md:flex md:items-center">
          <div>
            <p className="font-semibold text-2xl md:text-3xl lg:text-5xl ">
              Welcome to
            </p>
            <p className="font-bold text-2xl md:text-5xl lg:text-7xl">
              Bloggger.com
            </p>
            <div className="mt-8">
              <Link className="btn btn-blue" to="/signup">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
