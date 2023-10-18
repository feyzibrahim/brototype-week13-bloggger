import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-4 uppercase text-gray-500">
          Welcome to bloggger.com
        </h1>
        <div className="max-w-2xl mx-auto bg-gray-600 p-6 rounded-lg shadow-md">
          <p className="text-gray-800">
            At bloggger.com, we are dedicated to providing a platform for
            passionate writers and bloggers to express their thoughts, share
            their stories, and connect with a like-minded community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
