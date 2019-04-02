import React, { useState, useEffect } from 'react'
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

import boatsData from './boatsData.json'

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
  const [boats, setBoats] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (localStorage.boats) {
      setBoats(JSON.parse(localStorage.getItem('boats')))
    } else {
      localStorage.setItem('boats', JSON.stringify(boatsData))
      setBoats(JSON.parse(localStorage.getItem('boats')))
    }
  }, [])

  // function handleBooking({ bookingData }) {
  //   alert('bookingData')
  //   const index = boats.findIndex(boat => boat.isSelected === true)
  //   console.log(index)
  //   const boat = boats[index]

  // function saveToStorage(name, data) {
  //   const dataString = JSON.stringify(data)
  //   localStorage.setItem(name, dataString)
  // }

  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/reservieren"
          render={({ history }) => (
            <Booking history={history} setBoats={setBoats} boats={boats} />
          )}
        />
        <Route
          exact
          path="/yourboats"
          render={() => <Yourboats boats={boats} />}
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
