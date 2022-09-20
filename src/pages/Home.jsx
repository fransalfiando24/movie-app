import React from 'react'
import PopularMovies from '../components/PopularMovies'
import {Link} from 'react-router-dom'
import NowPlayingMovie from '../components/NowPlayingMovie'
import UpcomingMovies from '../components/UpcomingMovies'
import UpcomingIndonesia from '../components/UpcomingIndonesi'

function Home() {
  return (
    <>
      <NowPlayingMovie/>
      <PopularMovies/>
      <UpcomingMovies/>
      <UpcomingIndonesia/>
    </>
  )
}

export default Home