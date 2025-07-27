import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setRatingValue } from "../../slice/MovieSlice";

export default function Ratingselect() {
  const dispatch = useDispatch();

  const selectedVal = useSelector((state) => state.Movies.RatingValue);

  const handleChange = (event) => {
    dispatch(setRatingValue(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
      <InputLabel
        id="demo-simple-select-autowidth-label"
        style={{ color: "white" }}
      >
        Rating
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={selectedVal || ""}
        label="RatingFilter"
        onChange={handleChange}
        autoWidth
        style={{ border: "1px solid white" }}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        <MenuItem value={6}>6+ Good</MenuItem>
        <MenuItem value={7}>7+ Very Good</MenuItem>
        <MenuItem value={8}>8+ Excellent</MenuItem>
        <MenuItem value={9}>9+ Outstanding</MenuItem>
      </Select>
    </FormControl>
  );
}
