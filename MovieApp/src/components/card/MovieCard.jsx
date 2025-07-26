import React from "react";
import "./moviecard.css";

const MovieCards = ({ movie }) => {
  const {
    id,
    poster_path,
    original_language,
    original_title,
    release_date,
    vote_average,
    overview,
  } = movie;

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
          <p>Release Date: {release_date}</p>
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
