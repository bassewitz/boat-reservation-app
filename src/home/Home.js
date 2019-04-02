import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BoatPicture from '../pics/Coverohneweiss.png'
import Green from '../pics/background-green.png'
import Logoweiss from '../pics/logoweiss.svg'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

const Styledlogo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 20px 0 0;
`
const StyledHeadline = styled.div`
  padding: 100px 0px 0px 20px;
  color: white;
  text-decoration: uppercase;
  font-size: 62px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  line-height: 0.9em;
  text-transform: uppercase;
  top: 0;
  height: 85vh;
`
const StyledBackgroundimg = styled.div`
  background-image: url(${Green}), url(${BoatPicture});
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom left;
  margin: -50px 0 0 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-size: 100% 100%, cover;
`

const StyledArrow = styled.span`
  font-size: 15px;
  color: white;
  font-weight: normal;
  position: absolute;
  margin: 0 0 0px 10px;
`
const StyledButtonReservieren = styled.button`
  background: darkturquoise;
  border: none;
  border-radius: 2px;
  color: white;
  font-weight: normal;
  font-size: 13px;
  padding: 5px 30px 5px 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 25px 80px 0;
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
        <h2>Suche Dir ein Boot aus und erkunde die Alster</h2>
        <NavLink to="/reservieren">
          <StyledButtonReservieren>
            Reservieren
            <StyledArrow>
              <FaAngleDoubleRight />
            </StyledArrow>
          </StyledButtonReservieren>
        </NavLink>
      </StyledBackgroundimg>
    </div>
  )
}

export default Home
