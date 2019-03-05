import React, { useState } from 'react'
import styled from 'styled-components'

export default function Booking(props) {
  const [bookingDate, setBookingDate] = useState('')
  const [boats, setBoats] = useState([
    {
      name: 'Max',
      bookedDates: ['2019-03-02', '2019-03-03', '2019-03-04', '2019-03-05'],
    },
    { name: 'Moritz', bookedDates: '2019-03-02' },
    { name: 'Mosquito', bookedDates: '2019-03-02' },
  ])
  const StyledBookingSection = styled.div`
    margin: 50px 0px 50px 18px;
    line-height: 2em;
  `
  const Styledul = styled.div`
    line-height: 1.5em;
  `

  const changeDate = e => {
    setBookingDate(e.target.value)
  }

  return (
    <StyledBookingSection id="booking">
      <h2>Wähle ein Datum:</h2>
      <input type="date" value={bookingDate} onChange={changeDate} />
      {bookingDate ? (
        <div>
          <h2>Folgende Boote sind verfügbar:</h2>
          <Styledul>
            {boats
              .filter(boat => !boat.bookedDates.includes(bookingDate))
              .map(boat => {
                return <li key={boat.name}>{boat.name}</li>
              })}
          </Styledul>
        </div>
      ) : null}
    </StyledBookingSection>
  )
}
