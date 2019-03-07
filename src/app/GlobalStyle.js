import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    margin: 0;
  }

  html, body {
    height:100vh;
    width: 100%;
  }

  h1, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
  }
  h4{
    font-weight: normal; 
    letter-spacing: 2px;
    color: white;
  }

  h3{
    font-weight: normal; 
  }
  
  p{
    color:black;
    font-size:14px;
  }

  h2{
    margin:0px;
    font-weight: normal;
    margin-top:20px;

  }

  input, textarea, button {
    font-size: 1em;
  }

  input, textarea {
    appearance: none;
    border: 4px solid #ddd;
    border-radius: none;
    background: white;
    padding-left: 4px;
  }

  button {
    background: black;
    border: none;
    border-radius: 3px;
    color: white;
    font-weight: normal;
    padding: 10px 30px;
    margin: 280px 0 0 18px;
  }
`
