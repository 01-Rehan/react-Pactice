export const getFilterdMovies = (movies, Searchvalue, GenreValue ,LanguageValue, RatingValue) => {
  let filterdList = movies;

  if (Searchvalue?.length > 0) {
    filterdList =
      filterdList?.filter((movie) =>
            movie.original_title
              .toLowerCase()
              .includes(Searchvalue.toLowerCase())
          );
  }
  if (GenreValue) {
    filterdList = filterdList.filter((movie) =>
      movie.genre_ids.includes(Number(GenreValue))
    );
  }
  if(LanguageValue){
    filterdList = filterdList.filter((movie)=>
        movie.original_language.includes(LanguageValue)
    );
  }
  if(RatingValue){
    filterdList = filterdList.filter(movie => 
        movie.vote_average > RatingValue 
    );
  }
  return filterdList;
};
