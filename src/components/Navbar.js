import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-900 flex items-center justify-between p-4 z-[100] w-full fixed">
      <Link to="/">
        <h1 className="text-red-700 text-4xl font-bold cursor-pointer">
          Blockbuster
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4 rounded cursor-pointer text-white">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-700 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4 rounded cursor-pointer text-white">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-700 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
