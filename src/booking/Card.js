import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  padding: 18px 18px 0;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  position: relative;
  width: 210px;
  height: 260px;
  margin: 18px;
  scroll-snap-align: start;
`

function Card({ name, boatNumber, content }) {
  return (
    <div>
      <StyledCard>
        <h4>{boatNumber}</h4>
        <h3>{name}</h3>
        <p>{content}</p>
      </StyledCard>
    </div>
  )
}
export default Card
