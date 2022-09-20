import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Slider from './Slider';

function UpcomingIndonesia() {
  const [upcomingIndo, setUpcomingIndo] = useState([]);

  useEffect(() => {
    getUpcomingIndonesia();
  }, [])

  const getUpcomingIndonesia = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=ID&page=1`);
    const data = await api.json();

    setUpcomingIndo(data.results);
  }

  return (
    <UpcomingIndonesiaComponent>
      <h1>Upcoming in Indonesia</h1>
      <Slider movies={upcomingIndo}/>
    </UpcomingIndonesiaComponent>
  )
}

const UpcomingIndonesiaComponent = styled.div`
  margin-bottom: 2rem; 
  h1{
    color: #f3da35;
  }
  @media only screen and (max-width: 720px){
      padding: 0 1rem;
  }
`
export default UpcomingIndonesia