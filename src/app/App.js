import React from 'react'
import styled from 'styled-components'
import BoatPicture from '../pics/boatyellow.png'
import Green from '../pics/background-green.png'
import Booking from '../booking/Booking'
import GlobalStyle from './GlobalStyle'

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
const StyledForm = styled.form`
  font-family: 'Roboto';
  font-weight: normal;
  margin-left: 20px ;
`

const StyledInputBuchen = styled.input`
  border: none;
  border-radius: none;
  background: turquoise;
  padding-left: 4px;
  color: white;
  border-radius: 0px;
  font-weight: normal;
  font-size: 13px;
  padding: 5px 145px;
  margin: 30px  0 150px 0;
`

const StyledInputName = styled.input`
  appearance: none;
  border: 1px solid #ddd;
  border-radius: none;
  background: white;
  padding: 5px 184px 5px 5px;
  margin: 2px 0 0 0;
  font-size: 12px;
  font-weight: bolder;
  color: dimgrey;
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div css="padding: 0 0 0; overflow-y: scroll">
        <StyledBackgroundimg>
          <StyledHeadline>
            <br />
            Max <br />
            Moritz & <br />
            Mosquito
          </StyledHeadline>
          <a href="#booking">
            <button>Reservieren</button>
          </a>
        </StyledBackgroundimg>

        <Booking />
        <StyledForm>
          <label>
            Name:
            <br />
            <StyledInputName
              placeholder="Nachname, Vorname"
              type="text"
              name="name"
            />
          </label>
          <label>
            Email:
            <br />
            <StyledInputName
              placeholder="Max@google.com"
              type="text"
              name="name"
            />
          </label>
          <br />
          <StyledInputBuchen type="submit" value="Buchen" />
        </StyledForm>
      </div>
    </React.Fragment>
  )
}

export default App
