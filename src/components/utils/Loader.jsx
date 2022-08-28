import React from 'react'
import { HashLoader } from 'react-spinners'
import styled from 'styled-components'

function Loader() {
  return (
    <LoaderComponent>
      <HashLoader color='#f3da35'/>
    </LoaderComponent>
  )
}

const LoaderComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export default Loader