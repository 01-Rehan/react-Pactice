import axios, { all } from "axios";
import { setMovies } from "../slice/MovieSlice";
import { useEffect } from "react";

export const GetMovies = () => async (dispatch) => {
  // const api = "c083e2f95a6317ae05910d55cec56315";      //used this for fetching a single page from the TMBd's movie database 
  // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api}`;

  const API_KEY = "c083e2f95a6317ae05910d55cec56315";
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
    console.log(allmovies)
  } catch (err) {
    console.log(err);
  }
};
