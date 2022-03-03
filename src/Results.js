import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm.js";

const Results = (props) => {
  const [query, setQuery] = useState(props.match.params.query);
  const [results, setResults] = useState(null);

  const getData = () => {
    fetch("https://api.github.com/search/repositories?q=" + query)
      .then((results) => results.json())
      .then((data) => {
        setResults(data);
      });
  };

  useEffect(() => {
    getData();
  }, [query]);

  useEffect(() => {
    setQuery(props.match.params.query);
  }, [props.match.params.query]);

  if (results) {
    return (
      <div>
        <SearchForm />
        <h2>Search found {results.total_count} results</h2>
      </div>
    );
  }

  return <SearchForm />;
};

export default Results;
