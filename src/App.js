import React from "react";
import Search from "./Search.js";
import { Bootstrap } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <h1>GitHub Search</h1>
        <Search />
      </div>
    </Router>
  );
};

export default App;
