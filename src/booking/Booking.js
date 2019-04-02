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
    date: '2019-03-02',
    name: '',
    email: '',
  }

  const [bookingData, setBookingData] = useState(defaultData)
  useEffect(() => {
    console.log(bookingData)
  }, [bookingData])

  function onInputChange(e) {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    })
  }

  function onCardClick(number) {
    const index = boats.findIndex(boat => boat.boatNumber === number)
    const boat = boats[index]

    localStorage.setItem(
      'boats',
      JSON.stringify([
        ...boats.slice(0, index),
        {
          ...boat,
          bookedDates: [
            ...boat.bookedDates,
            {
              date: bookingData.date,
              name: bookingData.name,
              email: bookingData.email,
            },
          ],
        },
        ...boats.slice(index + 1),
      ])
    )

    setBoats(JSON.parse(localStorage.getItem('boats')))
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
          onChange={onInputChange}
        />
        <label>
          Name:
          <br />
          <StyledInputName
            placeholder="Vorname Nachname"
            type="text"
            name="name"
            value={bookingData.name}
            onChange={onInputChange}
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
            onChange={onInputChange}
          />
        </label>
        <br />
        {bookingData.date ? (
          <div>
            <h3>Folgende Boote sind verfügbar:</h3>
            <Styledul>
              {boats
                .filter(boat => {
                  return boat.bookedDates.some(date => {
                    return date.date !== bookingData.date
                  })
                })
                .map(boat => {
                  return (
                    <Card
                      setBoats={setBoats}
                      onCardClick={onCardClick}
                      // onSelection={() => onSelection(boat)}
                      boat={boat}
                      // key={boat.name}
                      // name={boat.name}
                      // boatNumber={boat.boatNumber}
                      // content={boat.content}
                      // image={boat.image}
                      // isSelected={boat.isSelected}
                    />
                  )
                })}
            </Styledul>
          </div>
        ) : null}
      </StyledBookingSection>
    </React.Fragment>
  )
}
