import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/components/Navbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/components/Footer";
import Error404 from "./pages/Error404";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboard from "./pages/admin/AdminDashboard";

import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Toaster position="bottom-center" />
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              !user ? (
                <Home />
              ) : user.userType == "user" ? (
                <Dashboard />
              ) : (
                <AdminDashboard />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
