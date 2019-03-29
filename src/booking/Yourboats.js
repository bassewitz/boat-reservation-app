import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logogruen from '../pics/logogruen.svg'

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
function Card({ boats }) {
  const [bookingData, setBookingData] = useState('')

  useEffect(() => {
    setBookingData(JSON.parse(localStorage.getItem('bookingData')))
    console.log(bookingData)
  }, [])

  return (
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
  )
}
export default Card
