import React from 'react';
import { useParams } from "react-router-dom";

function Repos() {

  const { username } = useParams();

  return (
    <div>
      <h1>User {username}</h1>
    </div>
  );
}

export default Repos;