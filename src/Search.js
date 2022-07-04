import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchForm from "./SearchForm.js";
import Results from "./Results.js";
import RepoDetails from "./RepoDetails.js";

const Search = () => (
  <Switch>
    <Route exact path="/" component={SearchForm} />
    <Route path="/search/:query" exact component={Results} />
    <Route path="/search/repo/:id" component={RepoDetails} />
  </Switch>
);

export default Search;
