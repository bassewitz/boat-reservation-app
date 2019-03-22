import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BoatPicture from '../pics/boatyellow.png'
import Green from '../pics/background-green.png'
import Logoweiss from '../pics/logoweiss.svg'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

const Styledlogo = styled.img`
  margin: 10px 0px 0 242px;
`

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
  margin: -50px 0 0 0;
  height: 100%;
  width: 100%;
`

const StyledArrow = styled.span`
  font-size: 15px;
  color: white;
  font-weight: normal;
  position: absolute;
  margin: 0 0 0px 10px;
`

function Home({ boats, setBoats, onSubmit }) {
  return (
    <div css="padding: 10px 0 0; overflow-y: scroll">
      <Styledlogo src={Logoweiss} alt="Logo" />
      <StyledBackgroundimg>
        <StyledHeadline>
          <br />
          Max <br />
          Moritz & <br />
          Mosquito
        </StyledHeadline>
        <h2>Suche dir ein Boot aus und erkunde die Alster</h2>
        <NavLink to="/reservieren">
          <button>
            Reservieren
            <StyledArrow>
              <FaAngleDoubleRight />
            </StyledArrow>
          </button>
        </NavLink>
      </StyledBackgroundimg>
    </div>
  )
}

export default Home
