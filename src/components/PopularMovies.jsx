import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import MovieCard from './MovieCard';
import Loader from './utils/Loader';

function PopularMovies() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies();
  },[])

  const getPopularMovies = async() => {
      setLoading(true);
      const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
      const data = await api.json();
      
      sessionStorage.setItem('popularMovie', JSON.stringify(data.results));
      setPopular(data.results);
      setLoading(false);
  }

  if(loading) return <Loader/>
  
  return (
    <PopularMoviesComponent>
        <h2>Popular Movies</h2>
        <div className='movies-list'>
          {popular.map((movie, index) => {
            return <MovieCard key={index} {...movie}/>
          })}
        </div>
    </PopularMoviesComponent>
  )
}

const PopularMoviesComponent = styled.div`
  h2{
    color: #f3da35;
  }

  .movies-list{
    display: flex;
    flex-wrap: wrap;
    gap: .8rem; 
    justify-content: center;
  }
`

export default PopularMovies