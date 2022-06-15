import React from "react";

const key = "7900b6191e8e2b3d7403ef2d461d9964";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=7900b6191e8e2b3d7403ef2d461d9964&language=en-US`,
  requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=7900b6191e8e2b3d7403ef2d461d9964&language=en-US`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=7900b6191e8e2b3d7403ef2d461d9964&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=7900b6191e8e2b3d7403ef2d461d9964&language=en-US&page=1`,
  requestNowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=7900b6191e8e2b3d7403ef2d461d9964&language=en-US&page=1`,
  requestMovie: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=7900b6191e8e2b3d7403ef2d461d9964&language=en-US`,
  appendMovie: `https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos`,
  movies: `https://api.themoviedb.org/3/movie/`,
};

export default requests;
