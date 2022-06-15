import axios from "axios";
import React, { useEffect } from "react";
import Movie from "./Movie";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdOutlineArrowBackIos
          onClick={slideLeft}
          className="bg-white absolute left-0 opacity-40 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block "
          size={30}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdOutlineArrowForwardIos
          onClick={slideRight}
          className="bg-white absolute right-0 opacity-40 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block"
          size={30}
        />
      </div>
    </>
  );
};

export default Row;
