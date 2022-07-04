import React from "react";
import { useParams } from "react-router-dom";

const RepoDetails = () => {
  const { id } = useParams();
  console.log({ id });
  return <div>RepoDetails</div>;
};

export default RepoDetails;
