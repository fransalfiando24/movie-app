import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Slider from './Slider';

function RecommendationMovies({ movieId }) {
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    getRecommendationMovies();
  }, [movieId])

  const getRecommendationMovies = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
    const data = await api.json();

    setRecommendation(data.results);
  }

  return (
    <RecommendationMoviesComponent>
      <h1>Recommendations</h1>
      <Slider movies={recommendation}/>
    </RecommendationMoviesComponent>
  )
}

const RecommendationMoviesComponent = styled.div`
  margin-bottom: 2rem; 
  padding: 0 4rem;
  h1{
    color: #f3da35;
  }
  @media only screen and (max-width: 720px){
      padding: 0 1rem;
  }
`
export default RecommendationMovies