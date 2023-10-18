import React, { useState } from "react";
import { useSelector } from "react-redux";
import avatar from "../img/avatar.png";
import UpdateUserToggle from "./components/UpdateUser";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);
  const [showUpdateComp, setShowUpdateComp] = useState(false);

  const toggleUpdate = () => {
    setShowUpdateComp(!showUpdateComp);
  };

  return (
    <div className="max-w-3xl mx-auto  p-6 flex flex-col justify-center h-screen">
      {showUpdateComp && <UpdateUserToggle toggleUpdate={toggleUpdate} />}
      <div className="bg-white rounded shadow-lg p-20">
        <div className="flex items-center">
          <img
            src={
              user.dpPath
                ? `http://localhost:4000/upload/${user.dpPath}`
                : avatar
            }
            alt="Profile"
            className={`w-20 h-20 mr-4 ${user.dpPath && "rounded-full"}`}
          />
          <div>
            <h1 className="text-2xl font-semibold">{user.userName}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">User Information</h2>
          <p>
            <span className="font-semibold">User Type:</span> {user.userType}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>
        <button className="btn btn-blue" type="submit" onClick={toggleUpdate}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
