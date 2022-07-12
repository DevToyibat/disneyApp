import React from "react";
import MovieDetails from "./movieDetails";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomeContainer = () => {
  return (
    <div>
      {/* <MovieDetails /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route
            path="/movieDetails/:myId"
            exact
            component={MovieDetails}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default HomeContainer;
