import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Slider from './Slider';

function UpcomingMovies() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getUpcomingMovies();
  }, [])

  const getUpcomingMovies = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US&page=1`);
    const data = await api.json();

    setUpcoming(data.results);
  }

  return (
    <UpcomingMoviesComponent>
      <h1>Coming Soon</h1>
      <Slider movies={upcoming}/>
    </UpcomingMoviesComponent>
  )
}

const UpcomingMoviesComponent = styled.div`
  margin-bottom: 2rem; 
  h1{
    color: #f3da35;
  }
  @media only screen and (max-width: 720px){
      padding: 0 1rem;
  }
`
export default UpcomingMovies