import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  adminGetAllUser,
  selectFilteredUsers,
} from "../../redux/actions/adminUserActions";
import { setSearchQuery } from "../../redux/reducers/adminUserSlice";

// Extra things
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import SignUpToggle from "./components/SignUpToggle";
import UserTableData from "./components/UserTableData";
import LoadingCircle from "../components/LoadingCircle";

const AdminDashboard = () => {
  const [signUpOn, setSignUpOn] = useState(false);
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.adminUser);
  const searchQuery = useSelector((state) => state.adminUser.searchQuery);

  const filteredUsers = useSelector(selectFilteredUsers);

  // Fetch all users details on login
  useEffect(() => {
    dispatch(adminGetAllUser({ hell: "hello" }));
  }, []);

  // New user form toggle on and off
  const toggleSignUp = () => {
    setSignUpOn(!signUpOn);
  };

  // Search the users list in admin dashboard
  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="min-h-screen pt-20">
      {signUpOn && <SignUpToggle toggleSignUp={toggleSignUp} />}
      <div className="w-4/5 mx-auto my-2 flex justify-between">
        <h1>Admin Dashboard</h1>

        <div className="border rounded w-2/5 flex items-center">
          <BiSearchAlt className="ml-3 text-lg" />
          <input
            type="text"
            placeholder="Search"
            className="appearance-none text-gray-700 leading-tight px-2 focus:outline-none "
            onChange={handleSearch}
            value={searchQuery}
          />
        </div>

        <button
          className="btn btn-blue flex items-center"
          onClick={toggleSignUp}
        >
          <AiOutlineUserAdd className="mr-2" /> New User
        </button>
      </div>
      {error && <p>{error}</p>}
      {loading && <LoadingCircle />}
      {filteredUsers && (
        <table className="table w-4/5 mx-auto bg-white ">
          <thead className="text-left">
            <tr>
              <th className="table-head">#</th>
              <th className="table-head">Profile</th>
              <th className="table-head">Name</th>
              <th className="table-head">Email</th>
              <th className="table-head">User Type</th>
              <th className="table-head">Sign Up Date</th>
              <th className="table-head">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((userList, index) => {
              return (
                <UserTableData
                  key={userList._id}
                  userList={userList}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
