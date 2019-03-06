import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function Booking(props) {
  const [bookingDate, setBookingDate] = useState('')
  const [boats, setBoats] = useState([
    {
      name: 'Max',
      boatNumber: 1,
      content: 'Test',
      bookedDates: ['2019-03-02', '2019-03-03', '2019-03-04', '2019-03-05'],
    },
    {
      name: 'Moritz',
      boatNumber: 2,
      content: 'Test',
      bookedDates: '2019-03-02',
    },
    {
      name: 'Mosquito',
      boatNumber: 3,
      content: 'Test',
      bookedDates: '2019-03-02',
    },
  ])

  const StyledBookingSection = styled.div`
    margin: 50px 0px 50px 18px;
    line-height: 2em;
  `

  const changeDate = e => {
    setBookingDate(e.target.value)
  }

  const Styledul = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    background: none;
  `

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
                return (
                  <Card
                    key={boat.name}
                    name={boat.name}
                    boatNumber={boat.boatNumber}
                    content={boat.content}
                  />
                )
              })}
          </Styledul>
        </div>
      ) : null}
    </StyledBookingSection>
  )
}
