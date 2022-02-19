import React, { useState, useRef, useCallback } from 'react';
import { useParams } from "react-router-dom";
import useReposSearch from './useReposSearch';

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia
} from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import GitIcon from './github-icon.png';
import './Components.css';

function Repos() {
  // get the param in the route
  const { username } = useParams();

  // create state for page number and default to 1
  const [pageNumber, setPageNumber] = useState(1);

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
        setTimeout(() => {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }, 1000);
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
            <Card className="card" ref={lastRepoElementRef} sx={{ display: 'flex' }} key={repo.full_name}>
              <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <CardMedia component="img" sx={{ width: 100 }} image={GitIcon} alt="Repo Icon" />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {repo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarsIcon sx={{ mr: 1 }} fontSize="inherit" />
                      Star Count: {repo.stargazers_count}
                    </Typography>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          );
        } else {
          return (
            <Card className="card" sx={{ display: 'flex' }} key={repo.full_name}>
              <CardActionArea sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <CardMedia component="img" sx={{ width: 100 }} image={GitIcon} alt="Repo Icon" />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {repo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                      <StarsIcon sx={{ mr: 0.3 }} fontSize="inherit" />
                      Star Count: {repo.stargazers_count}
                    </Typography>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          );
        }
      })}
      <div className='font text text-center'>{loading && "Loading..."}</div>
      <div className='font text text-center'>{error && "An error occurred"}</div>
    </div>
  );
}

export default Repos;