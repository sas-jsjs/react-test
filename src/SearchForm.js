import React, { useState } from "react";
import { withRouter } from "react-router";
import { Alert } from "react-bootstrap";
import styled from "styled-components";

const StyledAlert = styled.p`
  color: red;
`;

const specialChar = ["/", "%"];
const SearchForm = (props) => {
  const [query, setQuery] = useState(null);
  const [error, setError] = useState("");

  const handleInput = (event) => {
    setError("");
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const invalidQuery = specialChar.filter((char) => query.includes(char));

    if (!invalidQuery.length) {
      props.history.push(`/search/${query}`);
    } else {
      setError(
        `Please, avoid using these characters: ${specialChar.join(", ")}`
      );
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          className="form-control"
          placeholder="Search"
          onChange={handleInput}
        />
        <br />
        {error && <StyledAlert>{error}</StyledAlert>}
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  );
};

export default withRouter(SearchForm);
