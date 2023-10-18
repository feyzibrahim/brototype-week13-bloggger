import React, { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../redux/actions/adminUserActions";
import UpdateToggle from "./UpdateToggle";
import avatar from "../../../img/avatar.png";
import toast from "react-hot-toast";

const UserTableData = ({ userList, index }) => {
  const [updateOn, setUpdateOn] = useState(false);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser({ userId: userList._id }));
  };

  const toggleUpdate = () => {
    setUpdateOn(!updateOn);
  };

  return (
    <>
      {updateOn && (
        <UpdateToggle toggleUpdate={toggleUpdate} userList={userList} />
      )}
      <tr className="hover:bg-gray-100">
        <td className="table-data">{index + 1}</td>
        <td className="table-data">
          <img
            src={
              userList.dpPath
                ? `http://localhost:4000/upload/${userList.dpPath}`
                : avatar
            }
            alt="Profile"
            className={`w-7 h-7 ${userList.dpPath && "rounded-full"}`}
          />
        </td>
        <td className="table-data">
          {userList.userName}{" "}
          <span className="text-gray-400">
            {userList.email === user.email && "(You)"}
          </span>
        </td>
        <td className="table-data">{userList.email}</td>
        <td className="table-data">
          <span
            className={`${
              userList.userType !== "user" ? "bg-red-300" : "bg-green-300"
            } px-2 py-1 rounded`}
          >
            {userList.userType}
          </span>
        </td>
        <td className="table-data">
          {formatDistanceToNow(new Date(userList.createdAt), {
            addSuffix: true,
          })}
        </td>
        <td className="table-data">
          <button
            className="mr-4 table-button"
            onClick={() => {
              if (userList.email === user.email) {
                toast.error("It is your account");
                return;
              }
              toggleUpdate();
            }}
          >
            <AiOutlineEdit />
          </button>
          <button
            className="table-button"
            onClick={() => {
              if (userList.email === user.email) {
                toast.error("It is your account");
                return;
              }
              handleDelete();
            }}
          >
            <AiOutlineDelete />
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserTableData;
