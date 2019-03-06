import React from 'react'
import styled from 'styled-components'
import BoatPicture from '../pics/boatyellow.png'
import Booking from '../booking/Booking'
import Card from '../booking/Card'
import GlobalStyle from './GlobalStyle'

const StyledHeadline = styled.div`
  display: grid;
  align-content: flex-end;
  padding: 12px;
  color: white;
  text-decoration: uppercase;
  font-size: 65px;
  background: black;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  line-height: 1em;
  text-transform: uppercase;
  height: 300px;
`

const StyledBackgroundimg = styled.div`
  background-image: url(${BoatPicture});
  width: 375px;
  height: 408px;
`
/*const Styledspan = styled.span`
  font-family: 'Roboto', serif;
  font-size: 90px;
  font-weight: bold;
  line-height: 1em; 
`*/

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div css="padding: 10px 0 0; overflow-y: scroll">
        <StyledHeadline>
          Max <br />
          Moritz & <br />
          Mosquito
        </StyledHeadline>
        <StyledBackgroundimg>
          <a href="#booking">
            <button>Booking</button>
          </a>
        </StyledBackgroundimg>
        <Booking />
        <Card />
      </div>
    </React.Fragment>
  )
}

export default App
