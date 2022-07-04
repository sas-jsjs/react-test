import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm.js";
import RepoCard from "./RepoCard.js";
import { Col, Row } from "react-bootstrap";
import CustomPagination from "./CustomPagination.js";

const Results = ({ results, customQuery, updateResults }) => {
  const [query, setQuery] = useState(customQuery);

  const [page, setPage] = useState(1);

  const getData = () => {
    fetch(`https://api.github.com/search/repositories?page=${page}&&q=${query}`)
      .then((results) => results.json())
      .then((data) => {
        updateResults(data);
      });
  };

  useEffect(() => {
    getData();
  }, [page, query]);

  useEffect(() => {
    setQuery(customQuery);
  }, [customQuery]);

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
