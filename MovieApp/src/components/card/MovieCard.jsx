import React from "react";
import "./moviecard.css";

const MovieCards = ({ movie }) => {
  const {
    id,
    poster_path,
    original_language,
    original_title,
    genre_ids,
    vote_average,
    overview,
  } = movie;

  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const getGenreNames = (genreIds) => {
    return genreIds.map((id) => genreMap[id]).filter(Boolean); // filters out undefined
  };

  return (
    <>
      <div key={id || index} className="card">
        <div className="movie-img">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={original_title}
          />
        </div>

        <div className="info">
          <p className="heading">{original_title}</p>
          <p>Language: {original_language}</p>
          {getGenreNames(movie.genre_ids).map((genre, index) => (
          <span>{genre} - </span>
          ))}
          <p className="description">Rating: {vote_average.toFixed(1)}</p>
        </div>
        <div className="actionBtn">
          <span className="addToWatchlist" title="Add to Watchlist">
            <i className="fa-solid fa-calendar-plus"></i>
          </span>
          <span className="LikeBtn" title="Like it">
            <i className="fa-solid fa-thumbs-up"></i>
          </span>
          <span className="DescriptionBtn">
            <i className="fa-solid fa-circle-info"></i>
          </span>
          <div className="Description">
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCards;
