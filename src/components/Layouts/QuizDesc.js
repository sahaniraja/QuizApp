import React from "react";
import { useParams } from "react-router-dom";

const QuizDesc = ({ data }) => {
  const params = useParams();
  return <h1>Welcome to QuizDesc {params.title}</h1>;
};

export default QuizDesc;
