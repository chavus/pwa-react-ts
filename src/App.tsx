import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// const About = lazy(()=> import('./pages/About'));
// const Home = lazy(()=> import('./pages/Home'));

import About from './pages/About';
import Home from './pages/Home';

function App():JSX.Element {
  return (

  <Router>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    {/* </Suspense> */}
  </Router>


  );
}

export default App;
