import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import GenreSelect from "../select/Genreselect";
import Ratingselect from "../select/ratingSelect";
import LanguageSelector from "../select/languageSelect";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../slice/MovieSlice";
import debounce from "lodash/debounce";
import { useEffect, useMemo } from "react";
import "../../style/global.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Custom hover color
    borderColor: "rgba(255, 255, 255, 0.4)", // Hover border
    transform: "scale(1.01)", // Add hover animation
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  transition: "all 0.3s ease",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    
  },
}));

const MainLogo = {
  fontFamily: "Bebas Neue, sans-serif",
  fontWeight: 400,
};

export default function Navbar() {
  const dispatch = useDispatch();

  const { SearchValue } = useSelector((state) => state.Movies);

  const debouncedDispatch = useMemo(
    () =>
      debounce((value) => {
        dispatch(setSearchValue(value));
      }, 500), 
    [dispatch]
  );

  useEffect(() => {
    return () => {
      debouncedDispatch.cancel();
    };
  }, [debouncedDispatch]);

  const searchHandler = (e) => {
    debouncedDispatch(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className={'Navbar'}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              style={MainLogo}
            >
              MovieApp
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Movie…"
                inputProps={{ "aria-label": "search" }}
                onChange={searchHandler}
              />
            </Search>
          </Box>
          <Box>
            <LanguageSelector />
            <Ratingselect />
            <GenreSelect />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
