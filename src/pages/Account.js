import React from "react";
import Favorites from "../components/Favorites";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[500px] object-cover"
          src="https://wallpaperaccess.com/full/1679637.jpg"
          alt="/"
        />
        <div className="fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[70%] p-4 md:p-8">
           
          </div>
        </div>
      </div>
      <Favorites/>
    </>
  );
};

export default Account;
