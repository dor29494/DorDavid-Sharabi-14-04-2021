import React, { useState } from "react";
import Header from "./view/Header";
import Weather from "./view/Weather";
import Favorite from "./view/Favorite";
import { Switch, Route } from "react-router-dom";
import { Container, CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme, { darkTheme } from "./utils/theme";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";


const useStyles = makeStyles((theme) => ({
  appContainer: {
    height: "100%",
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
}));
function App() {
  const darkMode = useSelector((state) => state.weather.darkMode);
  const classes = useStyles();
  const [light, setLight] = useState(false);
  return (
    <MuiThemeProvider theme={darkMode ? theme : darkTheme}>
      <CssBaseline />
      <div className="App" style={{ height: "100vh" }}>
        <Header/>
        <Container className={classes.appContainer}>
          <Switch>
            <Route exact path="/">
              <Weather />
            </Route>
            <Route path="/favorite">
              <Favorite />
            </Route>
          </Switch>
        </Container>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
