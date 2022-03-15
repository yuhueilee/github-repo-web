import React from 'react';
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button
} from '@mui/material';
import './Components.scss';

function PageNotFound() {
  // create handler to navigate to a specific repo webpage
  const navigate = useNavigate();
  const routeChange = (reponame) => {
    const path = `/`;
    navigate(path);
  };

  return (
    <div>
      <h1 className='font text-center error-msg'>404</h1>
      <h2 className='font text-center white'>Sorry, the link does not exist...</h2>
      <Box textAlign='center'>
        <Button variant="contained" onClick={() => routeChange()} >Back to Home Page</Button>
      </Box>
    </div>
  );
}

export default PageNotFound;