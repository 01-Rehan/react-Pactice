import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function LanguageSelector() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label" style={{ color: "white" }}>
        Language
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        style={{ border: "1px solid white" }}
      >
        <MenuItem value="">
          <em>None</em>
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
