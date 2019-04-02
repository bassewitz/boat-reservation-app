import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logogruen from '../pics/logogruen.svg'
import Wassergruen from '../pics/wassergruen.png'

const Styledlogo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 20px 0 0;
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
const StyledCard = styled.section`
  padding: 18px 18px 0;
  border-radius: 4px;
  position: relative;
  width: 210px;
  height: 260px;
  margin: 7px 0 0 18px;
  scroll-snap-align: start;
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 2px 10px 16px rgba(0, 0, 0, 0.3);
`

const Bookmarked = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 120px 247px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: white;
  opacity: 0.5;
  position: absolute;
  transition: all 0.4s ease;
  bottom: 0;
  right: 0;
`

const Bootname = styled.div`
  font-weight: normal;
  margin: 20px 0 80px 0;
  color: white;
  font-size: 22px;
`

const Bootinfo = styled.div`
  color: white;
  font-size: 14px;
`
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 120px 250px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: dimgray;
  opacity: 0.5;
  position: absolute;
  transition: all 0.4s ease;
  bottom: 0;
  right: 0;
`
const StyledImg = styled.section`
  border-radius: 4px;
  position: relative;
  width: 250px;
  height: 300px;
  margin: 30px auto;
  background-size: cover;
  background-position: center;
  box-shadow: 2px 10px 16px rgba(0, 0, 0, 0.3);
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
const StyledZurBuchung = styled.button`
  border-radius: none;
  background: darkturquoise;
  color: white;
  font-weight: normal;
  font-size: 13px;
  padding: 6px 93px;
  margin: 60px 20px 10px 20px;
  @media (min-width: 400px) {
    display: flex;
    justify-items: center;
    align-items: center;
  }
`
const Headline = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: normal;
  color: darkturquoise;
  font-size: 15px;
  margin: 100px 0 0 0;
  padding: 20px 0 0 20px;
`

function Card({ boats }) {
  const [bookingData, setBookingData] = useState('')

  useEffect(() => {
    setBookingData(JSON.parse(localStorage.getItem('bookingData')))
    console.log(bookingData)
  }, [])

  return (
    <React.Fragment>
      {localStorage.bookingData ? (
        <React.Fragment>
          <Styledlogo src={Logogruen} alt="Logo" />
          <h5>
            Hallo {bookingData.name},
            <br />
            folgende Boote hast Du am {bookingData.date} reserviert:
          </h5>
          <Styledul>
            {boats
              .filter(boat => {
                return boat.bookedDates.some(date => {
                  return date.email.includes(bookingData.email)
                })
              })
              .map(boat => {
                return (
                  <StyledCard style={{ backgroundImage: `url(${boat.image})` }}>
                    <Bookmarked />
                    <h4>{boat.boatNumber}</h4>
                    <Bootname>{boat.name}</Bootname>
                    <Bootinfo>{boat.content}</Bootinfo>
                  </StyledCard>
                )
              })}
          </Styledul>
        </React.Fragment>
      ) : (
        <div>
          <Styledlogo src={Logogruen} alt="Logo" />
          <Headline>Du hast noch kein Boot ausgewählt:</Headline>
          <StyledImg style={{ backgroundImage: `url(${Wassergruen})` }}>
            <Triangle />
            <h1>Max, Moritz oder lieber Mosquito ?</h1>
          </StyledImg>
          <StyledZurBuchung>Zurück zum Reservieren</StyledZurBuchung>
        </div>
      )}
    </React.Fragment>
  )
}
export default Card
