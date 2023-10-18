import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600">Oops! Page not found.</p>
      <p className="text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-blue mt-5">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error404;
