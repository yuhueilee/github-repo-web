import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Repos from './components/Repos';
import Repo from './components/Repo';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/users/yuhueilee/repos" />} />
          <Route path='/users/:username/repos' element={<Repos />} />
          <Route path='/users/:username/repos/:reponame' element={<Repo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
