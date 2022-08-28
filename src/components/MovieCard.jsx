import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function MovieCard({index, id, poster_path, backdrop_path, title, release_date}) {
  const moviePoster = `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`
    return(
      <MovieCardComponent key={index} to={'/detail/'+id}>
        <img src={moviePoster} alt={title}/>
        <h3>{title}</h3>
      </MovieCardComponent>
    )
}

const MovieCardComponent = styled(Link)`
  width: 18rem; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  text-align:center;
  text-decoration: none;
  color: #8a8a8a;

  img{
    height: 400px;
    border-radius: 8px;
    margin-bottom: -0.5rem;
    transition: all .5s;
    box-shadow: 3px 3px 15px #000;
    :hover{
      transform: scale(1.02);
    }
  }
`

export default MovieCard