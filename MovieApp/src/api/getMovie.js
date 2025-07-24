import axios from "axios";
import { setMovies } from "../slice/MovieSlice";

export const GetMovies = () => async (dispatch) => {
    const api = "c083e2f95a6317ae05910d55cec56315";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api}`;

  try {
    const {data} =await axios.get(url);
    console.log(data.results);
  } catch (err) {
    console.log(err);
  }
};

