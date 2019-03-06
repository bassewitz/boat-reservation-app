import React from 'react'
import styled from 'styled-components'

const StyledCardMax = styled.section`
  padding: 18px 18px 0;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  position: relative;
  width: 210px;
  height: 260px;
  margin: 18px;
`

const StyledCardMoritz = styled.section`
  padding: 18px 18px 0;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  position: relative;
  width: 210px;
  height: 260px;
  margin: 18px;
`
const StyledCardMosquito = styled.section`
  padding: 18px 18px 0;
  background: #fafafa;
  border: 2px solid #ccc;
  border-radius: 4px;
  position: relative;
  width: 210px;
  height: 260px;
  margin: 18px;
`

function Card() {
  return (
    <div>
      <section>
        <StyledCardMax>
          <h4>BOOT 1:</h4>
          <h3>Max</h3>
          <p>content</p>
        </StyledCardMax>
      </section>
      <section>
        <StyledCardMoritz>
          <h4>BOOT 1:</h4>
          <h3>Moritz</h3>
          <p>content</p>
        </StyledCardMoritz>
      </section>
      <section>
        <StyledCardMosquito>
          <h4>BOOT 1:</h4>
          <h3>Mosquito</h3>
          <p>content</p>
        </StyledCardMosquito>
      </section>
    </div>
  )
}
export default Card
