import React, { useState } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import SearchForm from "./SearchForm.js";
import Results from "./Results.js";
import RepoDetails from "./RepoDetails.js";

const Search = () => {
  const [results, setResults] = useState(null);
  const { query: customQuery } = useParams();

  const updateResults = (data) => {
    setResults(data);
  };
  return (
    <Switch>
      <Route exact path="/" component={SearchForm} />
      <Route path="/search/:query" exact>
        <Results
          results={results}
          customQuery={customQuery}
          updateResults={updateResults}
        />
      </Route>
      <Route path="/search/repo/:id">
        <RepoDetails results={results} />
      </Route>
    </Switch>
  );
};

export default Search;
