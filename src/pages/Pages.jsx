import React from 'react'
import { Route, Routes, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import MovieDetail from './MovieDetail';
import Movies from './Movies';
import Searched from './Searched';

function Pages() {
  return (
    <PagesComponent>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/detail/:id' element={<MovieDetail/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
      </Routes>
    </PagesComponent>
  )
}

const PagesComponent = styled.div`
  margin-top: 5rem;
`

export default Pages