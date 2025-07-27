import { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { GetMovies } from "../../api/getMovie";
import MovieCard from "../../components/card/MovieCard";
import { all } from "axios";
import "../../style/global.css";
import { getFilterdMovies } from "../../utils/getMoviesBySearch";

const Home = () => {
  const dispatch = useDispatch();

  const { Movies, SearchValue, GenreValue, LanguageValue ,RatingValue} = useSelector(
    (state) => state.Movies
  );
  // console.log(Movies)

  const filterMovies = getFilterdMovies(
    Movies,
    SearchValue,
    GenreValue,
    LanguageValue,
    RatingValue
  );
  // console.log(GenreValue);
  // console.log(LanguageValue);

  useEffect(() => {
    dispatch(GetMovies());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className="container">
        {filterMovies?.length > 0 ? (
          filterMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p style={{ color: "white" }}>No movies found</p>
        )}
      </div>
    </>
  );
};
export default Home;
