import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 

  body {
    font-family: Roboto, sans-serif;
    margin: 0;
  }

  h1, h2, h4, h5, h6,
  ul, ol {
    margin: 0;
  }
  h4{
    font-weight: normal; 
    letter-spacing: 2px;
    color: white;
  }

  label {
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: turquoise;
    font-size: 13px;
    margin-top: 20px;
  }

  h3 {
    font-family: Roboto, sans-serif;
    font-weight: normal; 
    color: turquoise;
    font-size: 13px;
    margin: 20px 0 -10px 0;
  }
  
  p{
    color:black;
    font-size:14px;
  }

  
  button {
    background: white;
    border: none;
    border-radius: 2px;
    color: turquoise;
    font-weight: normal;
    font-size: 13;
    padding: 5px 20px;
    margin: -80px 0 0px 240px;
    position: absolute;
  
  }


  input {
    background: white;
    border: 1px solid #ddd;
    border-radius: none;
    background: white;
    padding-left: 4px;
  
  }
`
