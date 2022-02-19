import React from 'react';
import { useParams } from "react-router-dom";

function Repo() {

  const { username, reponame } = useParams();

  return (
    <div>
      <h1>User {username} Repo {reponame}</h1>
    </div>
  );
}

export default Repo;