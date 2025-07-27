import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch,useSelector } from "react-redux";
import { setLanguageValue } from "../../slice/MovieSlice";

export default function LanguageSelector() {

  const dispatch = useDispatch();

  const selectedVal = useSelector(state => state.Movies.LanguageValue);

  const handleChange = (event) => {
    dispatch(setLanguageValue(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
      <InputLabel id="demo-simple-select-autowidth-label" style={{ color: "white" }}>
        Language
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
        value={selectedVal || ''}
        label="LanguageFilter"
        onChange={handleChange}
        autoWidth
        style={{ border: "1px solid white" }}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ja">Japanese</MenuItem>
        <MenuItem value="zh">Chinese</MenuItem>
        <MenuItem value="ko">Korean</MenuItem>
        <MenuItem value="nl">Dutch</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
        <MenuItem value="hi">Hindi</MenuItem>
        <MenuItem value="th">Thai</MenuItem>
        <MenuItem value="id">Indonesian</MenuItem>
        <MenuItem value="te">Telugu</MenuItem>
      </Select>
    </FormControl>
  );
}
