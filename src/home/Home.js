import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BoatPicture from '../pics/boatyellow.png'
import Green from '../pics/background-green.png'
import Booking from '../booking/Booking'

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
  margin-left: 20px;
`

const StyledInputBuchen = styled.input`
  border: none;
  border-radius: none;
  background: darkturquoise;
  padding-left: 4px;
  color: white;
  border-radius: 0px;
  font-weight: normal;
  font-size: 13px;
  padding: 5px 145px;
  margin: 30px 0 150px 0;
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

function Home({ boats, setBoats, onSubmit }) {
  const defaultData = {
    date: '',
    name: '',
    email: '',
  }
  const [bookingData, setBookingData] = useState(defaultData)

  function changeHandler(event) {
    setBookingData({
      ...bookingData,
      [event.target.name]: event.target.value,
    })
    console.log(bookingData)
  }
  function submitHandler(event) {
    event.preventDefault()
    onSubmit({ ...bookingData })
    setBookingData(defaultData)
  }
  useEffect(() => {
    console.log(bookingData, 'USE EFFECT')
  })
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

      <Booking
        boats={boats}
        setBoats={setBoats}
        bookingDate={bookingData.date}
        changeHandler={changeHandler}
      />
      <StyledForm>
        <label>
          Name:
          <br />
          <StyledInputName
            placeholder="Nachname, Vorname"
            type="text"
            name="name"
            value={bookingData.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Email:
          <br />
          <StyledInputName
            placeholder="Max@google.com"
            type="text"
            name="email"
            value={bookingData.email}
            onChange={changeHandler}
          />
        </label>
        <br />
        <StyledInputBuchen
          type="submit"
          value="Buchen"
          onSubmit={submitHandler}
        />
      </StyledForm>
    </div>
  )
}

export default Home
