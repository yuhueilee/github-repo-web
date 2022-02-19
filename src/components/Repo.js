import React from 'react';
import { useParams } from "react-router-dom";
import useRepoSearch from './useRepoSearch';

import './Components.css';

function Repo() {
  // get the params in the route
  const { username, reponame } = useParams();

  // get the repo using hook
  const { 
    loading, 
    error, 
    repo
  } = useRepoSearch(username, reponame);

  return (
    <div>
      <h2 className='font'>{repo?.full_name}</h2>
      <p className='font'>Description: {repo?.description}</p>
      <p className='font'>Start Count: {repo?.stargazers_count}</p>
      <p className='font'>See more in <a href={repo?.html_url} target="_blank" rel="noreferrer">GitHub</a></p>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </div>
  );
}

export default Repo;