import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import useReposSearch from './useReposSearch';

import './Components.css';

function Repos() {
  // get the param in the route
  const { username } = useParams();

  // create state for page number and default to 1
  const [ pageNumber, setPageNumber ] = useState(1);

  // get the repos using hook
  const { 
    loading, 
    error, 
    repos, 
    hasMore 
  } = useReposSearch(username, pageNumber);

  return (
    <div>
      <h2 className='font heading text-center'>{username}'s Repository List</h2>
      {repos.map(repo => {
        return (
          <div>
            <p className='font'>Repository Name: <b>{repo.name}</b></p>
            <p className='font'>Star Count: <b>{repo.stargazers_count}</b></p>
            <Link className='font' to={`/users/${username}/repos/${repo.name}`}>Click Me</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Repos;