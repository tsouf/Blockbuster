import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const MovieInfo = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axios.get(requests.requestMovie).then((response) => {
      setMovies(response.data.results);
     console.log(movies); 
    });
  }, []);
 

  return (
    <div>
      <div className="w-full h-[600px] text-white text-3xl p-2">
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
            alt="movieBackground"
          />
          <div className="text-white font-bold text-3xl p-2">
            <h1 className="text-white font-bold text-3xl p-2">
              {movies?.title}
            </h1>
            <div className="my-6"></div>
            <p className="text-gray-300 text-sm p-2">
              Released: {movies?.release_date}
            </p>
            <br />
            <p className="text-gray-400 text-sm">
              Short Description: {movies?.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
