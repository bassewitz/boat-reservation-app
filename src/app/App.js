import React from 'react'
import styled from 'styled-components'
import BoatPicture from '../pics/boatyellow.png'
import Booking from '../booking/Booking'
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
const StyledForm = styled.form`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: normal;
  margin-left: 18px;
  grid-gap: 10px;
`

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
        <StyledForm>
          <label>
            Name:
            <br />
            <input placeholder="name" type="text" name="name" />
          </label>
          <br />
          <input type="submit" value="Buchen" />
        </StyledForm>
      </div>
    </React.Fragment>
  )
}

export default App
