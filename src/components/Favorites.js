import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.favoriteMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteMovie = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        favoriteMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-white font-bold text-3xl p-2">My Shows</h2>
      <div className="relative flex items-center group">
        <MdOutlineArrowBackIos
          onClick={slideLeft}
          className="bg-white absolute left-0 opacity-40 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block "
          size={30}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm left-0 py-1 p-2 font-bold">
                  {item?.title}
                </p>
                <p
                  onClick={() => deleteMovie(item.id)}
                  className="absolute text-gray-200 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdOutlineArrowForwardIos
          onClick={slideRight}
          className="bg-white absolute right-0 opacity-40 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block"
          size={30}
        />
      </div>
    </div>
  );
};

export default Favorites;
