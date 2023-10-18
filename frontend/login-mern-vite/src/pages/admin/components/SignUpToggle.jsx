import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { createNewUser } from "../../../redux/actions/adminUserActions";
import avatar from "../../../img/avatar.png";

const SignUpToggle = ({ toggleSignUp }) => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordA, setPasswordA] = useState("");
  const [type, setType] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const { loading, error } = useSelector((state) => state.adminUser);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);

    // Create a preview URL for the selected file
    const previewURL = URL.createObjectURL(file);
    setPreviewPhoto(previewURL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      return;
    }

    const userCredentials = new FormData();

    userCredentials.append("userName", name);
    userCredentials.append("email", userEmail);
    userCredentials.append("password", password);
    userCredentials.append("passwordA", passwordA);
    userCredentials.append("userType", type);
    userCredentials.append("profilePhoto", profilePhoto);

    dispatch(createNewUser(userCredentials));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md w-1/3">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold ">Create New User</h2>
          <button
            className="text-gray-800 text-2xl hover:text-gray-500"
            onClick={toggleSignUp}
          >
            <AiFillCloseCircle />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <img
              src={previewPhoto || avatar}
              alt="Profile Preview"
              className="mt-2 w-20 h-20 object-cover rounded-full"
            />
            <label className="form-label" htmlFor="profilePhoto">
              Choose a Profile Photo
            </label>
            <input
              className="input-box-default"
              id="profilePhoto"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="input-box-default"
              id="name"
              type="text"
              placeholder="Your Name Here"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="input-box-default"
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="input-box-default"
              id="password"
              type="password"
              placeholder="Your Password Here"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="passwordA">
              Confirm Password
            </label>
            <input
              className="input-box-default"
              id="passwordA"
              type="password"
              placeholder="One More Time"
              required
              value={passwordA}
              onChange={(e) => setPasswordA(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="type">
              User Type
            </label>
            <input
              className="input-box-default"
              id="type"
              type="text"
              placeholder="User | Admin"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-blue" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
          {error && <p className="error-p-tag">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUpToggle;
