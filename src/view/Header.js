import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Favorite, Home } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { darkModeToggle } from "../state/weather.slice";
import Brightness4Icon from "@material-ui/icons/Brightness4";

// CSS STYLES

const Header = () => {
  const darkMode = useSelector((state) => state.weather.darkMode);
  const dispatch = useDispatch();

  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          style={{ background: darkMode ? "#E9EBEE" : "#202020" }}
        >
          <Container>
            <Toolbar>
              <IconButton component={Link} to="/favorite">
                <Favorite style={{ color: darkMode ? "black" : "white" }} />
                <Typography variant="subtitle2">Favorite</Typography>
              </IconButton>
              <IconButton component={Link} to="/">
                <Home style={{ color: darkMode ? "black" : "white" }} />
                <Typography variant="subtitle2">Home</Typography>
              </IconButton>
              <IconButton onClick={() => dispatch(darkModeToggle(!darkMode))}>
                <Brightness4Icon
                  style={{ color: darkMode ? "black" : "white" }}
                />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
