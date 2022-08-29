import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterComponent>
      <p>&copy; 2022 - Fran's Alfiando</p>
    </FooterComponent>
  )
}

const FooterComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6b6b6b;
  z-index: 99;
  /* background-color: #fff; */
`

export default Footer