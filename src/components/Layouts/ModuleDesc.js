import React from "react";
import { useParams } from "react-router-dom";

const ModuleDesc = (props) => {
  const params = useParams();
  return <h1>Welcome to Module Desc {JSON.stringify(params)}</h1>;
};

export default ModuleDesc;
