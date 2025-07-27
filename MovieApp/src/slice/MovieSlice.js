import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Movies: [],
  SearchValue: "",
  GenreValue: "",   
  RatingValue: "",  
  LanguageValue: "",
};
const MovieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.Movies = action.payload;
    },
    setSearchValue: (state, action) => {
      state.SearchValue = action.payload;
    },
    setGenreValue: (state, action) => {
      state.GenreValue = action.payload;
    },
    setRatingValue: (state, action) => {
      state.RatingValue = action.payload;
    },
    setLanguageValue : (state,action) => {
        state.LanguageValue = action.payload;
    }
  },
});

export const { setMovies, setSearchValue, setGenreValue, setRatingValue ,setLanguageValue } =
  MovieSlice.actions;
export default MovieSlice.reducer;
