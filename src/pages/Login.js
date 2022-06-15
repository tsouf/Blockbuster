import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = UserAuth();
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://wallpaperaccess.com/full/1679637.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="">{error}</p> : null }
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-800 rounded"
                type="email"
                placeholder="Add your email"
              />
              <input onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-800 rounded"
                type="password"
                placeholder="Add your password"
              />
              <button className="bg-red-700 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-sm">
                <p className="text-gray-400">
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p className="text-gray-400">Need help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-400 cursor-pointer"></span>
                <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
