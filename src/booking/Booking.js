import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Logogruen from '../pics/logogruen.svg'

const Styledlogo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 20px 0 0;
`

const StyledBookingSection = styled.div`
  margin: 0px 0px 30px 18px;
  line-height: 2em;
  @media (min-width: 400px) {
    justify-content: center;
  }
`

const Styledul = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  background: none;
`

const StyledInputDate = styled.input`
  font-family: roboto, sans;
  border: 1px solid #ddd;
  border-radius: none;
  background: white;
  margin: 5px 0 0 0;
  padding: 4px 10px 4px 5px;
  color: dimgrey;
  font-size: 12px;
  font-weight: bolder;
  @media (min-width: 400px) {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 5px;
  }
`
const StyledForm = styled.form`
  font-family: 'Roboto';
  font-weight: normal;
  margin-left: 20px;
`

const StyledInputBuchen = styled.input`
  border-radius: none;
  background: darkturquoise;
  color: white;
  font-weight: normal;
  font-size: 13px;
  padding: 5px 145px;
  margin: 20px 0 15px 0;
  @media (min-width: 400px) {
    display: flex;
    justify-items: center;
    align-items: center;
    margin: auto;
  }
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

export default function Booking({ boats, setBoats, onSubmit, history }) {
  const defaultData = {
    date: '2019-03-01',
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
    onSubmit({ bookingData })
    setBookingData(defaultData)
    history.push('/yourboats')
  }

  function onSelection(boat) {
    const index = boats.indexOf(boat)
    setBoats([
      ...boats.slice(0, index),
      { ...boat, isSelected: !boat.isSelected },
      ...boats.slice(index + 1),
    ])
    console.log(boats)
  }

  return (
    <React.Fragment>
      <Styledlogo src={Logogruen} alt="Logo" />
      <StyledBookingSection id="booking">
        <h3>Wähle ein Datum:</h3>
        <StyledInputDate
          type="date"
          name="date"
          value={bookingData.date}
          onChange={changeHandler}
        />
        {bookingData.date ? (
          <div>
            <h3>Folgende Boote sind verfügbar:</h3>
            <Styledul>
              {boats
                .filter(boat => !boat.bookedDates.includes(bookingData.date))
                .map(boat => {
                  return (
                    <Card
                      onSelection={() => onSelection(boat)}
                      key={boat.name}
                      name={boat.name}
                      boatNumber={boat.boatNumber}
                      content={boat.content}
                      image={boat.image}
                      isSelected={boat.isSelected}
                    />
                  )
                })}
            </Styledul>
          </div>
        ) : null}
      </StyledBookingSection>
      <StyledForm onSubmit={submitHandler}>
        <label>
          Name:
          <br />
          <StyledInputName
            placeholder="Vorname Nachname"
            type="text"
            name="name"
            value={bookingData.name}
            onChange={changeHandler}
          />
        </label>
        <br />
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
        <StyledInputBuchen type="submit" value="Buchen" />
      </StyledForm>
    </React.Fragment>
  )
}
