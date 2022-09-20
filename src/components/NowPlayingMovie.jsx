import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function NowPlayingMovie() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
  },[])

  const getNowPlayingMovies = async() => {
    const check = sessionStorage.getItem('nowPlayingMovie');
        
    if(check){
      setNowPlaying(JSON.parse(check));
    }
    else{
      const api = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
      const data = await api.json();
      
      sessionStorage.setItem('nowPlayingMovie', JSON.stringify(data.results));
      setNowPlaying(data.results);
    }
  }
  
  return (
    <NowPlayingMoviesComponent>
        <Splide
          options = {{
            perPage: 1,
            perMove: 1,
            arrows: true,
            pagination: false,
            autoplay: true,
            interval: 3500,
            pauseOnFocus: true,
            type: 'loop',
            gap: '1rem',
            breakpoints: {
                800: { perPage: 1},
            },
          }}
        >
          {nowPlaying.map((movie, index) => {
            const moviePoster = `https://image.tmdb.org/t/p/original${movie.poster_path || movie.backdrop_path}`
            const movieYear = movie.release_date.split('-');
            return (
              <SplideSlide key={index}>
                <Card>
                  <Link to={'/detail/'+movie.id}>
                    <Gradient/>
                    <img src={moviePoster} alt={movie.title}/>
                    <div className='movie-desc'>
                      <h2>{movie.title}</h2>
                      <p>{movieYear[0]}</p>
                    </div>
                  </Link>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
    </NowPlayingMoviesComponent>
  )
}

const NowPlayingMoviesComponent = styled.div`
  h2{
    color: #f3da35;
  }
`

const Card = styled.div`
    min-height: 30rem;
    overflow: hidden;
    position: relative;
    :hover{
      img{
        transform: scale(1.05);
      }
    }
    img{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s;  
    }
    .movie-desc{
        position: absolute;
        z-index: 99;
        left: 0%;
        bottom: 10%;
        transform: translate(0%, -20%);
        width: 100%;
        padding: 0 4rem;
        text-align: left;
        font-weight: 600;
        color: #fff;
        h2{
          font-size: 2rem;
          margin-bottom: -0.7rem;
        }
        @media only screen and (max-width: 720px){
          padding: 0 1rem;
        }
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), #101010ff);
`

export default NowPlayingMovie