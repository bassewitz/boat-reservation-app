import React from 'react'
import styled from 'styled-components'

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
const Bookmark = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 130px 230px;
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
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
  line-height: 1.2;
`

// function Card({ name, boatNumber, content, image, onSelection, isSelected }) {
function Card({ name, boatNumber, content, image, onSelection, isSelected }) {
  return (
    <div>
      <StyledCard
        style={{ backgroundImage: `url(${image})` }}
        onClick={onSelection}
        isSelected={isSelected}
      >
        <Bookmark
          style={{ borderBottomColor: isSelected ? 'white' : 'transparent' }}
        />
        <h4>{boatNumber}</h4>
        <Bootname>{name}</Bootname>
        <Bootinfo>{content}</Bootinfo>
      </StyledCard>
    </div>
  )
}
export default Card
