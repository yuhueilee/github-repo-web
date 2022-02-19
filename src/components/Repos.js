import React, { useState, useRef, useCallback } from 'react';
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

  const observer = useRef();
  const lastRepoElementRef = useCallback(node => {
    // prevent calling observer when data is still loading
    if (loading) return;
    // disconnect the current observer
    if (observer.current) observer.current.disconnect();
    // initialize a new observer and update page number if there's more to load
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    // observe the last node
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <div>
      <h2 className='font heading text-center'>{username}'s Repository List</h2>
      {repos.map((repo, index) => {
        if (repos.length === index + 1) {
          return (
            <div ref={lastRepoElementRef} key={repo.full_name}>
              <p className='font'>Repository Name: <b>{repo.name}</b></p>
              <p className='font'>Star Count: <b>{repo.stargazers_count}</b></p>
              <Link className='font' to={`/users/${username}/repos/${repo.name}`}>Click Me</Link>
            </div>
          );
        } else {
          return (
            <div key={repo.full_name}>
              <p className='font'>Repository Name: <b>{repo.name}</b></p>
              <p className='font'>Star Count: <b>{repo.stargazers_count}</b></p>
              <Link className='font' to={`/users/${username}/repos/${repo.name}`}>Click Me</Link>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Repos;