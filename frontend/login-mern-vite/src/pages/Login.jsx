import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const { user, loading, error } = useSelector((state) => state.user);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = userEmail.toLowerCase();
    let userCredentials = {
      email,
      password,
    };

    dispatch(loginUser(userCredentials));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded mx-5 lg:mx-0 ">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email{}
            </label>
            <input
              className="input-box-default"
              id="email"
              type="email"
              placeholder="Enter your Email"
              required
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="input-box-default"
              id="password"
              type="password"
              placeholder="Enter your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="btn btn-blue" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
          {error && <p className="error-p-tag">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
