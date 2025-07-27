import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch,useSelector } from "react-redux";
import { setRatingValue } from "../../slice/MovieSlice";

export default function Ratingselect() {

  const dispatch = useDispatch();

  const selectedVal = useSelector(state => state.Movies.RatingValue);

  const handleChange = (event) => {
    dispatch(setRatingValue(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label" style={{ color: "white" }}>
        Rating
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedVal || ""}
        label="RatingFilter"
        onChange={handleChange}
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
