import React from "react";
import {HashRouter as Router, Link} from 'react-router-dom'
import styled from "styled-components";
import Navbar from "./components/Navbar";
import PopularMovies from "./components/PopularMovies";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <MovieApp>
      <Router>
        <Navbar/>
        <Pages/>
      </Router>
    </MovieApp>
  );
}

const MovieApp = styled.div`
  background-color: #101010;
  color: #fff;
  padding : 0 4rem;
  @media only screen and (max-width: 720px){
    padding : 0 1rem;
  }
`

export default App;
