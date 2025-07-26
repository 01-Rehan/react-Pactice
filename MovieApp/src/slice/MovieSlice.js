import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Movies : []
}
const MovieSlice = createSlice({
    name : 'Movies',
    initialState,
    reducers : {
        setMovies : (state,action) => {
            state.Movies = action.payload;
        },
        setSearchValue : (state,action) => {
            state.SearchValue = action.payload;
        }

    }
});

export const { setMovies , setSearchValue } =  MovieSlice.actions;
export default MovieSlice.reducer;