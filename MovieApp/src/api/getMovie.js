import axios, { all } from "axios";
import { setMovies } from "../slice/MovieSlice";
import { useEffect } from "react";

export const GetMovies = () => async (dispatch) => {

  const API_KEY = "";     // Add Api key here (get it from TMDb's website )
  const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

  try {
    let allmovies = [];
    for (let page = 1; page <= 3; page++) {
      const  {data}  = await axios.get(BASE_URL ,{
        params : {
          api_key : API_KEY,
          page,
        },
      });
      allmovies = [...allmovies,...data.results]
    }
    dispatch(setMovies(allmovies));
    // console.log(allmovies)
  } catch (err) {
    console.log(err);
  }
};
