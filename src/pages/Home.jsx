import React from 'react'
import PopularMovies from '../components/PopularMovies'
import {Link} from 'react-router-dom'
import NowPlayingMovie from '../components/NowPlayingMovie'

function Home() {
  return (
    <>
      <NowPlayingMovie/>
      <PopularMovies/>
    </>
  )
}

export default Home