import React from 'react'
import styled from 'styled-components'
// import Card from './Card'

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

// function Card({ name, boatNumber, content, image }) {
function Card({ boats }) {
  return (
    <React.Fragment>
      <h4>Hallo xxx</h4>
      {boats.map(boat => {
        return (
          <StyledCard style={{ backgroundImage: `url(${boat.image})` }}>
            <h4>{boat.boatNumber}</h4>
            <Bootname>{boat.name}</Bootname>
            <Bootinfo>{boat.content}</Bootinfo>
          </StyledCard>
        )
      })}
    </React.Fragment>
  )
}
export default Card
