import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count : 0
}

const slice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increament : state =>{ state.count = state.count + 1},
        decreament : state =>{ state.count = state.count - 1},
    }
})

export const { increament , decreament } = slice.actions;
export default slice.reducer;