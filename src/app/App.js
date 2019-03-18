import React, { useState } from 'react'
import styled from 'styled-components'
import BoatPicture from '../pics/boatyellow.png'
import Green from '../pics/background-green.png'
import Booking from '../booking/Booking'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { FaCheckCircle } from 'react-icons/fa'
import CardsPage from '../booking/Card'
import Yourboats from '../booking/Yourboats'
import Kanuorange from '../pics/kanuorange.png'
import Kanublau from '../pics/kanublau.png'
import Kanulila from '../pics/kanulila.png'
import Home from '../home/Home'

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
const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid white;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkturquoise;
  color: white;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;

  &.active {
    background: turquoise;
  }
`

const StyledForm = styled.form`
  font-family: 'Roboto';
  font-weight: normal;
  margin-left: 20px;
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

function App() {
  const [bookingDate, setBookingDate] = useState('')
  const [boats, setBoats] = useState([
    {
      name: 'Max',
      boatNumber: 'Boot 1',
      content: 'Test',
      bookedDates: ['2019-03-02', '2019-03-03', '2019-03-04', '2019-03-05'],
      image: Kanublau,
      isSelected: true,
    },
    {
      name: 'Moritz',
      boatNumber: 'Boot 2',
      content: 'Test',
      bookedDates: '2019-03-02',
      image: Kanulila,
      isSelected: true,
    },
    {
      name: 'Mosquito',
      boatNumber: 'Boot 3',
      content: 'Test',
      bookedDates: '2019-03-02',
      image: Kanuorange,
      isSelected: false,
    },
  ])
  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <Route
          exact
          path="/"
          render={() => (
            <Home
              setBoats={setBoats}
              bookingDate={bookingDate}
              setBookingDate={setBookingDate}
              boats={boats}
            />
          )}
        />

        <Route
          exact
          path="/yourboats"
          render={() => (
            <Yourboats boats={boats.filter(boat => boat.isSelected)} />
          )}
        />
        <Nav>
          <StyledLink to="/">
            <FaHome />
          </StyledLink>
          <StyledLink to="/yourboats">
            <FaCheckCircle />
          </StyledLink>
        </Nav>
      </React.Fragment>
    </Router>
  )
}

export default App
