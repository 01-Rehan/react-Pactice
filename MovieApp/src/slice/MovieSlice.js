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
        }
    }
});

export const { setMovies } =  MovieSlice.actions;
export default MovieSlice.reducer;