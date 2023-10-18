import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // const { user } = useSelector((state) => state.user);

  return (
    <main className="container mx-auto pt-40 px-4 pb-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to bloggger!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Start sharing your thoughts and ideas with the world.
        </p>
        <Link to="/create-post" className="btn btn-blue">
          Create New Post
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Replace with your actual blog posts */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">Blog Post Title 1</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sodales risus a tristique commodo.
            </p>
            <Link
              to="/blog-post-1"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read More
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">Blog Post Title 2</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sodales risus a tristique commodo.
            </p>
            <Link
              to="/blog-post-2"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read More
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-2">Blog Post Title 3</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sodales risus a tristique commodo.
            </p>
            <Link
              to="/blog-post-3"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
