import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white">About </h3>
            <p className="text-gray-300 mt-4">
              Made by{" "}
              <a
                className="font-bold cursor-pointer"
                href="https://feyz-ibrahim.vercel.app/"
                target="_blank"
              >
                Feyz Ibrahim
              </a>{" "}
              as a part{" "}
              <a
                href="https://brototype.com/"
                className="font-bold cursor-pointer"
                target="_blank"
              >
                brototype
              </a>{" "}
              3rd Week task. Used MERN stack to develop. Built using vite.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <ul className="mt-4 text-gray-500">
              <li>
                <span className="text-gray-300">Email:</span> info@bloggger.com
              </li>
              <li>
                <span className="text-gray-300">Phone:</span> +91 7356 983 827
              </li>
              <li>
                <span className="text-gray-300">Address:</span> Arstyn Campus,
                7th Street
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-4 text-4xl">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-500"
              >
                <AiFillFacebook />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-500"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-500"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-8 border-gray-700" />
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} bloggger | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
