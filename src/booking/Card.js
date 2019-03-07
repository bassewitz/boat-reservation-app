import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  padding: 18px 18px 0;
  border-radius: 4px;
  position: relative;
  width: 210px;
  height: 260px;
  margin: 18px;
  scroll-snap-align: start;
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 2px 10px 16px rgba(0, 0, 0, 0.3);
  border: 3px solid ${p => (p.isSelected ? 'turquoise' : 'none')};
  }
`

function Card({ name, boatNumber, content, image, onSelection, isSelected }) {
  return (
    <div>
      <StyledCard
        style={{ backgroundImage: `url(${image})` }}
        onClick={onSelection}
        isSelected={isSelected}
      >
        <h4>{boatNumber}</h4>
        <h3>{name}</h3>
        <p>{content}</p>
      </StyledCard>
    </div>
  )
}
export default Card
