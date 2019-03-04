import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Booking from '../booking/Booking'

const StyledHeadline = styled.div`
  display: grid;
  align-content: flex-end;
  padding: 12px;
  color: white;
  text-decoration: uppercase;
  font-size: 65px;
  background: turquoise;
  font-family: 'Roboto', serif;
  font-weight: bold;
  line-height: 1em;
  text-transform: uppercase;
`

/*const Styledspan = styled.span`
  font-family: 'Roboto', serif;
  font-size: 90px;
  font-weight: bold;
  line-height: 1em; 
`*/

function App() {
  return (
    <React.Fragment>
      <Booking />
      <Helmet>
        <meta charSet="utf-8" />
        <title>OnWater</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
      </Helmet>
      <StyledHeadline>
        Max <br />
        Moritz & <br />
        Mosquito
      </StyledHeadline>
      <button>book boat</button> }
    </React.Fragment>
  )
}

export default App
