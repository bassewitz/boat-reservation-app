import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { FaAnchor } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
import Yourboats from '../booking/Yourboats'
import Kanuorange from '../pics/kanuorange.png'
import Kanublau from '../pics/kanublau.png'
import Kanulila from '../pics/kanulila.png'
import Home from '../home/Home'
import Booking from '../booking/Booking'

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid darkturquoise;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: darkturquoise;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;

  &.active {
    background: white;
  }
`

function App() {
  const [boats, setBoats] = useState([
    {
      name: 'Max',
      boatNumber: 'Boot 1',
      content: 'Test',
      bookedDates: [
        { date: '2019-03-02', name: 'Steffi', email: 'steffi@gmx.de' },
        '2019-03-03',
        '2019-03-04',
        '2019-03-05',
      ],
      image: Kanublau,
      isSelected: false,
    },
    {
      name: 'Moritz',
      boatNumber: 'Boot 2',
      content: 'Test',
      bookedDates: '2019-03-02',
      image: Kanulila,
      isSelected: false,
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

  function handleBooking(bookingData) {
    setBoats()
  }
  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/reservieren"
          render={() => (
            <Booking
              setBoats={setBoats}
              onSubmit={handleBooking}
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
          <StyledLink to="/reservieren">
            <FaCalendar />
          </StyledLink>
          <StyledLink to="/yourboats">
            <FaAnchor />
          </StyledLink>
        </Nav>
      </React.Fragment>
    </Router>
  )
}

export default App
