import React from 'react'
import styled from 'styled-components'

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
  border-width: 0 0 130px 230px;
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
  return (
    <React.Fragment>
      <h5>
        Hallo xxx <br />
        Folgende Boote hast am xxx reserviert:
      </h5>
      <Styledul>
        {boats.map(boat => {
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
