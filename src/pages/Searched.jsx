import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard';
import styled from 'styled-components';
import Loader from '../components/utils/Loader';

function Searched() {
  const [searched, setSearched] = useState([]);
  const [loading, setLoading] = useState(true);

  let params = useParams();

  const getSearched = async(title) => {
    setLoading(true);
    const api = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`);
    const data = await api.json();

    setSearched(data.results);
    setLoading(false);
  }

  useEffect(() => {
    getSearched(params.search);
  },[params.search])

  if (loading) return <Loader/>
  if (searched.length == 0) {
    return (
      <NotFound>
        <h1>Not Found</h1> 
        <p>The movie you are looking for was not found. Please retype the title.</p>       
      </NotFound>
    )
  }

  
    
  return (
    <SearchedMoviesComponent>
      {searched.map((movie, index) => {
        return <MovieCard key={index} {...movie} />
      })}
      {/* <p>{params.search}</p> */}
    </SearchedMoviesComponent>
  )
}

const SearchedMoviesComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .8rem; 
    justify-content: center;
`
const NotFound = styled.div`
  min-height: 100vh;
  color: #f3da35;
  text-align: center;
  font-size: 1.1rem; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  h1{
    margin: 0;
  }
`

export default Searched