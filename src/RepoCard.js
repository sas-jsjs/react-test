import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  color: #000;
`;

const StyledImage = styled(Card.Img)`
  width: 65px;
  height: 65px;
  margin-right: 10px;
  border-radius: 100%;
  margin-bottom: 15px;
`;

const RepoCard = ({ id, name, url }) => (
  <Link to={`/search/repo/${id}`}>
    <StyledCard>
      <StyledImage variant="top" src={url} />
      <Card.Body>
        <Card.Title>Repository name: {name}</Card.Title>
      </Card.Body>
    </StyledCard>
  </Link>
);

export default RepoCard;
