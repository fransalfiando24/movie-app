import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Loader from '../components/utils/Loader';
import VideoList from '../components/VideoList';

function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(true);

  let params = useParams();

  useEffect(() => {
    getMovieDetails();
    getMovieCast();
  }, [params.id])

  const getMovieDetails = async() =>{
    setLoading(true);
    const api = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    const data = await api.json();

    setMovieDetail(data);
    setMovieGenres(data.genres);
    setLoading(false);
  }

  const getMovieCast = async() =>{
    const cast = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    const castData = await cast.json();
    setMovieCast(castData.cast);
  }

  const moviePoster = `https://image.tmdb.org/t/p/w500${movieDetail.poster_path || movieDetail.backdrop_path}`
  const movieBackground = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`
  
  if (loading) return <Loader/>
  return (
    <MovieDetailComponent>
      <div className='movie-background'>
        <img src={movieBackground} alt={movieDetail.title}/>
      </div>
      <div className='movie-container'>
        <img src={moviePoster} alt={movieDetail.title} className='movie-poster'/>
        <div className='movie-detail'>
          <h1 className='movie-title'>{movieDetail.title}</h1>
          <div className='movie-genre'>
            {movieGenres.map((genre,i) =>{
              return(
                <p key={i}>{genre.name}</p>
              )
            })}
          </div>
          <p className='movie-overview'>{movieDetail.overview}</p>
          <p className='movie-rating'>
             <span><FontAwesomeIcon icon={faStar} style={{color: '#f3da35'}}/></span>
             {Number(movieDetail.vote_average).toFixed(1)}
          </p>
          <div className='movie-cast'>
            <h2>Cast</h2>
            <div className='movie-cast-list'>
              {movieCast.slice(0, 5).map((cast, i) => {
                  const movieCastImg = `https://image.tmdb.org/t/p/original${cast.profile_path}`
                  return (
                    <div className='movie-cast-item' key={i}>
                      <img src={movieCastImg} alt="" className='movie-cast-img'/>
                      <p key={i}>{cast.name}</p>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
      <VideoList movieId={params.id}/>
    </MovieDetailComponent>
  )
}

const MovieDetailComponent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #101010;

  .movie-background{
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
    display:inline-block;
    img{
      width: 100%; 
      display: block;
    }
  }

  .movie-background:after {
    content:'';
    position:absolute;
    left:0; 
    top:0;
    width:100%;
    height:100%;
    display:inline-block;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,#101010 100%);
  }

  .movie-container{
    position: relative;
    background: #fff;
    display: flex;
    /* height: 100%; */
    gap: 2rem;
    justify-content: center;
    padding: 10rem 4rem 2rem 4rem;
    background-color: #10101066;
    backdrop-filter: blur(1px);
    .movie-poster{
      border-radius: 8px;
      width: 30rem;
      height: 600px;
    }

    .movie-detail{
      height: 100%;
      .movie-title{
        font-size: 4rem;
        margin-bottom: -0.6rem;
      }
      .movie-genre{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 1.3rem 0; 
        p{
          padding: .2rem 1rem;
          border-radius: 20px;
          border: 1px solid #f3da35;
          margin: 0;
        }
      }
      .movie-rating{
        font-size: 1.2rem;
        span{
          margin-right: 5px;
        }
      }
      .movie-cast{
        position: relative;
        .movie-cast-list{
          position: relative;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          .movie-cast-item{
            text-align: center;
            .movie-cast-img{
              border-radius: 8px;
              width: 120px;
              height: 150px;
              transition: all .3s;
              box-shadow: 2px 2px 20px #000;
              :hover{
                transform: scale(1.02);
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 720px){
    .movie-container{
      padding: 10rem 1rem 1rem 1rem;
      .movie-detail{
        .movie-title{
          font-size: 3.3rem;
          margin-bottom: 1.3rem;
        }
        .movie-overview{
          font-size: 1.4rem;
        }
        .movie-rating{
          font-size: 2rem;
        }
        .movie-genre{ 
          gap: .5rem;
          align-items: center;
          p{
            font-size: 1.1rem;
          }
        }
      }
  }
    /* .movie-cast-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }     */
  }

  @media only screen and (max-width: 960px){
      .movie-poster{
        display: none;
      }
  }
`

export default MovieDetail

