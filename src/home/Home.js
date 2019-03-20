import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BoatPicture from '../pics/boatyellow.png'
import Green from '../pics/background-green.png'

const StyledHeadline = styled.div`
  margin: -10px 0 0 0px;
  padding: 0px 0px 0px 20px;
  color: white;
  text-decoration: uppercase;
  font-size: 62px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  line-height: 0.9em;
  text-transform: uppercase;
  height: 100vh;
`
const StyledBackgroundimg = styled.div`
  background-image: url(${Green}), url(${BoatPicture});
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom left;
  margin: 0px;
  padding: 0px;
`
const styledTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 530px 230px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: white;
  opacity: 0.5;
  position: absolute;
  transition: all 0.4s ease;
  bottom: 0;
  right: 0;
`

function Home({ boats, setBoats, onSubmit }) {
  return (
    <div css="padding: 10px 0 0; overflow-y: scroll">
      <StyledBackgroundimg>
        <StyledHeadline>
          <br />
          Max <br />
          Moritz & <br />
          Mosquito
        </StyledHeadline>
        <h2>Reserviere ein Boot und erkunde die Alster</h2>
        <button>Reservieren</button>
      </StyledBackgroundimg>
    </div>
  )
}

export default Home
