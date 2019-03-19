import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function Booking({
  boats,
  setBoats,
  bookingDate,
  changeHandler,
}) {
  const StyledBookingSection = styled.div`
    margin: 50px 0px 50px 18px;
    line-height: 2em;
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
    appearance: none;
    font-family: roboto, sans;
    border: 1px solid #ddd;
    border-radius: none;
    background: white;
    padding: 4px 10px 4px 5px;
    margin: 5px 0 0 0;
    color: dimgrey;
    font-size: 12px;
    font-weight: bolder;
  `

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
    <StyledBookingSection id="booking">
      <h3>Wähle ein Datum:</h3>
      <StyledInputDate
        type="date"
        name="date"
        value={bookingDate}
        onChange={changeHandler}
      />
      {bookingDate ? (
        <div>
          <h3>Folgende Boote sind verfügbar:</h3>
          <Styledul>
            {boats
              .filter(boat => !boat.bookedDates.includes(bookingDate))
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
  )
}
