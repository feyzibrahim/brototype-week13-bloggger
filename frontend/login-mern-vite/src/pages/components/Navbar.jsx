import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 fixed min-w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white cursor-pointer" href="">
              bloggger
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="navbar-anchor"
                style={({ isActive }) => ({
                  background: isActive ? "#374151" : "",
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="navbar-anchor"
                style={({ isActive }) => ({
                  background: isActive ? "#374151" : "",
                })}
              >
                About
              </NavLink>
              {user ? (
                <>
                  <NavLink
                    to="/profile"
                    className="navbar-anchor"
                    style={({ isActive }) => ({
                      background: isActive ? "#374151" : "",
                    })}
                  >
                    Profile
                  </NavLink>
                  <button
                    className="navbar-anchor border border-gray-600"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/signup"
                    className="navbar-anchor"
                    style={({ isActive }) => ({
                      background: isActive ? "#374151" : "",
                    })}
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="navbar-anchor border border-gray-600"
                    style={({ isActive }) => ({
                      background: isActive ? "#374151" : "",
                    })}
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
