import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const RepoCard = ({ id, name, url }) => (
  <Link to={`/search/repo/${id}`}>
    <Card style={{ display: "flex", alignItems: "center", color: "#000" }}>
      <Card.Img
        style={{
          width: "65px",
          borderRadius: "100%",
          height: "65px",
          marginRight: "10px",
          marginBottom: "10px",
        }}
        variant="top"
        src={url}
      />
      <Card.Body>
        <Card.Title>Repository name: {name}</Card.Title>
      </Card.Body>
    </Card>
  </Link>
);

export default RepoCard;
