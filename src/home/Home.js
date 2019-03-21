import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BoatPicture from '../pics/boatyellow.png'
import Green from '../pics/background-green.png'
import Logoweiss from '../pics/logoweiss.svg'
import { FaAngleDoubleRight } from 'react-icons/fa'

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
  background-image: url(${Logoweiss}), url(${Green}), url(${BoatPicture});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top right, top left, bottom left;
  height: 20%;
  width: 100%;
  height: auto;
  padding: 20px, 0, 0;
`

const Arrow = styled.span`
  font-size: 15px;
  color: white;
  font-weight: normal;
  position: absolute;
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
        <h2>Suche dir ein Boot aus und erkunde die Alster</h2>

        <button to="/reservieren">
          Reservieren
          <Arrow>
            <FaAngleDoubleRight />
          </Arrow>
        </button>
      </StyledBackgroundimg>
    </div>
  )
}

export default Home
