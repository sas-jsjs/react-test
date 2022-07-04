import React from "react";
import Search from "./Search.js";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <Container>
      <h1>GitHub Search</h1>
      <Search />
    </Container>
  </Router>
);

export default App;
