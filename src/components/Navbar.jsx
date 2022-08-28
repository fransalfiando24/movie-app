import React from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
  return (
    <NavbarComponent>
      <div className='container'>
        <Link to='/'>Mo<span>vlix</span></Link>
        <Search/>
      </div>
    </NavbarComponent>
  )
}

const NavbarComponent = styled.div`
  width: 100%;  
  margin: 0 auto;
  position: fixed;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  color: white;
  z-index: 999;
  backdrop-filter: blur(5px);

  .container{
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 4rem;
  }

  a {
    position: relative;
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    margin: 0;

    span{
      color: #f3da35;
      font-style: italic;
    }
    @media only screen and (max-width: 420px){
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 720px){
    .container{
      padding: 1rem;
    }
  }
`

export default Navbar