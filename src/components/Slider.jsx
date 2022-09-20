import React from 'react'
import MovieCard from './MovieCard';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

const Slider = ({ movies }) => {
  return (
    <Splide
      options={{
        perPage: 4,
        perMove: 1,
        arrows: true,
        pagination: false,
        autoplay: true,
        interval: 3500,
        pauseOnFocus: true,
        type: 'loop',
        gap: '1rem',
        breakpoints: {
          1200: { perPage: 3 }, 
          800: { perPage: 2 },
        },
      }}
    >
      {movies.map((movie, index) => {
        const moviePoster = `https://image.tmdb.org/t/p/original${movie.poster_path || movie.backdrop_path}`
        const movieYear = movie.release_date.split('-');
        return (
          <SplideSlide key={index}>
            <Card>
              <Link to={'/detail/' + movie.id}>
                <Gradient />
                <img src={moviePoster} alt={movie.title} />
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
  )
}

const Card = styled.div`
    height: 28rem;
    overflow: hidden;
    position: relative;
    border-radius: 8px;
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
        bottom: 5%;
        transform: translate(0%, -5%);
        width: 100%;
        padding: 0 1rem;
        text-align: left;
        font-weight: 600;
        color: #fff;
        h2{
          color: #f3da35;
          font-size: 1rem;
          margin-bottom: -0.7rem;
        }
        @media only screen and (min-width: 720px){
          h2{
            font-size: 1.2rem;
            margin-bottom: -0.7rem;
          }
        }
    }
    @media only screen and (max-width: 720px){
      height: 20rem;
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
export default Slider