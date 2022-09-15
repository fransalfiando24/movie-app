import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components';

const VideoList = ({ movieId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMovieVideo();
  }, [movieId])

  const getMovieVideo = async () => {
    const api = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    const data = await api.json();
    // data.results.map((item,i) => {
    //   if(item.type == "Trailer"){
    //     setVideos(item);
    //   }
    //   return;
    // })

    setVideos(data.results);
  }

  return (
    <VideoListComponent>
      {videos.map((video, i) => {
        if (video.type == "Trailer") {
          return (
            <div className='video-item' key={i}>
              <p className='video-title'>{video.name}</p>
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                width="100%"
                title='video'
                frameBorder='0'
              ></iframe>
            </div>
          )
        }
        return;
      })}
    </VideoListComponent>
  )
}

const VideoListComponent = styled.div`
  position: relative;
  /* top: 100%;
  left: 0;
  transform: translate(0,-100%); */
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  .video-item{
    .video-title{
      font-size: 1.3rem;
      font-weight: 700;
    }

    iframe{
      border-radius: 10px;
      height: 500px;
      box-shadow: 3px 3px 15px #000;
      @media only screen and (max-width: 720px){
        height: 350px;
      }
    }
  }

  @media only screen and (max-width: 720px){
    padding: 2rem 1rem;
  }
`

export default VideoList