import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm.js";
import RepoCard from "./RepoCard.js";
import { Col, Row, Container } from "react-bootstrap";
import CustomPagination from "./CustomPagination.js";

const Results = (props) => {
  const [query, setQuery] = useState(props.match.params.query);
  const [results, setResults] = useState(null);
  const [page, setPage] = useState(1);

  const getData = () => {
    fetch(`https://api.github.com/search/repositories?page=${page}&&q=${query}`)
      .then((results) => results.json())
      .then((data) => {
        setResults(data);
      });
  };

  useEffect(() => {
    getData();
  }, [page, query]);

  useEffect(() => {
    setQuery(props.match.params.query);
  }, [props.match.params.query]);

  const updatePageNum = (newPageNum) => {
    setPage(newPageNum);
  };

  if (results) {
    return (
      <div>
        <SearchForm />
        <h2>Search found {results.total_count} results</h2>
        <Row>
          {results.items.map((repo) => (
            <Col xs={12} sm={4} key={repo.id}>
              <RepoCard
                id={repo.id}
                name={repo.name}
                url={repo.owner?.avatar_url}
              />
            </Col>
          ))}
        </Row>
        <CustomPagination page={page} updatePageNum={updatePageNum} />
      </div>
    );
  }

  return <SearchForm />;
};

export default Results;
