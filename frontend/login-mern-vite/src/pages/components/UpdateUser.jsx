import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { updateUser } from "../../redux/actions/userActions";
import avatar from "../../img/avatar.png";

const UpdateUserToggle = ({ toggleUpdate }) => {
  const { user, loading, error } = useSelector((state) => state.user);

  const [name, setName] = useState(user.userName);
  const [userEmail, setEmail] = useState(user.email);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);

    // Create a preview URL for the selected file
    const previewURL = URL.createObjectURL(file);
    setPreviewPhoto(previewURL);
  };

  const dispatch = useDispatch();

  // Update the user using redux
  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = name;
    const email = userEmail.toLowerCase();

    const userCredentials = new FormData();
    userCredentials.append("userName", userName);
    userCredentials.append("email", email);
    userCredentials.append("profilePhoto", profilePhoto);

    const id = user._id;
    dispatch(updateUser({ userId: id, userCredentials }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md w-1/3">
        {/* Heading and new user button */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold ">Edit Profile</h2>
          <button
            className="text-gray-800 text-2xl hover:text-gray-500"
            onClick={toggleUpdate}
          >
            <AiFillCloseCircle />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            {previewPhoto ? (
              <img
                src={previewPhoto}
                alt="Profile Preview"
                className="mt-2 w-20 h-20 object-cover rounded-full"
              />
            ) : (
              <img
                src={
                  user.dpPath
                    ? `http://localhost:4000/upload/${user.dpPath}`
                    : avatar
                }
                alt="Profile"
                className={`w-20 h-20 mr-4 ${user.dpPath && "rounded-full"}`}
              />
            )}
            <label className="form-label" htmlFor="profilePhoto">
              Change Profile Photo
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="btn btn-blue" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Update"}
            </button>
          </div>
          {error && <p className="error-p-tag">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default UpdateUserToggle;
