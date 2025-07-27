import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { setGenreValue } from "../../slice/MovieSlice";
import { useDispatch,useSelector } from "react-redux";

export default function GenreSelect() {


  const dispatch = useDispatch();

  const selectedVal = useSelector(state => state.Movies.GenreValue);

  const handleChange = (event) => {
    dispatch(setGenreValue(event.target.value));
  };
  

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label" style={{ color: "white" }}>
        Genre
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedVal || ""}
        label="genre"
        onChange={handleChange}
        style={{ border: "1px solid white" }}
      >
        <MenuItem value={''}>
          <em>All</em>
        </MenuItem>
        <MenuItem value={28}>Action</MenuItem>
        <MenuItem value={35}>Comedy</MenuItem>
        <MenuItem value={18}>Drama</MenuItem>
        <MenuItem value={27}>Horror</MenuItem>
        <MenuItem value={10749}>Romance</MenuItem>
        <MenuItem value={53}>Thriller</MenuItem>
        <MenuItem value={878}>Sci-Fi</MenuItem>
        <MenuItem value={14}>Fantasy</MenuItem>
        <MenuItem value={12}>Adventure</MenuItem>
        <MenuItem value={16}>Animation</MenuItem>
        <MenuItem value={80}>Crime</MenuItem>
        <MenuItem value={9648}>Mystery</MenuItem>
      </Select>
    </FormControl>
  );
}
